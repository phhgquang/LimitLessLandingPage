import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";
import chplay from "../../assets/chplay.png";
import appstore from "../../assets/appstore.png";

import { motion } from "framer-motion";

const transition = { type: "spring", duration: 3 };
const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={20} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fexpo.dev%2Faccounts%2Fvinh-2%2Fprojects%2FLimitLess%2Fbuilds%2Fc9af8a2e-20ae-49c2-83df-b9bf28ce3421%3Ffbclid%3DIwAR3x-ST7zjcXOMQghV0G7jkTUoFAVC_K4mI3wUmX9ul7ILWZDBlAE2CejHM&h=AT1htqqY-ZpvrwwDy2Io_rdeAChatNid5-3kSb8P6Z47FZNrtjHzez_Tu-9_0qwbL_LEaZMHnBsjGNnBLuSNzE-wN8msYryKRqEwRuAiuD65EMEvB3AgBs5WrH6QKaF4DyRPzd-YqPc">
          <img className="appstore" src={appstore} alt="" />
        </a>
        <img className="chplay" src={chplay} alt="" />
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero_image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero_image_back"
        />

        {/* calories */}
        <motion.div
          initial={{ right: "39rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
