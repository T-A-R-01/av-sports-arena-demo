import { INFO, IMG, OFFERINGS, MAP_EMBED } from './data'
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import { Reveal, Button, Eyebrow, H2 } from './components/ui'

const Hero = () => (
  <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
    <img src={IMG.hero} alt="Snooker hall at AV Sports Arena & Cafe" className="absolute inset-0 h-full w-full object-cover object-[50%_60%]" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
    <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
    <div className="relative mx-auto w-full max-w-7xl px-5 pb-32 pt-32 sm:px-8 lg:pb-28">
      <Reveal><p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-teal">Mira Road East · Open 24 Hours</p></Reveal>
      <Reveal delay={100}><h1 className="font-display text-[15vw] uppercase leading-[0.9] sm:text-8xl lg:text-[9rem]">AV Sports<br /><span className="text-crimson-hi">Arena</span> &amp; Cafe</h1></Reveal>
      <Reveal delay={200}><p className="mt-6 max-w-xl text-lg text-white/80">Play. Eat. Experience. A sports arena and café where the game, the food and good company come together.</p></Reveal>
      <Reveal delay={300} className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href={INFO.maps} external>Get Directions</Button><Button href="#experience" variant="ghost">Explore</Button></Reveal>
    </div>
  </section>)

const InfoBar = () => {
  const items = [['Open 24 Hours', '#visit', 'Hours'], [INFO.price, '#visit', 'Price range'], ['Mira Road East', INFO.maps, 'Location'], [INFO.phone, INFO.tel, 'Call']]
  return <div className="border-y border-white/10 bg-coal"><div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
    {items.map(([v, h, l], i) => <a key={l} href={h} {...(h.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={`group px-5 py-6 transition hover:bg-crimson sm:px-8 ${i % 2 ? 'border-l border-white/10' : ''} ${i > 1 ? 'border-t border-white/10 lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}>
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-white/80">{l}</p><p className="mt-1 font-display text-xl uppercase sm:text-2xl">{v}</p></a>)}
  </div></div>
}

const Marquee = () => <div className="overflow-hidden border-b border-white/10 py-4"><div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl uppercase text-white/15 sm:text-5xl">
  {Array.from({ length: 8 }).map((_, i) => <span key={i}>Play. Eat. Experience. <span className="text-crimson">✦</span></span>)}</div></div>

const Experience = () => (
  <section id="experience" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal><Eyebrow>The Experience</Eyebrow><H2>Sports. Food.<br />Good company.</H2>
        <p className="mt-6 max-w-lg text-lg text-white/70">AV Sports Arena &amp; Cafe brings the arena and the café under one roof in Mira Road East. Come for the game, stay for the food and the atmosphere, at any hour of the day or night.</p>
        <ul className="mt-8 flex flex-wrap gap-2">{OFFERINGS.map((o) => <li key={o} className="border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest transition hover:border-teal hover:text-teal">{o}</li>)}</ul></Reveal>
      <Reveal delay={150} className="grid grid-cols-2 gap-3">
        <div className="overflow-hidden"><img src={IMG.hallTop} alt="Snooker tables from above" loading="lazy" className="aspect-[3/4] w-full object-cover transition duration-700 hover:scale-105" /></div>
        <div className="mt-10 overflow-hidden"><img src={IMG.gaming} alt="Gaming setup" loading="lazy" className="aspect-[3/4] w-full object-cover transition duration-700 hover:scale-105" /></div>
      </Reveal>
    </div>
  </section>)

const Arena = () => (
  <section className="relative overflow-hidden bg-coal py-24 lg:py-32">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
      <Reveal className="grid grid-cols-5 gap-3 lg:order-2">
        <img src={IMG.rack} alt="Snooker frame set up" loading="lazy" className="col-span-3 aspect-[3/5] w-full object-cover" />
        <img src={IMG.shot} alt="Lining up a shot" loading="lazy" className="col-span-2 mt-16 aspect-[3/5] w-full object-cover" />
      </Reveal>
      <Reveal><Eyebrow>The Arena</Eyebrow><H2>Your game.<br />Your people.<br /><span className="text-crimson-hi">Your arena.</span></H2>
        <p className="mt-6 max-w-lg text-lg text-white/70">Walk in, take a look around and find your game. Call the team for availability and details.</p>
        <div className="mt-8"><Button href={INFO.tel}>Call Us</Button></div></Reveal>
    </div>
  </section>)

const Cafe = () => (
  <section className="relative isolate overflow-hidden py-28 lg:py-40">
    <img src={IMG.hallDark} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
    <div className="mx-auto max-w-7xl px-5 sm:px-8"><Reveal className="max-w-2xl"><Eyebrow>The Café</Eyebrow><H2>Fuel the<br />next frame.</H2>
      <p className="mt-6 text-lg text-white/75">Between games, settle into the lounge and enjoy the café. Great food and good company keep the session going, priced around {INFO.price.replace(' / person', '')} per person.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href={INFO.tel}>Call to Enquire</Button><Button href="#visit" variant="ghost">Visit Us</Button></div></Reveal></div>
  </section>)

const About = () => (
  <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
    <Reveal><img src={IMG.logo} alt="AV Sports Arena & Cafe logo" className="mx-auto h-56 w-56 rounded-full object-cover ring-1 ring-white/20 lg:h-72 lg:w-72" /></Reveal>
    <Reveal delay={120}><Eyebrow>About</Eyebrow><H2 className="!text-4xl sm:!text-5xl lg:!text-6xl">A destination for sports and café time in Mira Road</H2>
      <p className="mt-6 max-w-2xl text-lg text-white/70">AV Sports Arena &amp; Cafe is a sports arena and café in Mira Road East, Maharashtra. It is a place to play, eat and spend time with your people, open around the clock.</p></Reveal>
  </div></section>)

const Visit = () => (
  <section id="visit" className="bg-coal py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
    <Reveal><Eyebrow>Visit Us</Eyebrow><H2>Find the arena</H2>
      <dl className="mt-8 space-y-6 text-lg">
        <div><dt className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Address</dt><dd className="mt-1 max-w-md">{INFO.address}</dd></div>
        <div><dt className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Hours</dt><dd className="mt-1">{INFO.hours}</dd></div>
        <div><dt className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Phone</dt><dd className="mt-1"><a href={INFO.tel} className="transition hover:text-teal">{INFO.phone}</a></dd></div>
      </dl><div className="mt-9"><Button href={INFO.maps} external>Get Directions</Button></div></Reveal>
    <Reveal delay={150}><iframe title="AV Sports Arena & Cafe on Google Maps" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[360px] w-full border-0 grayscale invert-[.9] contrast-[.9] sm:h-[440px] lg:h-full lg:min-h-[420px]" /></Reveal>
  </div></section>)

const CTA = () => (
  <section className="relative overflow-hidden bg-crimson py-24 text-center lg:py-32"><Reveal className="mx-auto max-w-4xl px-5">
    <h2 className="font-display text-5xl uppercase leading-[0.95] sm:text-7xl lg:text-8xl">Ready to play, eat &amp; experience?</h2>
    <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
      <Button href={INFO.tel} variant="light">Call Now</Button><Button href={INFO.maps} external variant="ghost">Get Directions</Button><Button href={INFO.ig} external variant="ghost">Instagram</Button></div></Reveal></section>)

const Footer = () => (
  <footer className="border-t border-white/10 px-5 pb-28 pt-14 sm:px-8 lg:pb-14"><div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
    <div className="flex max-w-sm items-start gap-4"><img src={IMG.logo} alt="" className="h-14 w-14 rounded-full object-cover" /><div><p className="font-display text-2xl uppercase">{INFO.name}</p><p className="mt-2 text-sm text-white/60">{INFO.address}</p></div></div>
    <ul className="space-y-2 text-sm text-white/70"><li>{INFO.hours}</li><li><a className="hover:text-teal" href={INFO.tel}>{INFO.phone}</a></li>
      <li><a className="hover:text-teal" href={INFO.ig} target="_blank" rel="noopener noreferrer">Instagram</a></li><li><a className="hover:text-teal" href={INFO.maps} target="_blank" rel="noopener noreferrer">Get Directions</a></li></ul>
  </div><p className="mx-auto mt-10 max-w-7xl text-xs text-white/40">© {new Date().getFullYear()} {INFO.name}. All rights reserved.</p></footer>)

export default function App() {
  return <><Nav /><main><Hero /><InfoBar /><Marquee /><Experience /><Arena /><Cafe /><Gallery /><About /><Visit /><CTA /></main><Footer /></>
}
