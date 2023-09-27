'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Motion = ({ children, ...props }) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (window.document.body.clientWidth <= 420) {
      setLoad(true);
    }
    setLoad(false);
  });
  return <div>{load ? <div {...props}>{children}</div> : <motion.div {...props}>{children}</motion.div>}</div>;
};

export default Motion;
