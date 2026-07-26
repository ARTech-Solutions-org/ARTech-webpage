import React from 'react';
import { motion } from 'framer-motion';
import { Employee } from '../data/employees';

interface TeamCardProps {
  employee: Employee;
  onClick: (employee: Employee) => void;
}

export function TeamCard({ employee, onClick }: TeamCardProps) {
  const handleClick = () => {
    if (employee.portfolioLink && employee.portfolioLink.startsWith('/')) {
      window.location.href = employee.portfolioLink;
    } else {
      onClick(employee);
    }
  };

  return (
    <motion.div
      whileHover="hover"
      className="group cursor-pointer"
      onClick={handleClick}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <motion.div 
        className="h-[280px] bg-[#1e1e1e] border border-white/5 rounded-[18px] p-6 flex flex-col items-center justify-center relative overflow-hidden transition-colors"
        variants={{
          hover: { 
            y: -8, 
            scale: 1.03,
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.25)",
            borderColor: "rgba(56, 189, 248, 0.3)"
          }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Photo Container */}
        <div className="w-32 h-32 rounded-full mb-6 overflow-hidden bg-black flex items-center justify-center border-2 border-white/10 z-10 relative">
          <motion.div 
            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#111]"
            variants={{
              hover: { scale: 1.08 }
            }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-3xl font-bold text-primary">{employee.initials}</span>
          </motion.div>
        </div>

        {/* Text Details */}
        <div className="text-center z-10 w-full flex flex-col items-center">
          <h4 className="text-lg font-bold text-white mb-1">{employee.name}</h4>
          
          <div className="relative overflow-hidden inline-block px-1">
            <p className="text-xs font-bold uppercase tracking-widest text-primary relative z-10">
              {employee.cardTitle || employee.title}
            </p>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/40 -z-0"
              variants={{
                rest: { x: "-100%" },
                hover: { x: 0 }
              }}
              initial="rest"
              transition={{ duration: 0.3, ease: "circOut" }}
            />
          </div>
        </div>

        {/* Subtle background glow on hover */}
        <motion.div 
          className="absolute inset-0 bg-primary/5 rounded-[18px] -z-0 pointer-events-none"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          initial="rest"
        />
      </motion.div>
    </motion.div>
  );
}
