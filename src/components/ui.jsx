import { useEffect, useRef } from 'react'
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return <Tag ref={ref} style={{ transitionDelay: delay + 'ms' }} className={'reveal ' + className}>{children}</Tag>
}
export function Button({ href, variant = 'primary', external, children, className = '' }) {
  const v = { primary: 'bg-crimson text-white hover:bg-crimson-hi', ghost: 'border border-white/30 text-white hover:bg-white hover:text-ink', light: 'bg-bone text-ink hover:bg-white' }[variant]
  return <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className={`group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 ${v} ${className}`}>
    {children}<span className="transition-transform duration-300 group-hover:translate-x-1">→</span></a>
}
export const Eyebrow = ({ children }) => <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-teal"><span className="h-px w-8 bg-teal" />{children}</p>
export const H2 = ({ children, className = '' }) => <h2 className={`font-display text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl ${className}`}>{children}</h2>
