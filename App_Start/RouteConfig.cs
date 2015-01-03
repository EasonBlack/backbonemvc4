using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace BackboneMvc
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute("Default", "", new { controller = "Home", action = "Index" });

            routes.MapRoute(
                "Other",
                "{resource}",
                new { controller = "Home", action = "Index" },
                new { resource = @"index|main" }
            );
        }
    }
}