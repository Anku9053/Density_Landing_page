// // src/components/ScrollAnimation.js

// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import React, { useEffect } from 'react';
// import * as ScrollMagic from 'scrollmagic';
// import {Power2 } from 'gsap';
// // import { TweenMax } from 'gsap';
// // import { TweenLite } from 'gsap';
// // import { TweenMax } from 'gsap/gsap-core';
// import { TweenMax } from 'gsap/gsap-core';

// const ScrollAnimation = () => {
//   useEffect(() => {
//     const controller = new ScrollMagic.Controller();

//     // Create a tween animation for your content
//     const tween = TweenMax.to('.animated-content', 1, {
//       opacity: 1,
//       y: 0,
//       ease: Power2.easeInOut,
//     });

//     new ScrollMagic.Scene({
//       triggerElement: '.trigger', // You'll need a trigger element
//       triggerHook: 0.5, // Adjust as needed
//     })
//       .setTween(tween)
//       .addTo(controller);
//   }, []);

//   return (
//     <div>
//       <div className="trigger" style={{ height: '100vh' }}></div>
//       <div className="animated-content" style={{ opacity: 0, transform: 'translateY(50px)' }}>
//         <h1>Welcome to My Animated Gatsby Homepage</h1>
//         <p>This is a smoothly scrolling homepage created with Gatsby and ScrollMagic.</p>
//       </div>
//       {/* Add more content and sections as needed */}
//     </div>
//   );
// };

// export default ScrollAnimation;
