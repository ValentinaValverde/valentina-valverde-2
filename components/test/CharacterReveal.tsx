import { motion } from 'framer-motion';

// Character-by-character animation component (like "SILK")
export default function CharacterReveal({
  words,
  delay = 0,
  className = '',
}: {
  words: string;
  delay: number;
  className: string;
}) {
  const text = words;
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split('').map((char, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block !text-mono"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.03,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
