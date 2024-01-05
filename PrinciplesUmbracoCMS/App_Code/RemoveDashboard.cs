﻿using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.Dashboards;

namespace Principles_UmbracoCMS.App_Code
{
    public class RemoveDashboard : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.Dashboards().Remove<ContentDashboard>().Remove<SettingsDashboard>().Remove<MembersDashboard>();
        }
    }
}
