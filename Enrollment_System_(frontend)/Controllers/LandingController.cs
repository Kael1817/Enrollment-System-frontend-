using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.CodeAnalysis;

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

        public IActionResult EnrollmentLandingPage()
        {
            return View();
        }

        public IActionResult TransfereeForm()
        {
            return View();
        }

        public IActionResult EnrollmentDashboard()
        {
            return View();
        }

        public IActionResult RegularFormPartial()
        {
            return PartialView("_RegularFormPartial");
        }

        public IActionResult IrregularFormPartial()
        {
            return PartialView("_IrregularFormPartial");
        }

        public IActionResult ReturneeFormPartial()
        {
            return PartialView("_ReturneeFormPartial");
        }

        public IActionResult ShifterFormPartial()
        {
            return PartialView("_ShifterFormPartial");
        }

        public IActionResult EnrollmentFormPartial()
        {
            return PartialView("_EnrollmentFormPartial");
        }














        [HttpPost] // must be POST
        public async Task<IActionResult> SaveFile(IFormFile file)
        {
            if (file != null && file.Length > 0)
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/uploads", file.FileName);

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                TempData["Message"] = $"File {file.FileName} uploaded successfully!";
            }
            else
            {
                TempData["Message"] = "No file selected!";
            }

            return RedirectToAction("FreshmenForm"); // adjust to your page
        }


    }
}
