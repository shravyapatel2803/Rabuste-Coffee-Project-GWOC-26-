import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  
  const indicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-rabuste-bg flex flex-col justify-center items-center">
      
      {/* Background with Gradient Overlay */}
      {/* Logic:
         1. 'from-rabuste-bg' ensures the bottom blends into the next section (white in light mode, dark in dark mode).
         2. 'via-rabuste-bg/60' continues that blend.
         3. 'to-black/10' (light mode) vs 'dark:to-black/40' ensures the top image isn't too obscured in light mode.
      */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-rabuste-bg via-rabuste-bg/60 to-black/10 dark:to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
          alt="Coffee Background"
          className="w-full h-full object-cover opacity-50 grayscale-[20%]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto mt-10">
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          {/* THEME FIX: 
            Use 'dark:' class modifier instead of if/else logic.
            Default (Light Mode): border-rabuste-text/10, text-rabuste-text
            Dark Mode: dark:border-rabuste-gold/30, dark:text-rabuste-gold
          */}
          <span className="inline-block py-1 px-3 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] mb-6 uppercase backdrop-blur-sm 
            border border-rabuste-text/10 text-rabuste-text 
            dark:border-rabuste-gold/30 dark:text-rabuste-gold transition-colors duration-300">
            Est. 2024 • Gujarat
          </span>

          {/* TEXT COLOR FIX:
            Default: text-rabuste-text (Dark color for light background)
            Dark Mode: dark:text-white (White color for dark background)
          */}
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-black leading-[0.9] tracking-tight mb-6 
            text-rabuste-text dark:text-white transition-colors duration-300">
            BOLD <span className="text-rabuste-orange italic">ROBUSTA</span>
          </h1>
          
          <p className="text-base md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed 
            text-rabuste-text/80 dark:text-gray-300 transition-colors duration-300">
            Not just a café. A sanctuary where intense flavors meet industrial art. 
            Experience the raw energy of pure Robusta.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* BUTTON FIX:
               Light Mode: bg-rabuste-text text-white (High contrast)
               Dark Mode: dark:bg-white dark:text-rabuste-bg 
            */}
            <a 
              href="#menu" 
              className="px-8 py-4 font-bold tracking-widest text-xs uppercase rounded-sm transition-all min-w-[180px] flex items-center justify-center
                bg-rabuste-text text-rabuste-bg hover:bg-rabuste-orange hover:text-white
                dark:bg-white dark:text-rabuste-bg dark:hover:bg-gray-200"
            >
              View Menu
            </a>
            
            {/* SECONDARY BUTTON FIX:
               Light Mode: border-rabuste-text text-rabuste-text
               Dark Mode: dark:border-white/20 dark:text-white 
            */}
            <a 
              href="#gallery" 
              className="px-8 py-4 border font-bold tracking-widest text-xs uppercase rounded-sm transition-all min-w-[180px] flex items-center justify-center
                border-rabuste-text/20 text-rabuste-text hover:bg-rabuste-text/5
                dark:border-white/20 dark:text-white dark:hover:bg-white/5"
            >
              Current Exhibitions
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-rabuste-text/50 dark:text-white/50">Scroll</span>
        <div className="w-[1px] h-12 animate-pulse bg-gradient-to-b 
          from-transparent via-rabuste-text/50 to-transparent 
          dark:via-white/50" 
        />
      </motion.div>
    </section>
  );
};

export default Hero;