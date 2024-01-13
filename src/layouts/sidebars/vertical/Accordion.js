import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { useEffect } from 'react';


const Accordion = ({ title, children, name}) => {

  const [isOpen, setIsOpen] = useState();
 
  useEffect(() => {
    const storedValue = localStorage.getItem(name);
    if (storedValue !== Accordion.storesetting) {
      // setIsOpen(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem((name), JSON.stringify(isOpen));
  }, [isOpen]); 
  
  return (
    <div>
      <div className='flex items-center justify-between cursor-pointer bg-black\/5 mb-2' onClick={() => setIsOpen(!isOpen)}>        
        <h4 className="text-black dark:text-white font-medium">{title}</h4>
        <span className='dark:invert'>
          <svg className={`fill-[#000000] ${isOpen ? "rotate-180" : "rotate-0"}`} width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M16.9,9.2c-0.4-0.4-1-0.4-1.4,0L12,12.7L8.5,9.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l4.2-4.2C17.3,10.2,17.3,9.6,16.9,9.2z" /></svg>
        </span>
      </div> 

      <AnimatePresence>
          <motion.div 
          className='overflow-hidden'
            initial={`${isOpen ? 'open' : 'collapsed'}`}
            animate={`${isOpen ? 'open' : 'collapsed'}`}
            exit="collapsed"
            variants={{
              open: { height: 'auto'},
              collapsed: { height: '0'},
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <div>{children}</div>
          </motion.div>
      </AnimatePresence>

    </div>
  );
};
export default Accordion;