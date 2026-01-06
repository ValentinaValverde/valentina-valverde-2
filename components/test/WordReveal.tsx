import { motion } from 'framer-motion';

// Word-by-word slide up animation
export default function WordReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className="overflow-hidden inline-flex">
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
