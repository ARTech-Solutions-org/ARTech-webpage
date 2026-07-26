import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Mail, Phone, MapPin } from 'lucide-react';
import { Employee } from '../data/employees';
import { CircularText } from './CircularText';
import { DoodleArrow } from './DoodleArrow';

interface ProfileModalProps {
  employee: Employee;
  onClose: () => void;
}

export function ProfileModal({ employee, onClose }: ProfileModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const [firstName, ...lastNames] = employee.name.split(' ');
  const lastName = lastNames.join(' ');

  // Compute ghost font-size so the longest name part fits within the screen.
  // Empirically calibrated: Montserrat 900 uppercase chars are ~0.833× the font-size wide.
  // We target 92% of screen width as a safe margin.
  const longestPart = firstName.length >= lastName.length ? firstName : lastName;
  const ghostSizeVw = Math.floor(92 / (longestPart.length * 0.833));

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-stretch justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal — full viewport, no scroll */}
      <motion.div
        className="relative w-full h-dvh overflow-hidden bg-[#141414] z-10 flex flex-col"
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{ duration: 0.35, type: 'spring', bounce: 0.15 }}
      >
        {/* Ghost Name — desktop only; mobile has its own fitted ghost inside md:hidden */}
        <div className="hidden md:flex absolute inset-0 flex-col justify-start leading-none pointer-events-none select-none z-0 overflow-hidden pt-2">
          <span className="text-[13vw] font-black text-white tracking-tighter uppercase opacity-[0.06] whitespace-nowrap pl-4">
            {firstName}
          </span>
          <span className="text-[13vw] font-black text-white tracking-tighter uppercase opacity-[0.06] whitespace-nowrap pl-12">
            {lastName}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          data-testid="button-close-modal"
          className="absolute top-4 right-4 md:top-5 md:right-5 z-50 p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ── DESKTOP LAYOUT (md+) ─────────────────────────────────── */}
        <div className="hidden md:grid md:grid-cols-12 h-full relative z-10 gap-4 p-5 lg:p-7">

          {/* LEFT COLUMN — col 1-4 */}
          <div className="col-span-4 flex flex-col gap-3 justify-center">

            {/* Title pill */}
            <div className="inline-flex mb-1">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] text-[#A0A0A0] uppercase">
                {employee.title}
              </span>
            </div>

            {/* Creative DNA card */}
            <div className="bg-[#1e1e1e] border border-white/[0.06] rounded-[16px] p-4 flex flex-col gap-2">
              <div className="flex flex-col gap-1 text-sm font-black leading-snug">
                {employee.bioStats.slice(0, 3).map((stat, i) => {
                  const parts = stat.split(' ');
                  const num = parts[0];
                  const rest = parts.slice(1).join(' ');
                  return (
                    <div key={i}>
                      <span className="text-[#38bdf8]">{num}</span>{' '}
                      <span className="text-white">{rest}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-[11px] text-[#A0A0A0] leading-relaxed mt-1 line-clamp-3">
                {employee.bioText}
              </p>
            </div>

            {/* Portfolio card */}
            <div className="bg-[#1e1e1e] border border-white/[0.06] rounded-[16px] p-3 flex items-center gap-3 hover:border-[#38bdf8]/30 transition-colors group">
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center font-serif font-bold text-base text-white shrink-0">
                Bē
              </div>
              <div className="min-w-0">
                <div className="text-white font-bold text-xs">Click my world.</div>
                <a
                  href={employee.portfolioLink}
                  target={employee.portfolioLink.startsWith('/') ? '_self' : '_blank'}
                  rel="noreferrer"
                  className="text-[#38bdf8] text-[10px] underline decoration-[#38bdf8]/40 underline-offset-2 hover:decoration-[#38bdf8] transition-all truncate block font-semibold"
                >
                  {employee.portfolioLink.startsWith('/') ? 'Interactive Resume ↗' : 'View Portfolio'}
                </a>
              </div>
              <DoodleArrow direction="up-right" className="w-8 h-8 ml-auto opacity-70 shrink-0" />
            </div>

            {/* Clients */}
            <div className="bg-[#1e1e1e] border border-white/[0.06] rounded-[16px] p-3">
              <h4 className="text-[9px] font-bold tracking-widest text-white uppercase mb-2">Highlights</h4>
              <div className="flex flex-wrap gap-1.5">
                {employee.clients.slice(0, 8).map((client, i) => (
                  <span key={i} className="px-2 py-0.5 bg-black/50 border border-white/5 rounded-full text-[9px] font-bold text-[#A0A0A0] uppercase tracking-wider">
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact badges */}
            <div className="grid grid-cols-3 gap-2 mt-auto">
              {[
                { icon: Mail, label: employee.email.split('@')[0] },
                { icon: Phone, label: employee.phone.slice(-4) },
                { icon: MapPin, label: employee.location.split(',')[0] },
              ].map((item, i) => (
                <div key={i} className="bg-[#1a1a1a] border border-white/[0.06] p-2 rounded-xl flex flex-col items-center gap-1">
                  <item.icon className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span className="text-[8px] text-[#A0A0A0] uppercase tracking-wider font-bold truncate w-full text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER — col 5-8 */}
          <div className="col-span-4 flex items-center justify-center relative">
            <div className="relative w-56 h-72 lg:w-64 lg:h-80">
              {/* Circular text */}
              <div className="absolute -inset-16 z-0 opacity-60">
                <CircularText text={employee.title} radius={90} />
              </div>

              {/* Avatar box */}
              <div className="absolute inset-0 bg-[#1e1e1e] border-2 border-white/10 rounded-2xl flex items-center justify-center shadow-2xl z-10 overflow-hidden">
                {employee.avatar ? (
                  <img src={employee.avatar} alt={employee.name} className="absolute inset-0 w-full h-full object-contain object-bottom" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black to-[#222] opacity-80" />
                    <span className="relative z-10 text-6xl font-black text-[#38bdf8] drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                      {employee.initials}
                    </span>
                  </>
                )}
              </div>

              {/* Doodle */}
              <div className="absolute -bottom-6 -right-10 w-20 h-20 z-20">
                <DoodleArrow direction="up-right" className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — col 9-12 */}
          <div className="col-span-4 flex flex-col gap-4 justify-center">

            {/* Education */}
            <div className="text-right">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">Education</h4>
              <p className="text-[11px] text-[#A0A0A0] leading-relaxed">{employee.education}</p>
            </div>

            {/* Skills */}
            <div className="text-right">
              <h4 className="text-xs font-bold text-[#38bdf8] uppercase tracking-widest mb-2">Skills</h4>
              <div className="flex flex-col gap-1">
                {employee.skills.slice(0, 8).map((skill, i) => (
                  <span key={i} className="text-[10px] font-bold tracking-widest text-[#A0A0A0] uppercase">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Creative Journey */}
            <div className="bg-[#1e1e1e] border border-white/[0.06] rounded-[16px] p-4 flex-1 min-h-0">
              <h4 className="text-[9px] font-bold tracking-widest text-white uppercase mb-3">Creative Journey</h4>
              <div className="flex flex-col gap-3 relative before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/5">
                {employee.experience.slice(0, 4).map((exp, i) => (
                  <div key={i} className="relative pl-5">
                    <div className={`absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#141414] ${exp.current ? 'bg-[#38bdf8]' : 'bg-white/20'}`} />
                    <div className={`text-xs font-bold leading-tight ${exp.current ? 'text-[#38bdf8]' : 'text-white'}`}>
                      {exp.role}
                    </div>
                    <div className="text-[10px] text-white/70 mt-0.5">
                      {exp.company} <span className="text-[#A0A0A0]">— {exp.location}</span>
                    </div>
                    <div className="text-[9px] text-[#A0A0A0] mt-0.5 uppercase tracking-wider">
                      {exp.dates} · {exp.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE LAYOUT ──────────────────────────────────────────── */}
        <div className="md:hidden h-dvh relative overflow-hidden bg-[#141414]">

          {/* Layer 0 — ghost name */}
          <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none select-none leading-[0.80]">
            <span
              className="block font-black text-white opacity-[0.13] tracking-tighter uppercase whitespace-nowrap"
              style={{ fontSize: `${ghostSizeVw}vw` }}
            >
              {firstName}
            </span>
            <span
              className="block font-black text-white opacity-[0.13] tracking-tighter uppercase whitespace-nowrap pl-4"
              style={{ fontSize: `${ghostSizeVw}vw` }}
            >
              {lastName}
            </span>
          </div>

          {/* Layer 1 — full-screen avatar (no frame, fills entire modal height) */}
          {employee.avatar ? (
            <img
              src={employee.avatar}
              alt={employee.name}
              className="absolute inset-0 w-full h-full object-contain object-bottom z-[1] pointer-events-none"
            />
          ) : (
            /* Fallback: circular text + initials centered */
            <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
              <div className="relative w-32 h-32">
                <div className="absolute -inset-6 opacity-40">
                  <CircularText text={employee.title} radius={80} />
                </div>
                <div className="absolute inset-0 bg-[#222] rounded-full flex items-center justify-center">
                  <span className="text-4xl font-black text-[#38bdf8]">{employee.initials}</span>
                </div>
              </div>
            </div>
          )}

          {/* Layer 2 — content cards floating over the avatar */}
          <div className="absolute inset-0 z-10 flex flex-col px-2.5 pt-2.5 pb-2 gap-2 overflow-y-auto">

            {/* ── Row 1: Title (left) | Education (right) ── */}
            <div className="flex items-start justify-between gap-2">
              <div className="text-[7px] font-black text-[#A0A0A0] uppercase tracking-[0.25em] shrink-0">
                {employee.title}
              </div>
              <div className="text-right">
                <h4 className="text-[8.5px] font-black text-white uppercase tracking-[0.18em] leading-none">Education</h4>
                <p className="text-[7px] text-[#A0A0A0] leading-snug mt-0.5">{employee.education}</p>
              </div>
            </div>

            {/* ── Row 2: Left cards | gap (avatar shows through) | Right cards ── */}
            <div className="flex gap-2 flex-1 min-h-0">

              {/* LEFT col */}
              <div className="w-[38%] flex flex-col gap-2">

                {/* Creative DNA */}
                <div className="bg-[#141414]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-2.5">
                  <h4 className="text-[7.5px] font-black text-white uppercase tracking-[0.18em] mb-1.5">Creative DNA</h4>
                  <div className="flex flex-col gap-0.5 mb-2">
                    {employee.bioStats.slice(0, 3).map((stat, i) => {
                      const [num, ...rest] = stat.split(' ');
                      return (
                        <div key={i} className="text-[9.5px] font-black leading-tight">
                          <span className="text-[#38bdf8]">{num}</span>{' '}
                          <span className="text-white">{rest.join(' ')}</span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-[7px] text-[#888] leading-relaxed">{employee.bioText}</p>
                </div>

                {/* Portfolio */}
                <div className="bg-[#141414]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-2.5 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center font-serif font-bold text-[11px] text-white shrink-0">Bē</div>
                    <span className="text-[8px] font-black text-white uppercase tracking-[0.15em]">Portfolio</span>
                  </div>
                  <div className="text-[7.5px] font-bold text-white mb-0.5">Click my world.</div>
                  <a
                    href={employee.portfolioLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[6.5px] text-[#38bdf8] underline decoration-[#38bdf8]/40 underline-offset-1 truncate block pr-8"
                  >
                    {employee.portfolioLink.replace('https://', '')}
                  </a>
                  <div className="absolute bottom-1 right-1.5 w-7 h-5 opacity-80">
                    <DoodleArrow direction="up-right" className="w-full h-full scale-x-[-1]" />
                  </div>
                </div>

                {/* Mega Clients */}
                <div className="bg-[#141414]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-2.5">
                  <h4 className="text-[7.5px] font-black uppercase tracking-[0.18em] mb-1.5">
                    <span className="text-[#38bdf8]">Mega </span>
                    <span className="text-white">Clients</span>
                  </h4>
                  <div className="flex flex-wrap gap-[3px]">
                    {employee.clients.slice(0, 9).map((c, i) => (
                      <span key={i} className="text-[6px] text-[#888] font-bold uppercase border border-white/[0.07] bg-black/30 px-1.5 py-[2px] rounded-full tracking-wide">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CENTER — transparent, avatar shows through */}
              <div className="flex-1" />

              {/* RIGHT col */}
              <div className="w-[38%] flex flex-col gap-2">

                {/* Skills */}
                <div className="bg-[#141414]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-2.5 text-right">
                  <h4 className="text-[7.5px] font-black text-[#38bdf8] uppercase tracking-[0.18em] mb-1">Skills</h4>
                  <div className="flex flex-col gap-[2px]">
                    {employee.skills.map((skill, i) => (
                      <span key={i} className="text-[6.5px] font-bold text-[#888] uppercase tracking-wider leading-tight">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Creative Journey */}
                <div className="bg-[#141414]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-2.5">
                  <h4 className="text-[7.5px] font-black text-white uppercase tracking-[0.18em] mb-1.5">Creative Journey</h4>
                  <div className="flex flex-col gap-2">
                    {employee.experience.map((exp, i) => (
                      <div key={i}>
                        <div className={`text-[8px] font-black leading-tight ${exp.current ? 'text-[#38bdf8]' : 'text-white'}`}>
                          {exp.role}
                        </div>
                        <div className="text-[6.5px] text-white/55 leading-snug mt-[1px]">
                          {exp.company}{exp.location ? ` – ${exp.location}` : ''}
                        </div>
                        <div className="text-[6px] text-[#666] mt-[1px] uppercase tracking-wide">
                          {exp.dates} ({exp.type})
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Row 3: Contact ── */}
            <div className="flex gap-1.5 shrink-0">
              {[
                { icon: Mail, label: employee.email },
                { icon: Phone, label: employee.phone },
                { icon: MapPin, label: employee.location },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 flex-1 bg-[#141414]/80 backdrop-blur-sm border border-white/[0.07] rounded-xl px-1.5 py-1.5 min-w-0">
                  <item.icon className="w-3 h-3 text-[#38bdf8] shrink-0" />
                  <span className="text-[6px] text-[#888] font-bold truncate leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
