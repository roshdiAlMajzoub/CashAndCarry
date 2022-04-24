using CashAndCarry.Models;
using Microsoft.AspNetCore.Mvc;

namespace CashAndCarry.Controllers
{
    public class MarketsController : Controller
    {
        static List<Market> markets = new List<Market>
        {
            new Market {Id = 1, Name = "Market1", Open = "9:00-AM", Close = "12:00-AM", Image = "images/super1.png"},
            new Market {Id = 1, Name = "Market1", Open = "9:00-AM", Close = "12:00-AM", Image = "images/super1.png"}
        };
        public IActionResult Index()
        {
            return View(markets);
        }

        public IActionResult ViewItems()
        {
            return View();
        }
    }
}
