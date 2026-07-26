import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { DoodleArrow } from './DoodleArrow';

export function HeroSection() {
  const clients = [
    "BMW", "Audi", "Samsung", "Toyota", "Honda", "KFC", 
    "Huawei", "Pirelli", "Nike", "Burger King", "Maserati", "Volkswagen"
  ];

  const expertise = [
    "Art Direction", "Visual Storytelling", "Concept Development", 
    "Campaign Ideation", "Digital Design", "AI-Powered Visuals", 
    "Photo Manipulation", "Photography Direction", "Brand Identity", 
    "Studio Supervision", "Motion Briefing", "Retouching"
  ];

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Ghost Background Text */}
      <motion.div 
        className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0"
        animate={{ opacity: [0.06, 0.09, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <h1 className="text-[15vw] leading-none font-black text-white whitespace-nowrap opacity-10 tracking-tighter">
          APEX STUDIO
        </h1>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-4">
              Who <span className="text-primary">We</span> Are
            </h2>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl">
              We are an independent creative agency crafting visual statements that refuse to be ignored.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CREATIVE DNA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-card/80 backdrop-blur-sm border border-border p-8 rounded-[18px] relative overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                <div className="text-2xl font-bold tracking-tight">
                  <span className="text-primary">250+</span> <span className="text-white">Clients.</span><br/>
                  <span className="text-primary">12+</span> <span className="text-white">Years.</span><br/>
                  <span className="text-muted-foreground">One obsessive creative team.</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We're an art-direction-first agency obsessed with campaigns that blur the line between direction, digital craft, and real-world storytelling. We play with light, shape ideas, and push creativity further with every brief.
                </p>
              </div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 opacity-80">
                <DoodleArrow direction="up-right" className="w-full h-full" />
              </div>
            </motion.div>

            <div className="flex flex-col gap-6">
              {/* PORTFOLIO */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-card/80 backdrop-blur-sm border border-border p-8 rounded-[18px] flex flex-col justify-between relative group hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center font-serif font-bold text-2xl text-white">
                    Bē
                  </div>
                  <div className="w-16 h-16 absolute top-4 right-4">
                    <DoodleArrow direction="down-right" className="w-full h-full" />
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold text-lg mb-1">Click our world.</div>
                  <a href="https://www.behance.net/apexstudio" target="_blank" rel="noreferrer" className="text-primary text-sm font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-all">
                    behance.net/apexstudio
                  </a>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                {[
                  { icon: Mail, text: "agency@apexstudio.com" },
                  { icon: Phone, text: "+1 (555) 000-0000" },
                  { icon: MapPin, text: "New York City, USA" }
                ].map((item, i) => (
                  <div key={i} className="bg-[#1a1a1a] border border-white/10 p-4 rounded-[10px] flex flex-col items-center justify-center text-center gap-3 hover:-translate-y-1 transition-transform">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium truncate w-full">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* MEGA CLIENTS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card/80 backdrop-blur-sm border border-border p-8 rounded-[18px]"
          >
            <h3 className="text-xl font-bold tracking-widest uppercase mb-8">
              Mega <span className="text-primary">Clients</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {clients.map((client, i) => (
                <div key={i} className="px-4 py-2 bg-[#1a1a1a] border border-white/5 rounded-full text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {client}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-4 lg:pt-20 flex flex-col items-start lg:items-end"
        >
          <h3 className="text-2xl font-black text-white tracking-[0.2em] uppercase mb-8 text-left lg:text-right">
            Our <span className="text-primary">Expertise</span>
          </h3>
          <ul className="flex flex-col gap-4 w-full text-left lg:text-right">
            {expertise.map((skill, i) => (
              <li key={i} className="text-sm font-semibold tracking-widest text-muted-foreground uppercase hover:text-white transition-colors cursor-default">
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
