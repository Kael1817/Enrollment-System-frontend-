using Microsoft.AspNetCore.Mvc;

namespace Enrollment_System__frontend_.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult DashboardPage()
        {
            return View();
        }
    }
}
