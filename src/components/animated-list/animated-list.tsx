import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const AnimatedListItem = ({
  index,
  children
}: Readonly<{
  index: number;
  children: React.ReactNode;
}>) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const initialX = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={{ x: initialX, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 30 }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedListItem;
