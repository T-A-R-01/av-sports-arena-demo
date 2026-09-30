import { useEffect, useState } from 'react'
import { INFO, IMG } from '../data'
import { Button } from './ui'
const LINKS = [['Home', '#home'], ['Experience', '#experience'], ['About', '#about'], ['Gallery', '#gallery'], ['Visit Us', '#visit']]
export default function Nav() {
  const [solid, setSolid] = useState(false), [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setSolid(window.scrollY > 40); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  return (<>
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid || open ? 'bg-ink/90 backdrop-blur-md border-b border-white/10' : ''}`}>
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label={INFO.name}><img src={IMG.logo} alt="AV Sports Arena & Cafe logo" className="h-11 w-11 rounded-full object-cover" /></a>
        <ul className="hidden items-center gap-9 lg:flex">{LINKS.map(([l, h]) => <li key={h}><a href={h} className="text-sm font-medium uppercase tracking-widest text-white/80 transition hover:text-teal">{l}</a></li>)}</ul>
        <div className="hidden lg:block"><Button href={INFO.maps} external className="!py-2.5">Get Directions</Button></div>
        <button className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} /><span className={`h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} /><span className={`h-0.5 w-6 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>
      {open && <div className="fixed inset-x-0 top-[72px] bottom-0 flex flex-col justify-between bg-ink px-6 pb-10 pt-8 lg:hidden">
        <ul className="space-y-1">{LINKS.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 font-display text-4xl uppercase">{l}</a></li>)}</ul>
        <div className="space-y-3"><Button href={INFO.tel} className="w-full">Call Now</Button><Button href={INFO.maps} external variant="ghost" className="w-full">Get Directions</Button></div>
      </div>}
    </header>
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-ink/95 text-center text-xs font-bold uppercase tracking-widest backdrop-blur pb-[env(safe-area-inset-bottom)] lg:hidden">
      <a href={INFO.tel} className="bg-crimson py-4">Call</a><a href={INFO.maps} target="_blank" rel="noopener noreferrer" className="py-4">Directions</a><a href={INFO.ig} target="_blank" rel="noopener noreferrer" className="py-4">Instagram</a>
    </div>
  </>)
}
