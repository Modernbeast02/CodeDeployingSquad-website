'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { newFeatures } from '../constants';
import { NewFeatures, HeroText, TypingText, EarthCanvas, Stars } from '../components';
import { planetVariants, fadeIn } from '../utils/motion';
import Link from 'next/link';

const Hero = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <Stars />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col  items-center `}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="justify-start flex-col flex flex-1"
      >
        <TypingText title="| Here we are," />
        <HeroText title={<>The largest community of tomorrow's open source developers</>} />
        <div className=' flex md:gap-6 gap-2 md:mt-10 mt-5 pb-10'>
          <Link href={"https://github.com/CodeDeployingSquad"} type="button" className="flex items-center h-fit py-2 px-4 bg-[#333] rounded-[32px] gap-[12px]">
            <img
              src="/github.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain text-white"
            />
            <span className="font-normal text-[13px] text-white">
              GitHub
            </span>
          </Link>
          <Link href={"https://twitter.com/bettercallcds/"} type="button" className="flex items-center h-fit py-2 px-4 bg-[#1DA1F2] rounded-[32px] gap-[12px]">
            <img
              src="/twitter.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[13px] text-white">
              Twitter
            </span>
          </Link>
        </div>
        {/* <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div> */}
      </motion.div>
      <motion.div
        variants={slideIn("down", "tween", 0.2, 1)}
        // className='xl:h-auto md:h-[550px] h-[350px] bg-red-500 '
        className=' h-[500px] w-[500px] flex '

      >
        <EarthCanvas />
      </motion.div>
    </motion.div>
  </section>
  // <section className={`${styles.yPaddings} bg-hero`}>
  //   <motion.div
  //     variants={staggerContainer}
  //     initial="hidden"
  //     whileInView="show"
  //     viewport={{ once: true, amount: 0.25 }}
  //     className={`${styles.innerWidth} mx-auto flex flex-col relative w-full h-[550px]`}
  //   >
  //     <div className="flex justify-center items-center flex-col relative z-10">
  //       <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} neon-glow`}>
  //         The largest community of tomorrow's opensouce developers
  //       </motion.h1>
  //       {/* <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} neon-glow`}>
  //         Deploying
  //       </motion.h1>
  //       <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} neon-glow`}>
  //         Squad
  //       </motion.h1> */}
  //     </div>

  //     {/* <motion.div
  //       variants={slideIn('right', 'tween', 0.2, 1)}
  //       className="relative w-full md:-mt-[20px] -mt-[12px]"
  //     >
  //       <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

  //       <img
  //         src="/cover.png"
  //         alt="hero_cover"
  //         className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
  //       />

  //       <a href="#explore">
  //         <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
  //           <img
  //             src="/stamp.png"
  //             alt="stamp"
  //             className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
  //           />
  //         </div>
  //       </a>
  //     </motion.div> */}

  //   </motion.div>
  // </section>
);

export default Hero;
