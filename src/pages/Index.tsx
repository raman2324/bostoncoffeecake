import { Star, Truck, Heart, Sparkles, ArrowRight, Phone, Shield, Snowflake, Award, Users, Check, ChevronDown, Plus, Minus } from "lucide-react";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import heroImg from "@/assets/hero-coffee-cake.jpg";
import giftMothers from "@/assets/gift-mothers-day.jpg";
import giftBirthday from "@/assets/gift-birthday.jpg";
import giftSympathy from "@/assets/gift-sympathy.jpg";
import giftCorporate from "@/assets/gift-corporate.jpg";
import pCinnamon from "@/assets/product-cinnamon-walnut.jpg";
import pMarble from "@/assets/product-marble.jpg";
import pCaramel from "@/assets/product-caramel-apple.jpg";
import pBlueberry from "@/assets/product-blueberry.jpg";
import pCranberry from "@/assets/product-cranberry.jpg";
import pBites from "@/assets/product-cake-bites.jpg";
import heritageNana from "@/assets/heritage-nana.jpg";
import whoopiesImg from "@/assets/whoopies.jpg";
import bitesHero from "@/assets/cake-bites-hero.jpg";
import corporateTower from "@/assets/corporate-tower.jpg";
import journalPairing from "@/assets/journal-pairing.jpg";
import journalBrunch from "@/assets/journal-brunch.jpg";
import journalBakery from "@/assets/journal-bakery.jpg";

/* ────────────────────────── Reusable bits ────────────────────────── */

function SectionOpener({ eyebrow, title, italic = false, center = false, lede }: { eyebrow: string; title: string; italic?: boolean; center?: boolean; lede?: string }) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}>
      <div className="flex items-center gap-3 mb-4">
        {center && <span className="h-px w-10 bg-gold-600 hidden md:inline-block" />}
        <span className="eyebrow">{eyebrow}</span>
        {center && <span className="h-px w-10 bg-gold-600 hidden md:inline-block" />}
      </div>
      <h2 className={`${italic ? "display-italic" : "display"} text-4xl md:text-5xl lg:text-[56px]`}>{title}</h2>
      {lede && <p className="mt-5 text-ink-700 text-lg leading-relaxed max-w-xl">{lede}</p>}
    </div>
  );
}

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? "fill-gold-500 text-gold-500" : "text-bone-200"}`} strokeWidth={1.5} />
      ))}
    </div>
  );
}

const products = [
  { name: "Original Cinnamon Walnut", flavor: "Buttery · Walnut · Cinnamon Swirl", price: 42, sale: null, rating: 5, count: 4382, img: pCinnamon, ship: "Ships May 5–7", alt: "Slice of original cinnamon walnut coffee cake with white glaze and toasted walnuts on cream parchment" },
  { name: "Marble Madness", flavor: "Cocoa · Vanilla · Pound-Style", price: 42, sale: null, rating: 5, count: 1820, img: pMarble, ship: "Ships May 5–7", alt: "Cross-section of a marble chocolate and vanilla coffee cake on parchment" },
  { name: "Caramel Apple Harvest", flavor: "Honeycrisp · Salted Caramel · Brown Sugar", price: 46, sale: 39, rating: 5, count: 967, img: pCaramel, ship: "Ships May 6–8", alt: "Caramel apple coffee cake with glossy caramel drizzle and apple chunks on a wooden table" },
  { name: "Blueberry Blizzard", flavor: "Wild Blueberry · Streusel · Lemon Zest", price: 44, sale: null, rating: 5, count: 1245, img: pBlueberry, ship: "Ships May 5–7", alt: "Blueberry coffee cake slice with crumb topping and bursting blueberries" },
  { name: "Cranberry Orange Walnut", flavor: "Cranberry · Orange · Toasted Walnut", price: 44, sale: null, rating: 5, count: 612, img: pCranberry, ship: "Ships May 6–8", alt: "Cranberry orange walnut coffee cake square with visible cranberries and walnuts" },
  { name: "Cake Bites Variety", flavor: "Chocolate · Vanilla · Strawberry · Lemon", price: 36, sale: null, rating: 5, count: 504, img: pBites, ship: "Ships May 5–7", alt: "Stack of assorted cake bites in chocolate, strawberry, vanilla, and birthday flavors" },
];

function ProductCard({ p }: { p: typeof products[number] }) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] bg-cream-100 rounded-md overflow-hidden mb-4">
        <img src={p.img} alt={p.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        {p.sale && (
          <span className="absolute top-3 left-3 bg-brick-700 text-cream-50 text-[11px] font-semibold tracking-wide uppercase px-2 py-1 rounded-sm">Save ${p.price - p.sale}</span>
        )}
        <button className="absolute bottom-3 left-3 right-3 bg-cream-50 text-navy-900 border border-navy-900 text-sm font-medium py-2.5 rounded-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 hover:bg-navy-900 hover:text-cream-50">
          Add to gift
        </button>
      </div>
      <div className="eyebrow !text-[10px] mb-1.5 text-ink-700/70">{p.flavor}</div>
      <h3 className="font-serif text-xl text-navy-900 leading-tight mb-2">{p.name}</h3>
      <div className="flex items-center gap-2 mb-2">
        <Stars rating={p.rating} />
        <span className="text-xs text-ink-700">({p.count.toLocaleString()})</span>
      </div>
      <div className="flex items-baseline gap-2 mb-2">
        {p.sale ? (
          <>
            <span className="text-lg font-semibold text-brick-700">${p.sale}</span>
            <span className="text-sm text-ink-700 line-through">${p.price}</span>
          </>
        ) : (
          <span className="text-lg font-semibold text-ink-900">${p.price}</span>
        )}
      </div>
      <div className="inline-flex items-center gap-1.5 text-xs text-success-700 font-medium">
        <Truck className="w-3.5 h-3.5" /> {p.ship}
      </div>
    </article>
  );
}

/* ────────────────────────── Page ────────────────────────── */

export default function Index() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>

        {/* 1. HERO */}
        <section className="relative">
          <div className="relative min-h-[640px] md:min-h-[720px] lg:min-h-[780px] overflow-hidden">
            <img
              src={heroImg}
              alt="A freshly sliced cinnamon walnut coffee cake on a ceramic plate with powdered sugar falling, in a sunlit kitchen"
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
            />
            {/* Cream vignette left */}
            <div className="absolute inset-0 bg-gradient-to-r from-cream-50 via-cream-50/80 to-transparent md:via-cream-50/70 lg:via-cream-50/60" />
            <div className="container relative h-full">
              <div className="pt-16 md:pt-24 lg:pt-32 pb-20 max-w-2xl">
                <div className="eyebrow mb-5">Since 1996 · North Andover, MA</div>
                <h1 className="display-italic text-[44px] sm:text-[56px] md:text-[64px] lg:text-[76px] leading-[1.02]">
                  Nana Esther's recipe.<br/>
                  <span className="text-navy-700">Baked fresh, sent with love.</span>
                </h1>
                <p className="mt-6 text-ink-700 text-base md:text-lg leading-relaxed max-w-[56ch]">
                  Three generations of New England coffee cakes — handcrafted in small batches, delivered nationwide.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a href="#gifts" className="inline-flex items-center gap-2 bg-navy-900 text-cream-50 px-7 py-4 rounded-sm font-medium hover:bg-navy-700 transition">
                    Send a Gift <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#shop" className="inline-flex items-center gap-2 text-navy-900 font-medium underline-offset-4 underline decoration-gold-500 hover:decoration-navy-700">
                    Shop Coffee Cakes <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 bg-gold-200 text-ink-900 text-sm px-3.5 py-2 rounded-sm">
                  🌷 <span className="font-medium">Mother's Day · order by May 6</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="bg-cream-100 border-y border-bone-200">
            <div className="container py-4 grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 text-[13px] md:text-sm text-ink-900">
              {[
                { icon: Heart, text: "Family-owned since 1996" },
                { icon: Sparkles, text: "Made fresh in Massachusetts" },
                { icon: Truck, text: "Ships nationwide" },
                { icon: Award, text: "Free shipping over $75" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2.5 md:justify-center">
                  <t.icon className="w-4 h-4 text-gold-600" />
                  <span>{t.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. GIFT ROUTER */}
        <section id="gifts" className="container py-20 md:py-28">
          <SectionOpener eyebrow="Gift Guides" title="Pick the moment, we'll do the rest." italic />
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Large left */}
            <a href="#" className="group col-span-12 md:col-span-7 relative aspect-[4/3] md:aspect-[16/11] rounded-md overflow-hidden bg-cream-100">
              <img src={giftMothers} alt="Coffee cake gift box with gold ribbon and pink tulips for Mother's Day" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-cream-50">
                <div className="eyebrow !text-gold-200 mb-2">For Her</div>
                <div className="display-italic !text-cream-50 text-3xl md:text-4xl mb-2">Mother's Day</div>
                <div className="text-sm text-cream-50/85 mb-3">Give her something she'll actually unwrap slowly.</div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium">Shop the guide <ArrowRight className="w-4 h-4" /></span>
              </div>
            </a>
            {/* Right tall */}
            <a href="#" className="group col-span-12 md:col-span-5 relative aspect-[4/3] md:aspect-[16/11] rounded-md overflow-hidden bg-cream-100">
              <img src={giftBirthday} alt="Birthday cake bites with rainbow sprinkles on a cream plate" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-cream-50">
                <div className="eyebrow !text-gold-200 mb-2">Celebrate</div>
                <div className="display-italic !text-cream-50 text-3xl md:text-4xl mb-2">Birthday</div>
                <div className="text-sm text-cream-50/85 mb-3">Cake Bites with sprinkles. Joy in two bites.</div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium">Shop the guide <ArrowRight className="w-4 h-4" /></span>
              </div>
            </a>
            {/* 4 small */}
            {[
              { img: giftSympathy, eyebrow: "Quiet Comfort", title: "Sympathy & Thank You", sub: "A hand-tied ribbon, a kind note." },
              { img: giftCorporate, eyebrow: "For Your Team", title: "Corporate Gifts", sub: "Custom ribbons, bulk send." },
              { img: pBites, eyebrow: "No Reason", title: "Just Because", sub: "Send the smile mid-week." },
              { img: pCaramel, eyebrow: "Seasonal", title: "Holiday & Hostess", sub: "Show up with a tower." },
            ].map((t) => (
              <a key={t.title} href="#" className="group col-span-6 md:col-span-3 relative aspect-square rounded-md overflow-hidden bg-cream-100">
                <img src={t.img} alt={t.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/75 via-ink-900/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-cream-50">
                  <div className="eyebrow !text-gold-200 !text-[10px] mb-1">{t.eyebrow}</div>
                  <div className="font-serif text-lg md:text-xl leading-tight">{t.title}</div>
                  <div className="text-xs text-cream-50/80 mt-1">{t.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 3. FEATURED PRODUCTS */}
        <section id="shop" className="bg-cream-100/60 py-20 md:py-28">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <SectionOpener eyebrow="This Week's Bake" title="Made Monday, on your doorstep by Friday." />
              <a href="#" className="text-navy-900 font-medium underline underline-offset-4 decoration-gold-500 hover:decoration-navy-700 self-start md:self-end mb-2">View all bakes →</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 md:gap-x-6 gap-y-10">
              {products.map(p => <ProductCard key={p.name} p={p} />)}
            </div>
          </div>
        </section>

        {/* 4. HERITAGE STORY */}
        <section id="story" className="py-20 md:py-32 paper-grain bg-cream-100">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img src={heritageNana} alt="Sepia archival photograph of a grandmother mixing batter in an enamelware bowl" loading="lazy" className="w-full aspect-square object-cover rounded-md" />
              {/* Recipe card overlay */}
              <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 w-56 md:w-72 bg-cream-50 border border-bone-200 p-5 md:p-6 rotate-3 shadow-tile">
                <div className="eyebrow !text-[10px] mb-2">Nana Esther · 1962</div>
                <div className="font-serif italic text-navy-900 text-xl mb-3">Coffee Cake</div>
                <ul className="text-[13px] text-ink-700 space-y-1 leading-relaxed">
                  <li>2 c flour, sifted</li>
                  <li>1 c sour cream</li>
                  <li>½ lb sweet butter</li>
                  <li>cinnamon · walnuts · powdered sugar</li>
                </ul>
                <div className="script text-navy-900 text-lg mt-3">— with love</div>
              </div>
            </div>
            <div>
              <div className="eyebrow mb-4">Our Story</div>
              <h2 className="display-italic text-4xl md:text-5xl mb-6">It started with one recipe, in one Massachusetts kitchen.</h2>
              <div className="space-y-4 text-ink-700 leading-relaxed">
                <p><span className="font-semibold text-ink-900">1996.</span> Nana Esther's coffee cake was already a New England legend among neighbors. The Cluck family started baking it in a small commercial oven in North Andover, one cake at a time.</p>
                <p><span className="font-semibold text-ink-900">2010s.</span> Word traveled. Yankee Magazine wrote about us. Oprah put us on her favorite-things list. We added more flavors — but never changed the original.</p>
                <p><span className="font-semibold text-ink-900">Today.</span> Three generations later, every cake still comes out of the same Massachusetts kitchen. Same recipe. Same butter. Same hand-grated walnuts.</p>
              </div>
              <a href="#" className="mt-7 inline-flex items-center gap-2 text-navy-900 font-medium underline underline-offset-4 decoration-gold-500">Read our full story <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </section>

        {/* 5. WHOOPIES STRIP */}
        <section className="bg-navy-900 text-cream-50 py-20 md:py-28">
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-gold-500" />
              <span className="eyebrow !text-gold-500">Boston Whoopies</span>
            </div>
            <h2 className="display-italic !text-cream-50 text-4xl md:text-5xl lg:text-6xl max-w-3xl">Boston Whoopies — like nothing else in the box.</h2>
            <p className="mt-4 text-cream-50/75 max-w-xl">Two pillows of cake, a thick swoop of cream filling. Chocolate, pumpkin spice, vanilla.</p>

            <div className="mt-12 rounded-md overflow-hidden">
              <img src={whoopiesImg} alt="Three whoopie pies in a row — chocolate, pumpkin, and vanilla — with thick cream filling" loading="lazy" className="w-full aspect-[16/8] object-cover" />
            </div>
            <div className="mt-8 flex justify-end">
              <a href="#" className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 font-semibold px-6 py-3.5 rounded-sm hover:bg-gold-200 transition">Shop the Whoopies <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </section>

        {/* 6. CAKE BITES */}
        <section className="py-20 md:py-28" style={{ background: "hsl(var(--gold-200))" }}>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="eyebrow !text-navy-700 mb-4">New for 2026</div>
              <h2 className="display-italic text-4xl md:text-5xl lg:text-6xl">Big cake flavor. Two-bite size.</h2>
              <p className="mt-5 text-ink-900/80 text-lg max-w-md">12-, 24-, and 36-piece variety boxes. Perfect for offices, parties, and snack drawers everywhere.</p>
              <a href="#" className="mt-8 inline-flex items-center gap-2 bg-navy-900 text-cream-50 px-7 py-4 rounded-sm font-medium hover:bg-navy-700 transition">Build your box <ArrowRight className="w-4 h-4" /></a>
            </div>
            <div className="order-1 lg:order-2">
              <img src={bitesHero} alt="Stacks of bite-sized cakes in chocolate, strawberry, vanilla, and lemon flavors" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-md" />
            </div>
          </div>
        </section>

        {/* 7. SUBSCRIPTION */}
        <section className="py-20 md:py-28 container">
          <SectionOpener eyebrow="Coffee Cake Club" title="A new flavor every month. We'll surprise you (or them)." italic center />

          {/* Flavor calendar */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-[13px]">
            {["Cinnamon Walnut", "Lemon Burst", "Caramel Apple", "Cranberry Orange", "Golden Pumpkin", "Marble Madness"].map((f, i) => (
              <div key={f} className="flex items-center gap-2">
                <span className="px-3 py-1.5 bg-cream-100 border border-bone-200 rounded-full text-ink-900">
                  <span className="text-gold-600 font-semibold mr-1.5">{["MAY","JUN","JUL","AUG","SEP","OCT"][i]}</span>{f}
                </span>
                {i < 5 && <span className="text-bone-200 hidden md:inline">→</span>}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { name: "Monthly", price: 38, sub: "Every month, fresh flavor", best: true },
              { name: "Every Other Month", price: 40, sub: "A treat — without overload" },
              { name: "Quarterly", price: 44, sub: "Four times a year, every season" },
            ].map((p) => (
              <div key={p.name} className={`relative rounded-md p-7 ${p.best ? "bg-navy-900 text-cream-50" : "bg-cream-100 text-ink-900"}`}>
                {p.best && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">Most popular</span>}
                <div className="font-serif text-2xl mb-1">{p.name}</div>
                <div className={`text-sm mb-5 ${p.best ? "text-cream-50/75" : "text-ink-700"}`}>{p.sub}</div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-serif">${p.price}</span>
                  <span className={`text-sm ${p.best ? "text-cream-50/75" : "text-ink-700"}`}>/ shipment</span>
                </div>
                <ul className="space-y-2 text-sm mb-6">
                  {["Free shipping always", "Skip a month anytime", "Gift or self toggle"].map(f => (
                    <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-gold-500" /> {f}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-sm font-medium transition ${p.best ? "bg-gold-500 text-navy-900 hover:bg-gold-200" : "bg-navy-900 text-cream-50 hover:bg-navy-700"}`}>Start the club</button>
              </div>
            ))}
          </div>
        </section>

        {/* 8. CORPORATE */}
        <section id="corporate" className="bg-cream-100 py-20 md:py-28">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <img src={corporateTower} alt="A stacked corporate gift tower of three cream branded boxes tied with navy ribbons" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-md" />
            <div>
              <div className="eyebrow mb-4">For Your Team, Your Clients, Your Referrals</div>
              <h2 className="display-italic text-4xl md:text-5xl mb-5">Corporate gifting that gets opened, not regifted.</h2>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Users, text: "Volume pricing from 10 boxes" },
                  { icon: Award, text: "Custom branded ribbons & cards" },
                  { icon: Truck, text: "Bulk recipient lists + scheduled send" },
                ].map(b => (
                  <li key={b.text} className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-full bg-cream-50 border border-bone-200 flex items-center justify-center shrink-0"><b.icon className="w-4 h-4 text-gold-600" /></span>
                    <span className="text-ink-900 pt-1.5">{b.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="bg-navy-900 text-cream-50 px-6 py-3.5 rounded-sm font-medium hover:bg-navy-700 transition">Get a quote</a>
                <a href="#" className="bg-cream-50 text-navy-900 border-[1.5px] border-navy-900 px-6 py-3.5 rounded-sm font-medium hover:bg-navy-50 transition">Request samples</a>
              </div>
            </div>
          </div>
        </section>

        {/* 9. REVIEWS */}
        <section className="container py-20 md:py-28">
          <SectionOpener eyebrow="What Families Are Saying" title="30 years. A lot of birthdays." italic center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Karen", state: "Vermont", text: "Sent this to my mom for Mother's Day and she called me crying. Best gift I've ever sent. The cake arrived perfect.", img: pCinnamon, alt: "Cinnamon walnut cake the customer ordered" },
              { name: "Michael", state: "California", text: "We send these to clients every Q4. The custom ribbon detail puts us over the top. Multiple new accounts have specifically thanked us for the cake.", img: pMarble, alt: "Marble cake the customer ordered" },
              { name: "Priya", state: "New York", text: "Ordered for my dad's 80th. He said it tasted exactly like the coffee cake his mother made in Connecticut in the 1950s. That's the highest compliment.", img: pCaramel, alt: "Caramel apple cake the customer ordered" },
            ].map(r => (
              <article key={r.name} className="bg-cream-50 border border-bone-200 rounded-md p-7 flex flex-col">
                <Stars />
                <p className="mt-4 text-ink-900 leading-relaxed font-serif text-lg italic">"{r.text}"</p>
                <div className="mt-6 pt-5 border-t border-bone-200 flex items-center gap-3">
                  <img src={r.img} alt={r.alt} loading="lazy" className="w-12 h-12 rounded-sm object-cover" />
                  <div>
                    <div className="font-medium text-ink-900 text-sm">{r.name}</div>
                    <div className="text-xs text-ink-700">{r.state} · Verified buyer</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-cream-100 px-7 py-5 rounded-md">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl text-navy-900">4.9</span>
                <span className="text-ink-700 text-sm">/ 5</span>
              </div>
              <Stars />
              <div className="text-sm text-ink-900">from <span className="font-semibold">12,400+</span> verified reviews</div>
              <a href="#" className="text-navy-900 font-medium underline underline-offset-4 decoration-gold-500 text-sm">Read all reviews →</a>
            </div>
          </div>
        </section>

        {/* 10. WHY US */}
        <section className="bg-cream-100 py-16 md:py-20">
          <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Heart, t: "Family recipe since 1996", s: "Three generations, one kitchen." },
              { icon: Sparkles, t: "Made fresh in small batches", s: "Baked Mon–Wed each week." },
              { icon: Snowflake, t: "Shipped on dry ice when needed", s: "Cool, fresh, intact." },
              { icon: Shield, t: "100% satisfaction guarantee", s: "We make it right. Always." },
              { icon: Phone, t: "We answer the phone", s: "(800) 434-0500" },
              { icon: Award, t: "Veteran-friendly, family-owned", s: "Independent. Local. Proud." },
            ].map(b => (
              <div key={b.t} className="text-center">
                <span className="inline-flex w-12 h-12 rounded-full bg-cream-50 border border-bone-200 items-center justify-center mb-3"><b.icon className="w-5 h-5 text-navy-900" /></span>
                <div className="font-serif text-navy-900 text-base leading-tight mb-1">{b.t}</div>
                <div className="text-xs text-ink-700 leading-snug">{b.s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. JOURNAL */}
        <section className="container py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <SectionOpener eyebrow="The Journal" title="Stories from our kitchen." italic />
            <a href="#" className="text-navy-900 font-medium underline underline-offset-4 decoration-gold-500 mb-2">All stories →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: journalPairing, date: "Apr 22, 2026", title: "What to drink with what we bake.", dek: "A pairing guide for every flavor — single-origins, lattes, even tea." },
              { img: journalBrunch, date: "Apr 14, 2026", title: "How to host a New England spring brunch.", dek: "Tablesetting, a flexible menu, and one cake that does the heavy lifting." },
              { img: journalBakery, date: "Apr 02, 2026", title: "How we bake 50,000 cakes a year.", dek: "Behind the scenes in North Andover — the people, the ovens, the ribbon." },
            ].map(a => (
              <a key={a.title} href="#" className="group block">
                <div className="aspect-[16/10] rounded-md overflow-hidden bg-cream-100 mb-5">
                  <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="eyebrow mb-2">{a.date}</div>
                <h3 className="font-serif text-2xl text-navy-900 leading-tight mb-2">{a.title}</h3>
                <p className="text-ink-700 text-sm leading-relaxed mb-3">{a.dek}</p>
                <span className="text-navy-900 font-medium text-sm underline underline-offset-4 decoration-gold-500">Read →</span>
              </a>
            ))}
          </div>
        </section>

        {/* 12. EMAIL + CATALOG */}
        <section className="bg-cream-100 paper-grain py-20 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-cream-50 border border-bone-200 rounded-md p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="eyebrow mb-3">Stay in Touch</div>
                <h2 className="display-italic text-3xl md:text-5xl">Get 10% off your first gift, plus seasonal recipes.</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 bg-cream-50 border border-bone-200 rounded-sm focus:border-navy-900 outline-none" />
                  <input type="email" placeholder="Email address" className="w-full px-4 py-3 bg-cream-50 border border-bone-200 rounded-sm focus:border-navy-900 outline-none" />
                  <div className="flex flex-wrap gap-3 text-sm text-ink-700">
                    {["Birthdays", "Mother's Day", "Holiday", "Corporate"].map(o => (
                      <label key={o} className="inline-flex items-center gap-2"><input type="checkbox" className="accent-navy-900" /> {o}</label>
                    ))}
                  </div>
                  <button className="w-full bg-navy-900 text-cream-50 py-3.5 rounded-sm font-medium hover:bg-navy-700 transition">Get my 10% off</button>
                  <p className="text-xs text-ink-700/70">We respect your inbox. Unsubscribe anytime.</p>
                </form>
                <div className="md:border-l md:border-bone-200 md:pl-8">
                  <div className="font-serif text-xl text-navy-900 mb-2">Or — request our printed catalog.</div>
                  <p className="text-sm text-ink-700 mb-4">A real, glossy catalog. Mailed to your door. Lovely on a coffee table.</p>
                  <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Mailing address" className="w-full px-4 py-3 bg-cream-50 border border-bone-200 rounded-sm focus:border-navy-900 outline-none" />
                    <button className="w-full bg-cream-50 text-navy-900 border-[1.5px] border-navy-900 py-3.5 rounded-sm font-medium hover:bg-navy-50 transition">Send me the catalog</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. PRESS */}
        <section className="container py-16 md:py-20">
          <div className="text-center eyebrow mb-8">As Seen In</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {["Yankee Magazine", "Boston Globe", "Food Network", "Oprah's Favorites", "Saveur", "Down East"].map(p => (
              <div key={p} className="font-serif italic text-xl text-ink-700/60 hover:text-ink-900 transition-colors text-center">
                {p}
              </div>
            ))}
          </div>
        </section>

        {/* 14. LOCAL BUT NATIONAL */}
        <section className="container py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="eyebrow mb-4">Local to New England. Shipped Everywhere.</div>
              <h2 className="display-italic text-4xl md:text-5xl mb-5">From a kitchen in Massachusetts to all 50 states.</h2>
              <p className="text-ink-700 text-lg max-w-md leading-relaxed">Every cake leaves North Andover, MA on a refrigerated truck and arrives at your door within 2–3 days — fresh, intact, and ready to be unwrapped.</p>
            </div>
            <div className="relative aspect-[4/3] bg-cream-100 rounded-md overflow-hidden flex items-center justify-center paper-grain">
              {/* Simple stylized US-map-ish abstract */}
              <svg viewBox="0 0 600 400" className="w-full h-full p-8" aria-hidden="true">
                <path d="M70 200 Q140 120 240 140 Q320 100 400 130 Q480 110 540 170 Q570 220 520 280 Q420 320 320 290 Q220 320 130 290 Q60 260 70 200 Z" fill="hsl(var(--cream-50))" stroke="hsl(var(--bone-200))" strokeWidth="1.5" />
                {/* Ship route arcs */}
                {[[180,260],[340,300],[470,260],[260,180]].map(([x,y],i)=>(
                  <path key={i} d={`M 460 175 Q ${(460+x)/2} ${y-60} ${x} ${y}`} fill="none" stroke="hsl(var(--gold-600))" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.7" />
                ))}
                {/* Pin */}
                <circle cx="460" cy="175" r="14" fill="hsl(var(--brick-700))" opacity="0.25" />
                <circle cx="460" cy="175" r="7" fill="hsl(var(--brick-700))" />
                <text x="460" y="155" textAnchor="middle" className="font-serif" fontSize="13" fill="hsl(var(--navy-900))">North Andover, MA</text>
              </svg>
            </div>
          </div>
        </section>

        {/* 15. FAQ */}
        <Faq />

        {/* Sticky cutoff badge for hero/PDP rules — minimal example chip already in hero */}
      </main>
      <Footer />
    </div>
  );
}

/* ────────────────────────── FAQ ────────────────────────── */

function Faq() {
  const items = [
    { q: "How fresh are the cakes when they arrive?", a: "We bake Monday through Wednesday and ship Tuesday through Thursday. Most cakes arrive within 2 days of leaving our oven, sealed in food-safe wrapping for maximum freshness." },
    { q: "Can I include a personalized gift card message?", a: "Yes. On any product page, add up to 200 characters of message, your name, and the occasion. We print it on a heavyweight ivory card and tuck it inside the box." },
    { q: "Do you list ingredients & allergens?", a: "Absolutely. Every product page includes full ingredients, allergens, and a 'made in a facility with' disclosure. Most cakes contain wheat, dairy, eggs, and tree nuts." },
    { q: "Will my cake melt in transit?", a: "Our cakes are shelf-stable for shipping. We add dry ice for summer destinations and warm-weather routes — at no extra cost." },
    { q: "What's your return & guarantee policy?", a: "100% satisfaction. If anything is wrong, call us at (800) 434-0500 or email customerservice@bostoncoffeecake.com and we'll make it right — replacement or refund, your choice." },
    { q: "How do corporate accounts work?", a: "Volume pricing kicks in at 10 boxes. We support custom ribbons, branded cards, recipient list uploads, and scheduled send dates. Request a quote and we'll be in touch within one business day." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container py-20 md:py-24">
      <div className="max-w-3xl mx-auto">
        <SectionOpener eyebrow="Questions" title="Things people often ask." italic center />
        <div className="divide-y divide-bone-200 border-y border-bone-200">
          {items.map((it, i) => (
            <div key={it.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-serif text-lg md:text-xl text-navy-900">{it.q}</span>
                {open === i ? <Minus className="w-5 h-5 text-navy-900 shrink-0" /> : <Plus className="w-5 h-5 text-navy-900 shrink-0" />}
              </button>
              {open === i && (
                <div className="pb-6 pr-10 text-ink-700 leading-relaxed">{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
