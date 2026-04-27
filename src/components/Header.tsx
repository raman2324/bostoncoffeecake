import { useEffect, useState } from "react";
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-boston-coffee-cake.png";

const shopColumns = [
  { title: "Coffee Cakes", items: ["Original Cinnamon Walnut", "Marble Madness", "Caramel Apple Harvest", "Blueberry Blizzard", "Cranberry Orange Walnut"] },
  { title: "Mini Cakes", items: ["Mini Cinnamon Walnut", "Mini Lemon Burst", "Mini Variety 4-Pack"] },
  { title: "Whoopie Pies", items: ["Classic Chocolate", "Pumpkin Spice", "Vanilla Cream", "Whoopie Variety Box"] },
  { title: "Cake Bites", items: ["12-Piece Box", "24-Piece Box", "36-Piece Variety"] },
  { title: "Towers & Combos", items: ["The Trio Tower", "Office Favorite", "The Heritage Stack"] },
  { title: "Subscriptions", items: ["Coffee Cake Club", "Bi-Monthly Plan", "Quarterly Surprise"] },
];

const giftColumns = [
  { title: "By Occasion", items: ["Mother's Day", "Birthday", "Sympathy", "Thank You", "Holiday", "Just Because"] },
  { title: "By Price", items: ["Under $30", "$30 – $50", "$50 – $75", "$100 & up"] },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "shop" | "gifts">(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-cream-100 text-ink-700 text-[12px] md:text-[13px]">
        <div className="container h-7 flex items-center justify-center md:justify-between gap-6">
          <span className="hidden md:inline">Free shipping over $75</span>
          <span>Baked fresh Mon–Wed · ships Tue–Thu</span>
          <span className="hidden md:inline text-brick-700 font-medium">Mother's Day cutoff: ship by May 6</span>
        </div>
      </div>

      {/* Main bar */}
      <div className={`bg-cream-50/95 backdrop-blur-sm border-b transition-shadow ${scrolled ? "shadow-warm border-bone-200" : "border-transparent"}`}>
        <div className="container h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0" aria-label="Boston Coffee Cake home">
            <img src={logo} alt="The Original Boston Coffee Cake — Let us do all the work, so you can take all the credit" className="h-12 md:h-14 w-auto object-contain" />
          </a>

          {/* Nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] text-ink-900" onMouseLeave={() => setOpenMenu(null)}>
            <button onMouseEnter={() => setOpenMenu("shop")} onClick={() => setOpenMenu(openMenu === "shop" ? null : "shop")} className="flex items-center gap-1 py-2 hover:text-navy-700 transition">
              Shop <ChevronDown className="w-4 h-4" />
            </button>
            <button onMouseEnter={() => setOpenMenu("gifts")} onClick={() => setOpenMenu(openMenu === "gifts" ? null : "gifts")} className="flex items-center gap-1 py-2 hover:text-navy-700 transition">
              Gifts <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#corporate" onMouseEnter={() => setOpenMenu(null)} className="py-2 hover:text-navy-700 transition">Corporate</a>
            <a href="#story" onMouseEnter={() => setOpenMenu(null)} className="py-2 hover:text-navy-700 transition">Our Story</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-2 shrink-0">
            <button aria-label="Search" className="p-2.5 rounded-full hover:bg-cream-100 transition"><Search className="w-5 h-5 text-ink-900" /></button>
            <button aria-label="Account" className="p-2.5 rounded-full hover:bg-cream-100 transition hidden sm:inline-flex"><User className="w-5 h-5 text-ink-900" /></button>
            <button aria-label="Cart, 2 items" className="p-2.5 rounded-full hover:bg-cream-100 transition relative">
              <ShoppingBag className="w-5 h-5 text-ink-900" />
              <span className="absolute -top-0.5 -right-0.5 bg-navy-900 text-cream-50 text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </button>
            <button aria-label="Open menu" onClick={() => setMobileOpen(true)} className="p-2.5 rounded-full hover:bg-cream-100 transition lg:hidden">
              <Menu className="w-5 h-5 text-ink-900" />
            </button>
          </div>
        </div>

        {/* Megamenu — Shop */}
        {openMenu === "shop" && (
          <div onMouseEnter={() => setOpenMenu("shop")} className="absolute left-0 right-0 bg-cream-50 border-t border-bone-200 shadow-warm hidden lg:block">
            <div className="container py-10 grid grid-cols-12 gap-8">
              <div className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-6">
                {shopColumns.map(col => (
                  <div key={col.title}>
                    <div className="eyebrow mb-3">{col.title}</div>
                    <ul className="space-y-2 text-[15px]">
                      {col.items.map(it => (
                        <li key={it}><a href="#" className="text-ink-900 hover:text-navy-700 transition">{it}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="col-span-3 bg-cream-100 paper-grain rounded-md p-5">
                <div className="eyebrow mb-2">This Week's Bake</div>
                <div className="display text-2xl mb-2">Caramel Apple Harvest</div>
                <p className="text-sm text-ink-700 mb-3">Glossy caramel, crisp Honeycrisp. Baked Monday.</p>
                <a href="#" className="text-navy-900 font-medium underline underline-offset-4 decoration-gold-500">Shop the bake →</a>
              </div>
            </div>
          </div>
        )}

        {/* Megamenu — Gifts */}
        {openMenu === "gifts" && (
          <div onMouseEnter={() => setOpenMenu("gifts")} className="absolute left-0 right-0 bg-cream-50 border-t border-bone-200 shadow-warm hidden lg:block">
            <div className="container py-10 grid grid-cols-12 gap-8">
              <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-6">
                {giftColumns.map(col => (
                  <div key={col.title}>
                    <div className="eyebrow mb-3">{col.title}</div>
                    <ul className="space-y-2 text-[15px]">
                      {col.items.map(it => (
                        <li key={it}><a href="#" className="text-ink-900 hover:text-navy-700 transition">{it}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="col-span-4 bg-navy-900 text-cream-50 rounded-md p-6">
                <div className="eyebrow !text-gold-500 mb-2">Express Flow</div>
                <div className="display !text-cream-50 text-2xl mb-2">Send a gift in 90 seconds.</div>
                <p className="text-sm text-cream-50/80 mb-4">Pick a cake, write a note, schedule the date. We'll handle the rest.</p>
                <a href="#" className="inline-block bg-gold-500 text-navy-900 font-semibold text-sm px-4 py-2.5 rounded-sm hover:bg-gold-200 transition">Start gifting →</a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-cream-50 lg:hidden flex flex-col">
          <div className="container h-16 flex items-center justify-between border-b border-bone-200">
            <span className="font-serif text-navy-900 text-lg">Menu</span>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="p-2.5"><X className="w-6 h-6" /></button>
          </div>
          <nav className="container py-8 space-y-6 text-2xl font-serif text-navy-900 overflow-y-auto">
            <a href="#" onClick={() => setMobileOpen(false)} className="block">Shop</a>
            <a href="#" onClick={() => setMobileOpen(false)} className="block">Gifts</a>
            <a href="#corporate" onClick={() => setMobileOpen(false)} className="block">Corporate</a>
            <a href="#story" onClick={() => setMobileOpen(false)} className="block">Our Story</a>
            <a href="#" onClick={() => setMobileOpen(false)} className="block">Account</a>
          </nav>
        </div>
      )}
    </header>
  );
}
