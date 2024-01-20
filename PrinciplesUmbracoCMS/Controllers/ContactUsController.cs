using MailKit;
using Microsoft.AspNetCore.Mvc;
using Principles_UmbracoCMS.App_Code;
using Principles_UmbracoCMS.Model;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Website.Controllers;

namespace Principles_UmbracoCMS.Controllers
{
    public class ContactUsController : SurfaceController
    {
        private MediaFileManager _mediaFileManager;
        readonly UmbracoHelper _umbracoHelper;

        IShortStringHelper _shortStringHelper;
        IContentTypeBaseServiceProvider _contentTypeBaseServiceProvider;
        MediaUrlGeneratorCollection _mediaUrlGeneratorCollection;
        private IContentService _contentService;
        private readonly string urlDomin = "";
        private static IHttpContextAccessor? _httpContextAccessor;

        public ContactUsController(
         IUmbracoContextAccessor umbracoContextAccessor,
         IUmbracoDatabaseFactory databaseFactory,
         ServiceContext services,
         AppCaches appCaches,
         IProfilingLogger profilingLogger,
         IPublishedUrlProvider publishedUrlProvider, IMediaService IMediaService,
         MediaUrlGeneratorCollection MediaUrlGeneratorCollection,
         IShortStringHelper IShortStringHelper, IContentTypeBaseServiceProvider IContentTypeBaseServiceProvider,
         MediaFileManager MediaFileManager, IWebHostEnvironment IWebHostEnvironment,
         UmbracoHelper umbracoHelper, IContentService contentService)
         : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _mediaFileManager = MediaFileManager;
            _shortStringHelper = IShortStringHelper;
            _contentTypeBaseServiceProvider = IContentTypeBaseServiceProvider;
            _mediaUrlGeneratorCollection = MediaUrlGeneratorCollection;

            _umbracoHelper = umbracoHelper;
            _contentService = contentService;

            urlDomin = $"{_httpContextAccessor?.HttpContext?.Request.Scheme}://{_httpContextAccessor?.HttpContext?.Request.Host.Value}";
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> HandleAddContactUs(ContactUs InquiryData)
        {
            if (!ModelState.IsValid)
            {
                TempData["SuccessInsert"] = "false";
                return CurrentUmbracoPage();
            }


            var AddComplaint = _umbracoHelper.Content(InquiryData.ContactUsId);

            if (AddComplaint != null)
            {
                var MonthId = ReturnMonthNum(AddComplaint);

                var ProductPage = _contentService?.Create(InquiryData?.FullName + "_" + DateTime.Now.ToString("dd"), MonthId, "newContactUS", -1);

                //Set Pro value

                ProductPage?.SetValue("fullName", InquiryData?.FullName);

                ProductPage?.SetValue("contactEmail", InquiryData?.Email);

                ProductPage?.SetValue("contactMessage", InquiryData?.Message);


                if (ProductPage != null)
                {
                    _contentService?.Save(ProductPage);


                    var tableTx = "<table cellpadding='4' border='1' width='90%'>" +

                          $"<tr><td>الاسم كامل</td><td>{InquiryData?.FullName}</td></tr>" +
                          $"<tr><td>البريد الالكترونى</td><td>{InquiryData?.Email}</td></tr>" +
                          $"<tr><td>نص التواصل</td><td>{InquiryData?.Message}</td></tr></table>";


                    var SupplierTable = new Dictionary<string, string> { { "productTable", tableTx } };


                    var emailFile = "\\EmailTemplate\\CallCenterNewContact.html";

                    await MailMethod.SendEmailFromFileTemplet(AddComplaint.Value<string>("adminEmail"), emailFile, "طلب تواصل جديد",
                          MailMethod.ConvertToMailDictionary(SupplierTable));


                    TempData["SuccessInsert"] = "true";

                    return RedirectToCurrentUmbracoPage();
                }


            }
               TempData["SuccessInsert"] = "false";

                return CurrentUmbracoPage();
        }

        private int ReturnMonthNum(IPublishedContent MedicalServices)
        {
            var monthId = 0;

            var _contentService = Services.ContentService;

            var yearNow = DateTime.Now.Year.ToString();
            var MonthNow = DateTime.Now.ToString("MM");

            if (MedicalServices != null)
            {
                var yearFolder = MedicalServices?.Children().Where(b => b.Name == yearNow).FirstOrDefault();

                if (yearFolder != null)
                {
                    var monthFolder = yearFolder.Children().Where(b => b.Name == MonthNow).FirstOrDefault();

                    if (monthFolder == null)
                    {
                        var NewMonthFolder = _contentService?.CreateAndSave(MonthNow, yearFolder.Id, "complaintMonth", -1);
                        _contentService?.SaveAndPublish(NewMonthFolder);

                        monthId = NewMonthFolder.Id;
                    }
                    else
                    {
                        monthId = monthFolder.Id;
                    }
                }
                else
                {
                    var pagId = _contentService?.CreateAndSave(yearNow, MedicalServices.Id, "complaintYear", -1);
                    _contentService?.SaveAndPublish(pagId);

                    if (pagId != null)
                    {
                        var MonthPage = _contentService?.CreateAndSave(MonthNow, pagId.Id, "complaintMonth", -1);
                        _contentService?.SaveAndPublish(MonthPage);

                        monthId = MonthPage.Id;
                    }
                }
            }

            return monthId;
        }



    }
}
