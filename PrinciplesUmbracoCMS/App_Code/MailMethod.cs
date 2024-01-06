using System.Net;
using System.Text;
using Umbraco.Cms.Core;
using System.Net.Mail;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Configuration.Models;
using Microsoft.Extensions.Options;
using System.ComponentModel;


namespace Principles_UmbracoCMS.App_Code
{
    public class MailMethod
    {
        private static IContentService? _contentService;
        private static IHttpContextAccessor? _httpContextAccessor;
        private static GlobalSettings _globalSettings;

        private static readonly string FromEmailMaster = "formsend@outlook.com";
        private static readonly string FromEmailDisplay = "UNIDO";
        private static readonly IConfiguration AppSetting = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json")
                    .Build();

        public MailMethod(IContentService contentService, IHttpContextAccessor httpContextAccessor, IOptions<GlobalSettings> globalSettings)
        {
            _contentService = contentService;
            _httpContextAccessor = httpContextAccessor;

            _globalSettings = globalSettings.Value;

            var smtpHost = _globalSettings?.Smtp?.Host;

        }

        public static string SendMailWithTemplate(
            string mailTemplate,
            string from, string toMail,
            String MailOtherTxt = "",
            string cultureInfo = "",
            string hisName = "",
            string dateOfExam = "",
            string ResetPasswordLink = "",
            string userName = "",
            string password = "")
        {
            var urlDomin = UriPartial.Authority;

            string ret = "f", returnUrl = "", datesOfTraining = "";

            IContent mailFolder = null;


            if (!string.IsNullOrEmpty(mailTemplate))
            {
                if (mailFolder != null)
                {
                    var contentGuid = ((GuidUdi)(mailFolder.GetValue<Udi>(mailTemplate)));

                    if (contentGuid != null)
                    {
                        var newGuid = contentGuid.Guid;

                        var mailContent = _contentService?.GetById(newGuid);

                        cultureInfo = string.IsNullOrEmpty(cultureInfo) ? "en-US" : cultureInfo;

                        string emailTitle = mailContent.GetValue("emailTitle", cultureInfo)?.ToString();

                        string emailTextBody = mailContent.GetValue<string>("mailBody", cultureInfo);

                        if (emailTextBody == null)
                        {
                            emailTextBody = mailContent.GetValue<string>("emailContent", cultureInfo);
                        }

                        Dictionary<string, string> emailParams = new Dictionary<string, string>
                        {
                            { "@memberEmail", toMail },
                            { "@memberFullName", hisName },
                            { "@memberUserName", userName },
                            { "@memberPassword", password },
                            { "@dateOfExam", dateOfExam },
                            { "@datesOfTraining", datesOfTraining },
                            { "@urlDomin", urlDomin.ToString() },
                            { "@returnUrl", returnUrl},
                            { "@mailBody", MailOtherTxt},
                            { "@ResetPassLink", ResetPasswordLink},
                        };

                        try
                        {
                            SendEmailWithTxtBody(emailTextBody, from, toMail, emailTitle, emailParams);
                            ret = "t";
                        }
                        catch (Exception)
                        {
                            ret = "f";
                        }
                    }
                }
            }

            return ret;
        }

        public static void SendEmailWithTxtBody(string from, string to, string subject, string emailBody, Dictionary<string, string> emailParams)
        {
            try
            {
                if (emailParams != null)
                {
                    if (!string.IsNullOrEmpty(emailBody))
                    {
                        foreach (KeyValuePair<string, string> kvp in emailParams)
                        {
                            emailBody = emailBody.Replace(kvp.Key, kvp.Value);
                        }
                    }

                    if (!string.IsNullOrEmpty(subject))
                    {
                        foreach (KeyValuePair<string, string> kvp in emailParams)
                        {
                            subject = subject.Replace(kvp.Key, kvp.Value);
                        }
                    }
                }

                if (!string.IsNullOrEmpty(emailBody))
                {
                    SendMailMessage(from, to, subject, emailBody.ToString());
                }

            }
            catch (Exception ex)
            {
                var xx = ex;
            }
        }

        public static async Task<string> SendEmailFromFileTemplet(string fileName, string to, string subject, Dictionary<string, string> emailParams)
        {
            try
            {
                fileName = MapWebRootPath(fileName);

                StringBuilder emailBody = new(System.IO.File.ReadAllText(fileName));

                foreach (KeyValuePair<string, string> kvp in emailParams)
                {
                    emailBody.Replace(kvp.Key, kvp.Value);
                }

                return await SendMailMessage("", to, subject, emailBody.ToString());
            }
            catch (Exception ex)
            {
                var xx = ex;
                return ex.Message;
            }

        }
        public static string? MapWebRootPath(string path)
        {
            return AppDomain.CurrentDomain?.GetData("WebRootPath")?.ToString() + path;
        }

        public static async Task<string> SendMailMessage(string from, string to, string subject, string body)
        {
            if (string.IsNullOrEmpty(to))
            {
                return "false to is Empty";
            }

            var connectionString = AppSetting.GetSection("Umbraco:CMS:Global:Smtp");
            var _from = connectionString.GetSection("From").Value;
            var host = connectionString.GetSection("Host").Value;
            var username = connectionString.GetSection("Username").Value;
            var password = connectionString.GetSection("Password").Value;
            var _Port = connectionString.GetSection("Port").Value;

            // Instantiate a new instance of MailMessage
            MailMessage mMailMessage = new();
            // Set the sender address of the mail message

            if (!string.IsNullOrEmpty(from))
            {
                mMailMessage.From = new MailAddress(from);
            }
            else
            {
                mMailMessage.From = new MailAddress(FromEmailMaster, FromEmailDisplay);
            }

            mMailMessage.SubjectEncoding = Encoding.UTF8;
            mMailMessage.HeadersEncoding = Encoding.UTF8;

            mMailMessage.BodyEncoding = Encoding.GetEncoding("utf-8");

            // Set the recepient address of the mail message
            if (to.Contains(','))
            {
                string[] tos = to.Split(",".ToCharArray());
                foreach (string email in tos)
                {
                    mMailMessage.To.Add(new MailAddress(email));
                }
            }
            else if (to.Contains(';'))
            {
                string[] tos = to.Split(";".ToCharArray());

                foreach (string email in tos)
                {
                    mMailMessage.To.Add(new MailAddress(email));
                }
            }
            else
            {
                mMailMessage.To.Add(new MailAddress(to));
            }

            mMailMessage.Subject = subject;
            mMailMessage.Headers.Add("Disposition-Notification-To", "email address");
            mMailMessage.DeliveryNotificationOptions = DeliveryNotificationOptions.OnSuccess;

            var htmlView = AlternateView.CreateAlternateViewFromString(body, Encoding.UTF32, "text/html");

            mMailMessage.IsBodyHtml = true;
            mMailMessage.AlternateViews.Add(htmlView);

            // Instantiate a new instance of SmtpClient

            SmtpClient mSmtpClient = new(host, Convert.ToInt32(_Port))
            {
                Credentials = new NetworkCredential(username, password),
                // Send the mail message
                DeliveryMethod = SmtpDeliveryMethod.Network,
                //mSmtpClient.UseDefaultCredentials = true;
                UseDefaultCredentials = false,
                EnableSsl = true
            };
            try
            {
                mSmtpClient.Send(mMailMessage);

                return "true";
            }
            catch (Exception ex)
            {
               return ex.Message;
            }

        }


        public static void SendNewsLetterEmail(string from, string toMail, string subject, string title, String body, string brochurLink, int deleteLink)
        {
            string host = _httpContextAccessor?.HttpContext?.Request.Host.Value;

            Dictionary<string, string> emailParams = new Dictionary<string, string>
            {
                { "<%title%>", title },
                { "<%toMail%>", toMail },
                { "<%body%>", body },
                { "<%brochureLink%>", brochurLink },

                { "<%deleteLink%>", $"http://{host}/en/unsubscribe.aspx?rid={deleteLink}" }
            };

            //  var emailPath = "~/EmailTemplate/OtheMail/newsLetter.html";

            //  SendMailWithTemplate(HttpContext.Current.Server.MapPath(emailPath), from, toMail, subject, body);
        }

        private static string GetUserDataForMail(string txtEmail, string txtPassword)
        {
            var ret = "<div class='newAccount'>"
                    + "<div style='color:#fff;'> هذه بيانات حسابك </div>"
                    + "<div><table style = 'margin:auto;' cellspacing= '5'><tr>"
                    + "<td class='txt-broun'> اسم المستخدم:</td>"
                    + "<td class='clintMail' style='color:#fff !important'>" + txtEmail + "</td></tr>"
                    + "<tr><td class='txt-broun'> كلمة المرور : </td>"
                    + "<td style='color:#fff;'>" + txtPassword + "</td>"
                    + "</tr></table></div></div><br/>";

            return ret;
        }


        public static Dictionary<string, string> ConvertToDictionary(object source)
        {
            var dictionary = new Dictionary<string, string>();

            foreach (PropertyDescriptor property in TypeDescriptor.GetProperties(source))
            {
                object value = property.GetValue(source);

                try
                {
                    dictionary.Add("<%" + property.Name + "%>", value?.ToString());
                }
                catch
                {
                    dictionary.Add("<%" + property.Name + "%>", "");
                }

            }
            return dictionary;
        }

        public static Dictionary<string, string> ConvertToMailDictionary(Dictionary<string, string> source)
        {
            var dictionary = new Dictionary<string, string>();
            foreach (var property in source)
            {
                try
                {
                    dictionary.Add("<%" + property.Key + "%>", property.Value);
                }
                catch
                {
                    dictionary.Add("<%" + property.Key + "%>", "");
                }
            }
            return dictionary;
        }

        public static string ReturnProductTable(List<ItemData> prodList)
        {

            var totalNum = 0.00;

            var tablProduct = "<table border='0' cellspacing='0' style='color:#000;font-family:Helvetica Neue,Arial,sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;'>"
                                                + " <tr style='border-bottom:1px solid #ecedee;text-align:left;'>"
                                                + "<th style='padding: 0 15px 10px 0;'>Item</th>"
                                                + "<th style='padding: 0 15px;'>Qt.</th>"
                                                + "<th style='padding: 0 0 0 15px;' align='right'>Price</th>"
                                                + "</tr>";

            foreach (var item in prodList)
            {
                tablProduct += "<tr>"
                             + "<td style='padding: 5px 15px 5px 0;'>" + item.ItemId + "</td>"
                             + "<td style='padding: 0 15px;'>1</td>"
                             + "<td style='padding: 0 0 0 15px;' align='right'>" + item.ItemText + "</td>"
                             + "</tr>";

                totalNum += Convert.ToDouble(item.ItemText);
            }

            tablProduct += "<tr style='border-bottom:2px solid #ecedee;text-align:left;padding:15px 0;'>"
                             + "<td style='padding: 5px 15px 5px 0; font-weight:bold'>TOTAL</td>"
                             + "<td style='padding: 0 15px;'></td>"
                             + "<td style='padding: 0 0 0 15px; font-weight:bold' align='right'>" + totalNum + " EGP</td>"
                             + "</tr></table>";

            return tablProduct;
        }

    }
}