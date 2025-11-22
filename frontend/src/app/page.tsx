// ...existing code...
import Link from "next/link";
import CarouselContainer from "../components/Carousel/CarouselContainer";
import NewBrewsSection from "../components/NewBrewsComp/NewBrewsSection";
import DealsPanel from "../components/Deals/DealsPanel";
import Section from "../components/Section";
import Footer from "../components/Footer/Footer";
import { Variants } from "motion";
import HomePage from "../components/Home/HomePage";

   //  animation variants
 const animationVariant : Variants = {
    hidden : {
      y : -200, opacity : 0
    },
    scrollView : {
      y : 0, opacity : 1,
      transition : { duration : 0.8 , ease : "easeInOut" }
    }
  }

  
export default function Home() {

  return (
    <div className="home w-full min-h-screen bg-gradient-to-b from-neutral-900 via-gray-900 to-black text-gray-100 flex flex-col items-center">
      
      {/* HERO / Branding */}
      <header className="w-full max-w-6xl px-6 py-20 flex flex-col items-start gap-6 hero"
        style={{ fontFamily: "var(--font-Cinzel), serif" }}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center shadow-xl">
            {/* Decorative bat/coffee mark - replace with SVG or image asset */}
            <span className="text-2xl font-bold">🦇</span>
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl leading-tight" style={{ letterSpacing: "1px" }}>Bat Cave Cafe</h1>
            <p className="mt-1 text-sm md:text-base text-gray-300">Handcrafted brews, midnight roasts — welcome to the cave.</p>
          </div>
        </div>

        <p className="max-w-2xl mt-6 text-gray-300 text-sm md:text-base">
          Explore our seasonal roasts and signature drinks. Dark-roast focused menu, slow pour technique, and a cozy cave vibe for night owls.
        </p>
        
        <div className="mt-6 flex items-center gap-4">
          <Link href="/menu" className="inline-block px-5 py-3 bg-amber-700 hover:bg-amber-600 text-black rounded-md font-semibold shadow-md">
            Explore Menu
          </Link>
          <Link href="/about" className="inline-block px-4 py-3 border border-gray-700 rounded-md text-gray-200 hover:border-gray-500">
            Our Story
          </Link>
        </div>
      </header>

      {/* decorative wave separator (home page) */}
      {/* <Wave
        fill="url(#heroGradient)"
        className="w-full"
        style={{ height: 120 }}
        paused={false}
        options={{
          height: 20,
          amplitude: 24,
          speed: 0.2,
          points: 3
        }}>
        <defs>
          <linearGradient id="heroGradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="var(--color-coffee-medium, #caa77b)" />
            <stop offset="90%" stopColor="var(--color-coffee-dark, #6b3e2a)" />
          </linearGradient>
        </defs>
      </Wave> */}

      {/* Main content */}
      <main className="w-full max-w-6xl px-6 py-12 flex flex-col gap-16">
        {/* Optional carousel */}
        <section>
          <CarouselContainer />
        </section>

        {/* OUR DEALS — inserted above New Brews */}
        <DealsPanel />

        {/* New Brews / Featured */}
        <Section isAnimated={true} animationVariant={animationVariant} color="transparent"
          style={{
            fontFamily: "var(--font-Cinzel)",
            alignItems: "center",
            gap: "60px",
            color: "var(--text-color, #e6e6e6)"
          }} className="mask-div">

          <NewBrewsSection />

          <Link href={"/menu"} className="text-[28px] md:text-[32px] inline-block" style={{ color : "var(--color-coffee-medium, #caa77b)" }}>
            See all Drinks
          </Link>
        </Section>

        {/* ...other sections... */}
      </main>
    </div>
  )
}
// ...existing code...