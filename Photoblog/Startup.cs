using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Photoblog.Data;
using Photoblog.Model;
using Photoblog.Model.Extensions;
using Photoblog.Models;
using Photoblog.Services;

namespace Photoblog
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("Blog")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddDbContext<BlogDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("Blog")));

            services.Configure<BlogSettings>(Configuration.GetSection("BlogSettings"));

            services.AddMemoryCache();
            services.AddMvc();

            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();

            services.AddTransient<IBlogStore, BlogStore>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseCors(builder => 
                builder
                .WithOrigins(
                    "http://www.tiagophotoblog.com.br",
                    "http://blog.tiagophotoblog.com.br",
                    "http://apiweb.tiagophotoblog.com.br",
                    "http://apimobile.tiagophotoblog.com.br",
                    "http://tiagophotoblog.com.br")
                .AllowAnyMethod());

            app.UseRewriter(new RewriteOptions()
                .AddIISUrlRewrite(env.ContentRootFileProvider, "IISUrlRewrite.xml"));

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseCustomIdentity();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "loadio",
                    template: "loaderio-daaad4db55552c1550097bf56baba9ce/",
                    defaults: new { controller = "Home", action = "Verify" });

                routes.MapRoute(
                    name: "admin_pages",
                    template: "admin/{controller=Posts}/{action=Index}/{id?}");

                routes.MapRoute(
                    name: "metadata",
                    template: "metadata/{link?}",
                    defaults: new { controller = "Home", action = "Metadata" });

                routes.MapRoute(
                    name: "default",
                    template: "{*.}",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
