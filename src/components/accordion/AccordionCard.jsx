import React from 'react'

import { motion, AnimatePresence } from 'framer-motion';
import { LuPlus } from 'react-icons/lu';

const AccordionCard = ({ title, children }) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className={`md:w-1/3 w-full bg-neutral-900/60 rounded-xl border mb-4 overflow-hidden ${isOpen ? 'border-blue-700/40' : 'border-neutral-800'}`}>

            {/* button */}
            <button className={`flex items-center justify-between text-neutral-200 w-full p-4 text-left ${isOpen ? "bg-neutral-800/40" : ""}`} onClick={toggleAccordion}>
                <span className="text-lg font-medium">{title}</span>

                <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.87, 0, 0.13, 1] }}
                >
                    <LuPlus className={`w-6 h-6 ${isOpen ? "text-red-500" : "text-neutral-100"}`} />
                </motion.span>
            </button>

            {/* content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.87, 0, 0.13, 1] }}
                        className='overflow-hidden'
                    >
                        <div className="p-4">
                            {children}
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default AccordionCard