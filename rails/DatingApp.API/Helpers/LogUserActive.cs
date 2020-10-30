using System;
using System.Security.Claims;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace DatingApp.API.Helpers
{
    public class LogUserActive : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var resultContex = await next();
            // var test = resultContex.HttpContext.User.FindFirst(ClaimTypes.Name);
            // var userId = resultContex.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var repon = resultContex.HttpContext.RequestServices.GetService<IDatingRepository>();
            var user = await repon.GetUser(327);
            user.LastActive = DateTime.Now;
            await repon.SaveAll();
        }
    }
}