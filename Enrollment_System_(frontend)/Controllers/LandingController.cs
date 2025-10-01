using Microsoft.AspNetCore.Mvc;

namespace Enrollment_System__frontend_.Controllers
{
    public class LandingController : Controller
    {
        public IActionResult LandingPage()
        {
            return View();
        }

        public IActionResult DashboardPage()
        {
            return View();
        }

        public IActionResult FreshmenForm()
        {
            return View();
        }
    }
}
