'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the CDS
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Enter CDS
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            CDS The largest community of tomorrow's open source developers
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 CDS. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
        
        <div className='mt-10 flex items-start justify-between flex-wrap gap-8 text-white'>
          <div className='flex flex-col gap-3'>
            <h4 className='font-bold'>COMPANY</h4>
            <li className='font-normal text-[17px] opacity-50 hover:opacity-100 list-none hover:underline'>About</li>
            <li className='font-normal text-[17px] opacity-50 hover:opacity-100 list-none hover:underline'>Privacy policy</li>
            <li className='font-normal text-[17px] opacity-50 hover:opacity-100 list-none hover:underline'>Terms & conditions</li>
          </div>
          <div className='flex flex-col gap-3'>
            <h4 className='font-bold'>QUICK LINKS</h4>
            <li className='font-normal text-[17px] opacity-50 hover:opacity-100 list-none hover:underline'>Hire Talent</li>
            <li className='font-normal text-[17px] opacity-50 hover:opacity-100 list-none hover:underline'>Find Work</li>
            <li className='font-normal text-[17px] opacity-50 hover:opacity-100 list-none hover:underline'>Project</li>
            <li className='font-normal text-[17px] opacity-50 hover:opacity-100 list-none hover:underline'>Community</li>
            <li className='font-normal text-[17px] opacity-50 hover:opacity-100 list-none hover:underline'>Blogs</li>
          </div>
          <div className='flex flex-col gap-3'>
            <h4 className='font-bold'>DOWNLOAD THE APP</h4>
            <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#ffffff] hover:bg-slate-300 text-black rounded-[32px] gap-[12px]"> <span> <img src="/playstore.svg" alt="playstore-icon" /> </span> Download on Google Play </button>
            <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#ffffff] hover:bg-slate-300 text-black rounded-[32px] gap-[12px]"> <span> <img src="/apple.svg" alt="app-store-icon" /> </span> Download on App Store</button>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
