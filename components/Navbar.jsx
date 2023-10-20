import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
// Assuming you're using React Router for navigation

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
      <div className="  md:space-x-20">
        <Link className=" text-white" href="/">Hero</Link>
        <Link className=" text-white" href="/">Explore</Link>
        <Link className=" text-white" href="/">Feedback</Link>
        <Link className=" text-white" href="/">Insights</Link>
        <Link className=" text-white" href="/">Whatsnew</Link>
        <Link className=" text-white" href="/">World</Link>
        <Link className=" text-white" href="/">Get Started</Link>
        <Link className=" text-white" href="/">About</Link>
      </div>
      <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
