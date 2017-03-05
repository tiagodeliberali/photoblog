using Microsoft.ApplicationInsights.AspNetCore;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Photoblog.Model.Extensions
{
    public static class ApplicationBuilderExtensions
    {
        /// <summary>
        /// Chagend from original at https://github.com/aspnet/Identity/blob/master/src/Microsoft.AspNetCore.Identity/BuilderExtensions.cs/
        /// </summary>
        /// <param name="app"></param>
        /// <returns></returns>
        public static IApplicationBuilder UseCustomIdentity(this IApplicationBuilder app)
        {
            if (app == null)
            {
                throw new ArgumentNullException(nameof(app));
            }

            var marker = app.ApplicationServices.GetService<IdentityMarkerService>();
            if (marker == null)
            {
                throw new InvalidOperationException("Missing IdentityMarkerService on UseCustomIdentity");
            }

            var options = app.ApplicationServices.GetRequiredService<IOptions<IdentityOptions>>().Value;
            app.UseCookieAuthentication(options.Cookies.ExternalCookie);
            app.UseCookieAuthentication(options.Cookies.TwoFactorRememberMeCookie);
            app.UseCookieAuthentication(options.Cookies.TwoFactorUserIdCookie);

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                LoginPath = new PathString("/admin/Account/Login"),
                LogoutPath = new PathString("/admin/Account/Login"),
                AuthenticationScheme = options.Cookies.ApplicationCookieAuthenticationScheme,
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                Events = new CookieAuthenticationEvents
                {
                    OnValidatePrincipal = SecurityStampValidator.ValidatePrincipalAsync
                }
            });

            return app;
        }
    }
}
