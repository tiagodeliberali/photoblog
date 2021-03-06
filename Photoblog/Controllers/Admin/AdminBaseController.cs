﻿using Microsoft.AspNetCore.Mvc;
using Photoblog.Model;
using System;

namespace Photoblog.Controllers.Admin
{
    public abstract class AdminBaseController : Controller
    {
        protected IBlogStore blogStore;

        public AdminBaseController(IBlogStore blogStore)
        {
            this.blogStore = blogStore;
        }

        protected IActionResult NotNullView(object entity)
        {
            if (entity == null)
            {
                return NotFound();
            }

            return View(entity);
        }

        protected IActionResult CreateEntity<TEntity>(TEntity entity, Func<IActionResult> action)
            where TEntity : class
        {
            if (ModelState.IsValid)
            {
                blogStore.Create(entity);

                return action();
            }

            return View(entity);
        }

        protected IActionResult UpdateEntity<TEntity>(TEntity entity, Func<IActionResult> action)
            where TEntity : class
        {
            if (ModelState.IsValid)
            {
                blogStore.Update(entity);

                return action();
            }

            return View(entity);
        }
    }
}
