import { useEffect, useState } from 'react'
import { GALLERY } from '../data'
import { Reveal, Eyebrow, H2 } from './ui'
export default function Gallery() {
  const [idx, setIdx] = useState(null)
  const n = GALLERY.length
  useEffect(() => {
    if (idx === null) return
    const k = (e) => { if (e.key === 'Escape') setIdx(null); if (e.key === 'ArrowRight') setIdx((idx + 1) % n); if (e.key === 'ArrowLeft') setIdx((idx - 1 + n) % n) }
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [idx, n])
  return (<section id="gallery" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
    <Reveal><Eyebrow>Gallery</Eyebrow><H2 className="mb-12">Inside the arena</H2></Reveal>
    <div className="columns-2 gap-3 sm:gap-4 lg:columns-3">
      {GALLERY.map((g, i) => <Reveal key={g.src} delay={(i % 3) * 80} className="mb-3 sm:mb-4">
        <button onClick={() => setIdx(i)} className="group relative block w-full overflow-hidden bg-coal" aria-label={'Open: ' + g.alt}>
          <img src={g.src} alt={g.alt} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent p-4 text-left text-xs font-bold uppercase tracking-widest opacity-0 transition-opacity duration-300 group-hover:opacity-100">{g.alt}</span>
        </button></Reveal>)}
    </div>
    {idx !== null && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4" onClick={() => setIdx(null)} role="dialog" aria-modal="true">
      <button className="absolute right-5 top-5 text-3xl" aria-label="Close" onClick={() => setIdx(null)}>×</button>
      <button className="absolute left-3 text-4xl sm:left-8" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + n) % n) }}>‹</button>
      <img src={GALLERY[idx].src} alt={GALLERY[idx].alt} className="max-h-[88vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
      <button className="absolute right-3 text-4xl sm:right-8" aria-label="Next" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % n) }}>›</button>
    </div>}
  </section>)
}
