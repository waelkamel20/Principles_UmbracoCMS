using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;
using StackExchange.Profiling.Internal;
using System.Globalization;
using Umbraco.Cms.Web.Common.Attributes;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Core.Models.PublishedContent;

using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;
using Principles_UmbracoCMS.App_Code;

namespace Principles_UmbracoCMS.Controllers
{
    [PluginController("heading")]
    public class UtilityController : UmbracoApiController
    {
        private readonly IContentService _ContentService;
        private readonly IMemberService _MemberService;
        readonly UmbracoHelper _umbracoHelper;
        readonly ServiceContext _services;
        private readonly IHostingEnvironment _hostingEnvironment;

        public UtilityController(IContentService contentService,
            IMemberService memberService, ServiceContext services,
            UmbracoHelper umbracoHelper, IHostingEnvironment hostingEnvironment)
        {
            _ContentService = contentService;
            _MemberService = memberService;
            _umbracoHelper = umbracoHelper;
            _services = services;
            _hostingEnvironment = hostingEnvironment;
        }


        [HttpPost]
        public async Task<JsonResult> SendMailToClient(SendMailObject maileBody)
        {
            if (!string.IsNullOrEmpty(maileBody.txtToEmail))
            {
                if (maileBody.txtToEmail == "null")
                {
                    var member = _MemberService.GetById(Convert.ToInt32(maileBody.pageId));
                    maileBody.txtToEmail = member?.Email;
                }
                if (!string.IsNullOrEmpty(maileBody.txtToEmail))
                {
                    var lang = maileBody.memberCulture == "ar-eg" ? "ar" : "en";

                    var urlDomin = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.Value}";

                    var mailTemplet = new Dictionary<string, string> {
                                    { "<%companyName%>", maileBody.fullName },
                                    { "<%maileBody%>", maileBody.maileBody },
                                    { "<%loginUrl%>", urlDomin + _umbracoHelper.Content(1155)?.Url() }
                                  };

                    await MailMethod.SendEmailFromFileTemplet(
                                     "\\EmailTemplate\\Supplier\\" + lang + "\\MailToClient\\ClientMail.html",
                                     maileBody.txtToEmail, maileBody.massageType, mailTemplet);


                    return new JsonResult(new { data = "t" });
                }
                else
                {
                    return new JsonResult(new { data = "" });
                }
            }
            else
            {
                return new JsonResult(new { data = "" });
            }
        }

        public class SendMailObject
        {
            public string? docType { get; set; }
            public int? pageId { get; set; }
            public string? fullName { get; set; }
            public string? memberCulture { get; set; }
            public string? txtToEmail { get; set; }
            public string? massageType { get; set; }
            public string? maileBody { get; set; }

        }

        public static async Task<bool> SendMailToSupport(UmbracoHelper umbracoHelper, int pageId, string fileName, string subject, Dictionary<string, string> emailParams, string toMail = "")
        {
            IPublishedContent mailFolder = null;

            var sittingDoc = 1137;

            if (toMail == "")
            {
                if (umbracoHelper != null)
                {
                    mailFolder = umbracoHelper.Content(pageId);
                }
                if (mailFolder != null)
                {
                    toMail = mailFolder.Value<string>("adminEmail");

                    if (string.IsNullOrEmpty(toMail))
                    {
                        mailFolder = umbracoHelper.Content(sittingDoc);
                        toMail = mailFolder.Value<string>("adminEmail");
                    }
                }
            }

            MailMethod.SendEmailFromFileTemplet(fileName, toMail, subject, emailParams);

            return true;
        }


        public static async Task<bool> SendMailToSupport(string toAdminMail, string fileName, string subject, Dictionary<string, string> emailParams)
        {

            MailMethod.SendEmailFromFileTemplet(fileName, toAdminMail, subject, emailParams);

            return true;
        }


        public static async Task<string> RemoveFileCash()
        {
            string dirName = MapWebRootPath("\\images\\mediaBuffer\\");

            try
            {
                var directory = new DirectoryInfo(dirName);

                foreach (DirectoryInfo dir in directory.GetDirectories())
                {
                    if (dir.CreationTime < DateTime.Now.AddHours(-2))
                        dir.Delete(true);
                }
            }
            catch
            {

            }
            return "";
        }

        public static string MapWebRootPath(string path)
        {
            return (string)AppDomain.CurrentDomain.GetData("WebRootPath") + path;
        }

        public static string GetNameFromPath(string filePath)
        {
            return Path.GetFileName(filePath);
        }

        public static string? GetAttributeNameInHTMLString(string htmlString, string attributeName)
        {
            HtmlDocument document = new(); document.LoadHtml(htmlString);
            return document.DocumentNode.SelectNodes("//span").FirstOrDefault()?.GetAttributeValue(attributeName, "").ToString();
        }

        public static string? GetTextInHTMLString(string htmlString, string elm)
        {
            HtmlDocument doc = new(); doc.LoadHtml(htmlString);
            return doc.DocumentNode.SelectNodes("//" + elm).FirstOrDefault()?.InnerText;
        }

        public string GetDictionaryValueForLanguage(string key, CultureInfo culture, ServiceContext services)
        {
            var dictionaryItem = services.LocalizationService?.GetDictionaryItemByKey(key);
            if (dictionaryItem != null)
            {
                var translation = dictionaryItem.Translations.SingleOrDefault(x => x.Language.CultureInfo.Equals(culture));
                if (translation != null)
                {
                    return translation.Value;
                }
            }
            return string.Empty;
        }

    }
}
