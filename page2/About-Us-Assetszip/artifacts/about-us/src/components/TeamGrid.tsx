import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { employees, Employee } from '../data/employees';
import { TeamCard } from './TeamCard';
import { ProfileModal } from './ProfileModal';

export function TeamGrid() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
              onClick={(emp) => setSelectedEmployee(emp)} 
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedEmployee && (
          <ProfileModal 
            employee={selectedEmployee} 
            onClose={() => setSelectedEmployee(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
