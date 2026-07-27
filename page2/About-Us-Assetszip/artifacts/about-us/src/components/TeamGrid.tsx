import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { employees, Employee } from '../data/employees';
import { TeamCard } from './TeamCard';
import { ProfileModal } from './ProfileModal';
import { ResumeLandscape } from '../pages/ResumeLandscape';

export function TeamGrid() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showResume, setShowResume] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleCardClick = (emp: Employee) => {
    if (emp.portfolioLink && emp.portfolioLink.startsWith('/')) {
      setShowResume(true);
    } else {
      setSelectedEmployee(emp);
    }
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24">
      {/* Ghost Background Text */}
      <motion.div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.05, 0.08, 0.05] }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <h2 className="text-[12vw] leading-none font-black text-white whitespace-nowrap opacity-10 tracking-tighter">
          MEET THE <span className="text-primary">TEAM</span>
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16"
        >
          {employees.map((employee) => (
            <TeamCard 
              key={employee.id} 
              employee={employee} 
              onClick={handleCardClick}
            />
          ))}
        </motion.div>
      </div>

      {/* Profile Modal (for regular team members) */}
      <AnimatePresence>
        {selectedEmployee && (
          <ProfileModal 
            employee={selectedEmployee} 
            onClose={() => setSelectedEmployee(null)} 
          />
        )}
      </AnimatePresence>

      {/* Resume Modal (popup for Mohanned) */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setShowResume(false)}
            />

            {/* Modal box */}
            <motion.div
              className="relative z-10 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              style={{ height: '75vh' }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, type: 'spring', bounce: 0.15 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowResume(false)}
                className="absolute top-4 right-4 z-[110] p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors backdrop-blur-sm"
                aria-label="Close resume"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Resume content inside the box */}
              <div className="w-full h-full overflow-hidden">
                <ResumeLandscape />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
