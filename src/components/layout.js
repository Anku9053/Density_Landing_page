// Layout.js
import React from 'react';
import HomePage from '../pages/Homepage';
import Navbar from '../pages/Navbar';
import Trade from '../pages/Trade';
import ThreeImage from '../pages/ThreeImage';
import TradersDesc from '../pages/TradersDesc';
import WhyDensity from '../pages/WhyDensity';
import TradeMorePayLess from '../pages/TradeMorePayLess';
import ThreeDiv from '../pages/ThreeDiv';
import Explore from '../pages/Explore';
import NewFrontiers from '../pages/NewFrontiers';
import BackedByBest from '../pages/BackedByBest';
import TradeTogether from '../pages/TradeTogether';
import Visionaries from '../pages/Visionaries';
import EarnMoney from '../pages/EarnMoney';
import Faqpage from '../pages/Faqpage';
import Faq from '../pages/faq';
import StartSmall from '../pages/StartSmall';
import Scroll from '../pages/Scroll';
import Footer from '../pages/Footer';
import Scroll_first from '../pages/Scroll_first';

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Navbar/> 
      <Trade/> 
      <ThreeImage />
      <TradersDesc />
      <WhyDensity />
      <Scroll_first/>
      <TradeMorePayLess />
      <Explore />
      <NewFrontiers />
      <StartSmall/>
      <Scroll/>
      <BackedByBest/> 
      <EarnMoney/>
      <TradeTogether/>
      <Visionaries />
      <Faq/>
      <Footer/>
    </div>
  );
};

export default Layout;
