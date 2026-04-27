import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const cols = [
  { title: "Shop", items: ["Coffee Cakes", "Mini Cakes", "Whoopie Pies", "Cake Bites", "Towers", "Subscriptions"] },
  { title: "Gifts", items: ["Mother's Day", "Birthday", "Sympathy", "Corporate", "Holiday", "Gift Cards"] },
  { title: "Customer Care", items: ["Shipping & Freshness", "Returns & Guarantee", "FAQ", "Contact", "Order Status", "Allergens"] },
  { title: "Our Story", items: ["The Recipe", "The Cluck Family", "Our Bakery", "Press", "Journal", "Wholesale"] },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-cream-50 mt-24">
      <div className="container py-16 md:py-20">
        {/* Top — logo + tagline */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-cream-50 text-navy-900 font-serif italic text-3xl mb-5">B</div>
          <div className="font-serif text-2xl md:text-3xl text-cream-50 mb-2">Boston Coffee Cake</div>
          <div className="text-cream-50/70 text-sm">Family-owned in North Andover, Massachusetts since 1996.</div>
          <div className="script text-gold-500 text-2xl mt-4">— with love, the Cluck family</div>
        </div>

        <div className="h-px bg-gold-600/40 mb-12" />

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {cols.map(c => (
            <div key={c.title}>
              <div className="eyebrow !text-gold-500 mb-4">{c.title}</div>
              <ul className="space-y-2.5 text-[14px] text-cream-50/85">
                {c.items.map(i => (
                  <li key={i}><a href="#" className="hover:text-gold-500 transition">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-gold-600/40 mb-8" />

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[13px] text-cream-50/75">
          <div className="space-y-1">
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" /> 351 Willow Street South, North Andover, MA 01845</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold-500" /> (800) 434-0500</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold-500" /> customerservice@bostoncoffeecake.com</div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="p-2.5 rounded-full hover:bg-cream-50/10 transition"><Facebook className="w-4.5 h-4.5" /></a>
            <a href="#" aria-label="Instagram" className="p-2.5 rounded-full hover:bg-cream-50/10 transition"><Instagram className="w-4.5 h-4.5" /></a>
            <a href="#" aria-label="YouTube" className="p-2.5 rounded-full hover:bg-cream-50/10 transition"><Youtube className="w-4.5 h-4.5" /></a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cream-50/10 flex flex-wrap items-center justify-between gap-4 text-[12px] text-cream-50/60">
          <div>© 1996–2026 Boston Coffee Cake. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Visa · Mastercard · Amex · PayPal · Apple Pay</span>
            <span className="px-2 py-1 border border-cream-50/20 rounded-sm">🔒 Secured by Sectigo</span>
          </div>
        </div>
      </div>

      {/* Single, restrained maroon accent strip — footer-only per brand rules */}
      <div className="h-1.5 bg-maroon-800" />
    </footer>
  );
}
