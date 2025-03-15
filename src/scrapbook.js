// import React, { useState, useRef, useEffect } from 'react';
// import { ChevronDown, Music, Pause, Play } from 'lucide-react';

// // Importing background tracks for different eras
// import firstMeetSong from './assets/haunt-you.mp3';
// import earlyDatesSong from './assets/superhero.mp3';
// import movingInSong from './assets/i-like-me-better.mp3';
// import presentDaySong from './assets/thats-so-true.mp3';

// import dinner from './assets/dinner.jpg';

// const Scrapbook = () => {
//   const [currentEra, setCurrentEra] = useState('firstMeet');
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   // Music tracks for each era
//   const musicTracks = {
//     firstMeet: firstMeetSong,
//     earlyDates: earlyDatesSong,
//     movingIn: movingInSong,
//     presentDay: presentDaySong
//   };

//   // Scroll-based era detection
//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const documentHeight = document.documentElement.scrollHeight;

//     if (scrollPosition < windowHeight) {
//       setCurrentEra('firstMeet');
//       console.log('firstMeet');
//     } else if (scrollPosition < windowHeight * 2) {
//       setCurrentEra('earlyDates');
//       console.log('earlyDates');
//     } else if (scrollPosition < windowHeight * 3) {
//       setCurrentEra('movingIn');
//       console.log('movingIn');
//     } else {
//       setCurrentEra('presentDay');
//       console.log('presentDay');
//     }
//   };

//   // Toggle music play/pause
//   const toggleMusic = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Change track when era changes
//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.src = musicTracks[currentEra];
//       if (isPlaying) {
//         audioRef.current.play();
//       }
//     }
//   }, [currentEra]);

//   return (
//     <div className="scrap-book">
//       <audio ref={audioRef} loop />
      
//       <button 
//         onClick={toggleMusic} 
//         className="fixed bottom-4 right-4 z-50 p-2 bg-pink-500 rounded-full"
//       >
//         {isPlaying ? <Pause color="white" /> : <Music color="white" />}
//       </button>

//       <section className="era first-meet h-screen flex flex-col justify-center items-center">
//         <h2 className="text-4xl font-bold mb-4">First Meeting</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <img 
//             src={dinner} 
//             alt="First meeting" 
//             className="transform hover:scale-105 transition-transform"
//           />
//           <img 
//             src={require('./assets/dinner.jpg')} 
//             alt="Early moments" 
//             className="transform hover:scale-105 transition-transform"
//           />
//         </div>
//         <p className="mt-4 max-w-xl text-center">
//           Our story began on a beautiful day when our paths first crossed...
//         </p>
//         <ChevronDown className="animate-bounce mt-8" />
//       </section>

//       <section className="era early-dates h-screen flex flex-col justify-center items-center">
//         <h2 className="text-4xl font-bold mb-4">Early Dates</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <img 
//             src="./assets/movies.jpg" 
//             alt="Date 1" 
//             className="transform hover:scale-105 transition-transform"
//           />
//           <img 
//             src="./assets/movies.jpg" 
//             alt="Date 2" 
//             className="transform hover:scale-105 transition-transform"
//           />
//           <img 
//             src="./assets/movies.jpg" 
//             alt="Date 3" 
//             className="transform hover:scale-105 transition-transform"
//           />
//         </div>
//         <p className="mt-4 max-w-xl text-center">
//           Exploring the world together, creating memories that would last a lifetime...
//         </p>
//         <ChevronDown className="animate-bounce mt-8" />
//       </section>

//       <section className="era moving-in h-screen flex flex-col justify-center items-center">
//         <h2 className="text-4xl font-bold mb-4">Moving In Together</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <img 
//             src="./assets/dinner.jpg" 
//             alt="Moving day" 
//             className="transform hover:scale-105 transition-transform"
//           />
//           <img 
//             src="./assets/dinner.jpg" 
//             alt="Home together" 
//             className="transform hover:scale-105 transition-transform"
//           />
//         </div>
//         <p className="mt-4 max-w-xl text-center">
//           Taking the next big step, creating a home and a life together...
//         </p>
//         <ChevronDown className="animate-bounce mt-8" />
//       </section>

//       <section className="era present-day h-screen flex flex-col justify-center items-center">
//         <h2 className="text-4xl font-bold mb-4">Present Day</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <img 
//             src="./assets/movies.jpg" 
//             alt="Recent moment 1" 
//             className="transform hover:scale-105 transition-transform"
//           />
//           <img 
//             src="./assets/movies.jpg" 
//             alt="Recent moment 2" 
//             className="transform hover:scale-105 transition-transform"
//           />
//           <img 
//             src="./assets/movies.jpg" 
//             alt="Recent moment 3" 
//             className="transform hover:scale-105 transition-transform"
//           />
//         </div>
//         <p className="mt-4 max-w-xl text-center">
//           Our love continues to grow, stronger with each passing day...
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Scrapbook;

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Music, Pause, Play } from 'lucide-react';

// Importing background tracks for different eras

import earlyTextsSong from './assets/songs/crush-on-you.m4a'; 
import firstMonthSong from './assets/songs/haunt-you.mp3';
import firstDatesSong from './assets/songs/superhero.mp3';
import seniorSpringHSSong from './assets/songs/i-like-me-better.mp3';
import prahmSong from './assets/songs/dont-stop-believin.mp3'; 
import graduationSong from './assets/songs/graduation.m4a';
import summer22Song from './assets/songs/superstars.m4a';
import summerVenturesSong from './assets/songs/so-in-love.m4a';
import fallBreak22Song from './assets/songs/little-things.m4a';
import froshWinterSong from './assets/songs/howling-at-the-moon.m4a';
import froshSpringSong from './assets/songs/comethru.m4a';
import sophYearSong from './assets/songs/get-into-my-car.m4a'
import juniorYearSong from './assets/songs/close-to-you.m4a'
import firstMeetSong from './assets/songs/haunt-you.mp3';
import earlyDatesSong from './assets/songs/superhero.mp3';
import movingInSong from './assets/songs/i-like-me-better.mp3';
import presentDaySong from './assets/songs/thats-so-true.mp3';

import dinner from './assets/pics/jr_year/dinner.jpg';

const Scrapbook = () => {
  const [currentEra, setCurrentEra] = useState('firstMeet');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Music tracks for each era
  const musicTracks = {
    earlyTexts: earlyTextsSong,
    firstMonth: firstMonthSong,
    firstDates: firstDatesSong,
    seniorSpringHS: seniorSpringHSSong,
    prahm: prahmSong,
    graduation: graduationSong,
    summer22: summer22Song,
    summerVentures: summerVenturesSong,
    fallBreak22: fallBreak22Song,
    froshWinter: froshWinterSong,
    froshSpring: froshSpringSong,
    sophYear: sophYearSong,
    juniorYear: juniorYearSong,
  };

  // Scroll-based era detection
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition < windowHeight) {
      setCurrentEra('earlyTexts');
    } else if (scrollPosition < windowHeight * 2) {
      setCurrentEra('firstMonth');
    } else if (scrollPosition < windowHeight * 3) {
      setCurrentEra('firstDates');
    } else if (scrollPosition < windowHeight * 4) {
      setCurrentEra('seniorSpringHS');
    } else if (scrollPosition < windowHeight * 5) {
      setCurrentEra('prahm');
    } else if (scrollPosition < windowHeight * 6) {
      setCurrentEra('graduation');
    } else if (scrollPosition < windowHeight * 7) {
      setCurrentEra('summer22');
    } else if (scrollPosition < windowHeight * 8) {
      setCurrentEra('summerVentures');
    } else if (scrollPosition < windowHeight * 9) {
      setCurrentEra('fallBreak22');
    } else if (scrollPosition < windowHeight * 10) {
      setCurrentEra('froshWinter');
    } else if (scrollPosition < windowHeight * 11) {
      setCurrentEra('froshSpring');
    } else if (scrollPosition < windowHeight * 12) {
      setCurrentEra('sophYear');
    } else {
      setCurrentEra('juniorYear');
    }
  };

  // Toggle music play/pause
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Change track when era changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = musicTracks[currentEra];
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentEra]);

  return (
    <div className="scrap-book relative">
      <audio ref={audioRef} loop />

      <section className="era first-meet h-screen flex flex-col justify-center items-center relative">
      <h2 className="text-4xl font-bold mb-4">Early Texts</h2>
        
      <div className="w-full max-w-10xl px-4">
          {/* Container for all images with proper centering */}
          
          <div className="flex flex-wrap justify-center gap-4">
            {/* First row - 3 photos */}
            <div className="photo-card w-96 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/early_texts/start.jpg')} 
                    alt="Date 1" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">The text to start it all...</p>
                </div>
              </div>
            </div>
            <div className="photo-card w-96 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/early_texts/early_text_0.JPEG')} 
                    alt="Date 1" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Little did she know how much she'd be excited about.</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-96 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/early_texts/early_text_1.JPEG')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Same to you loves</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-96 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/early_texts/early_text_2.JPEG')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">FIVE MINUTES WITH JOSEPH SMITH PLEASE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="mt-8 max-w-xl text-center">
          Once upon a time, Juni and Shelia happened to begin a conversation...
        </p>
        <ChevronDown className="animate-bounce mt-8" />
        
        {currentEra === 'earlyTexts' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>

      <section className="era moving-in h-screen flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold mb-4">First Month</h2>
        <div className="w-full max-w-10xl px-4">
          {/* Container for all images with proper centering */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {/* First row - 3 photos */}
            <div className="photo-card w-96 h-96 relative cursor-pointer">
              <div className="flip-card-inner w-96 h-96 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-96 h-96 backface-hidden">
                  <img 
                    src={require('./assets/pics/first_month/pfp.JPG')} 
                    alt="Date 1" 
                    className="w-96 h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-96 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Still our profile pic to this day :)</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/first_month/tb_22.jpg')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">heh best turnabout I could've ever asked for</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/first_month/zurich_bus.PNG')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">The first time you showed me this song</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-center">
          Shelia and Juni got really close, really fast, and quickly became the bestest of friends, and even more. 
        </p>
        <ChevronDown className="animate-bounce mt-8" />
        
        {currentEra === 'firstMonth' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>

      
      <section className="era early-dates h-screen flex flex-col justify-center items-center relative">
      <h2 className="text-4xl font-bold mb-20">First Dates</h2>
        
      <div className="w-full max-w-10xl px-4">
          {/* Container for all images with proper centering */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {/* First row - 3 photos */}
            <div className="photo-card w-96 h-96 relative cursor-pointer">
              <div className="flip-card-inner w-96 h-96 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-96 h-96 backface-hidden">
                  <img 
                    src={require('./assets/pics/firsts/dunkin_study_date.JPEG')} 
                    alt="Date 1" 
                    className="w-96 h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-96 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Even though you weren't ready for it, I still love this pic. Our first dunkin study date!</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/firsts/first_noods.JPEG')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Our first NOODS date!</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/firsts/first_sleepover.JPEG')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Morning after our first sleepover!</p>
                </div>
              </div>
            </div>
            
            {/* Second row - 2 photos */}
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-1000 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/firsts/first_sleepover_2.JPEG')} 
                    alt="Date 4" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Waking up from our first sleepover!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="mt-8 max-w-xl text-center">
          There were so many firsts to be had for Sheila and Juni together, and even now there is still a lifetime more.
        </p>
        <ChevronDown className="animate-bounce mt-8" />
        
        {currentEra === 'firstDates' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>

      <section className="era present-day h-screen flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold mb-4">Senior Year</h2>
        <div className="w-full max-w-10xl px-4">
          {/* Container for all images with proper centering */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {/* First row - 3 photos */}
            <div className="photo-card w-96 h-96 relative cursor-pointer">
              <div className="flip-card-inner w-96 h-96 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-96 h-96 backface-hidden">
                  <img 
                    src={require('./assets/pics/spring_senior_hs/musical.JPG')} 
                    alt="Date 1" 
                    className="w-96 h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-96 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Best musical EVER</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/spring_senior_hs/last_gso.JPG')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">heh i loved gso together</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/spring_senior_hs/gbn_parking.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">many good memories in this parking lot ;)</p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/spring_senior_hs/cute_text.JPEG')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">cook offs 👀 </p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/spring_senior_hs/may_day.JPG')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">May day with my frat bro 😎 </p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/spring_senior_hs/spring_fest.JPG')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">heh best spring fest EVER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-center">
          When Sheila met Juni, it transformed his last semester into the best semester EVER, even if his brain was a bit...
        </p>
        
        {currentEra === 'seniorSpringHS' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>
      <section className="era prahm h-screen flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold mb-4">PRAHM!!!</h2>
        <div className="w-full max-w-15xl px-4">
          {/* Container for all images with proper centering */}
          <div className="flex flex-wrap justify-center gap-60 mb-20">
            {/* First row - 3 photos */}
            <div className="photo-card w-64 h-96 relative cursor-pointer">
              <div className="flip-card-inner w-64 h-96 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-96 h-96 backface-hidden">
                  <img 
                    src={require('./assets/pics/prahm/prahmposal.jpeg')} 
                    alt="Date 1" 
                    className="w-96 h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-96 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">will you be my date :o </p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/prahm/prahm_sing.JPG')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">4 hours of straight dancing 😎 </p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/prahm/morning_after_prahm.JPEG')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">morning after QUITE the special occassion ;)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-20 max-w-xl text-center">
          Sheila and Juni had the absolute time of their lives at PRAHM, and had a few more firsts then too 👀 
        </p>
        <ChevronDown className="animate-bounce mt-8" />
        
        {currentEra === 'prahm' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>
      <section className="era graduation h-screen flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold mb-4">Graduating Together!</h2>
        <div className="w-full max-w-10xl px-4">
          {/* Container for all images with proper centering */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {/* First row - 3 photos */}
            <div className="photo-card w-96 h-96 relative cursor-pointer">
              <div className="flip-card-inner w-96 h-96 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-96 h-96 backface-hidden">
                  <img 
                    src={require('./assets/pics/graduation/grad_pool.jpg')} 
                    alt="Date 1" 
                    className="w-96 h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-96 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">You beat me at pool :o </p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/graduation/grad_night_shlumped.jpg')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">What a long day... boutta ptfo</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/graduation/grad_night_cute.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Heh now from our POV</p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/graduation/grad_beach.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Miss having this on the back of my phone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-center">
          Sheila and Juni had completed a monumental moment, and luckily, had the privilege of celebrating it together, ready to enter a new chapter together. 
        </p>
        <ChevronDown className="animate-bounce mt-8" />
        
        {currentEra === 'graduation' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>
      <section className="era graduation h-screen flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold mb-4">Summer Before College!</h2>
        <div className="w-full max-w-10xl px-4">
          {/* Container for all images with proper centering */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {/* First row - 3 photos */}
            <div className="photo-card w-96 h-96 relative cursor-pointer">
              <div className="flip-card-inner w-96 h-96 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-96 h-96 backface-hidden">
                  <img 
                    src={require('./assets/pics/summer_22/backyard.jpg')} 
                    alt="Date 1" 
                    className="w-96 h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-96 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Do you remember, we were bouncing a tennis ball around heh</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/summer_22/gina.jpg')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">GUESS WHO'S UNDER MY SHIRT</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/summer_22/before_nu_visit.JPEG')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">NAURRR don't go on your visit, i'll miss you</p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/summer_22/surprise_LT_sum_22.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">HEH you surprised me after work</p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-64 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-64 backface-hidden">
                  <img 
                    src={require('./assets/pics/summer_22/move_in.jpg')} 
                    alt="Date 3" 
                    className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-64 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">POV cried before and after this pic was taken</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-center">
          Before that new chapter began, Shuni (new ship name 😉) had sooooo many ventures, making the most of their time, cherishing every day its fullest.
        </p>
        <ChevronDown className="animate-bounce mt-8" />
        
        {currentEra === 'summer22' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>
      <section className="era graduation h-screen flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold mb-4">Summer Ventures!</h2>
        <div className="w-full max-w-10xl px-4">
          {/* Container for all images with proper centering */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {/* First row - 3 photos */}
            <div className="photo-card w-96 h-96 relative cursor-pointer">
              <div className="flip-card-inner w-96 h-96 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-96 h-96 backface-hidden">
                  <img 
                    src={require('./assets/pics/ventures_summer_22/after_CT.jpg')} 
                    alt="Date 1" 
                    className="w-96 h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-96 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">HEH remember when this was after?</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/ventures_summer_22/lauv.jpg')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">BEST CONCERT EVER</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/ventures_summer_22/par_king.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">I beat you this time 😋 </p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/ventures_summer_22/safari.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">HEH i never expected you to take me here</p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/ventures_summer_22/woodoaks_pond.JPG')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">REMEMBER WHEN WE WERE ON A BANG BINGE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-center">
          Oh you thought that was all? NOPE. Shuni had SOOOOO many more adventures, and they still have so many, and they will continue to in the future, and no venture every gets less fun. Alexa (yes we're switching now), every moment with you still gives me butterflies and it'll never fade. 
        </p>
        <ChevronDown className="animate-bounce mt-8" />
        
        {currentEra === 'summerVentures' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>
      <section className="era graduation h-screen flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold mb-4">Fall Break 2022</h2>
        <div className="w-full max-w-10xl px-4">
          {/* Container for all images with proper centering */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {/* First row - 3 photos */}
            <div className="photo-card w-96 h-96 relative cursor-pointer">
              <div className="flip-card-inner w-96 h-96 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-96 h-96 backface-hidden">
                  <img 
                    src={require('./assets/pics/fall_break_22/louis_thx_22.jpg')} 
                    alt="Date 1" 
                    className="w-96 h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-96 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Such a good surprise gift heh</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/fall_break_22/thx_22.jpg')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">heh so happy to see you after the worst 14 weeks ever</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/fall_break_22/thx_2022.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">THANKSGIVING TOGETHER</p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/fall_break_22/turkey_trot.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">yessirrrr we trottin' 😎 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-center">
          We survived a solid like 14 weeks of long distance 🫡 At this time, we didn't have any idea that you were going to transfer, and yet I had no doubt in our relationship. I would and still will give anything to have you in my life and I am incredibly lucky to still have you heh. I promise to continue to do better and am so excited to grow with you. 
        </p>
        <ChevronDown className="animate-bounce mt-8" />
        
        {currentEra === 'fallBreak22' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>
      <section className="era graduation h-screen flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold mb-4">Winter Break Freshman Year</h2>
        <div className="w-full max-w-10xl px-4">
          {/* Container for all images with proper centering */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {/* First row - 3 photos */}
            <div className="photo-card w-96 h-96 relative cursor-pointer">
              <div className="flip-card-inner w-96 h-96 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-96 h-96 backface-hidden">
                  <img 
                    src={require('./assets/pics/winter_frosh/winter_break_22-23.jpg')} 
                    alt="Date 1" 
                    className="w-96 h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-96 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">SO HAPPY TO SEE YOU FINALLY</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/winter_frosh/winter_22-23_woodfield.jpg')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">the sign speaks for itself ;)</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/winter_frosh/trixie_winter_22-23.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">RIP TRIXIE WHERE DID SHE GO</p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/winter_frosh/puttshack.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">heh a lil puttshack action</p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/winter_frosh/xmas_22.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">CHRISTMAS TOGETHER</p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/winter_frosh/jan_7_anniversary.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">jan 7 anniversary 😘 remember the teenage bday party next to us LOL</p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/winter_frosh/adler.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">remember where this is ? :o </p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/winter_frosh/2_7_23_collage.JPEG')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">technically not winter break but look heh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-center">
          I swear this was the best winter break EVER heh a whole near MONTH with my love after a semeter without her. And oh boy did we make the most out of it, filling with SO many MORE ventures. AND got to spend christmas with you too heh, can you believe that we got each other the same gifts heh we're so in sync.
        </p>
        <ChevronDown className="animate-bounce mt-8" />
        
        {currentEra === 'froshWinter' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>
      <section className="era prahm h-screen flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold mb-4">Spring Freshman Year!</h2>
        <div className="w-full max-w-10xl px-4">
          {/* Container for all images with proper centering */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {/* First row - 3 photos */}
            <div className="photo-card w-96 h-96 relative cursor-pointer">
              <div className="flip-card-inner w-96 h-96 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-96 h-96 backface-hidden">
                  <img 
                    src={require('./assets/pics/spring_frosh/mammoth_visit.jpg')} 
                    alt="Date 1" 
                    className="w-96 h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-96 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">OH SHIT! A WOOLY MAMMOTH!</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/spring_frosh/zucker_visit.jpg')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">jeremy zucker and kid laroi :o </p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/spring_frosh/acai_visit.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">YOUR FIRST JUST BEE ACAI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-center">
        And here we are, your first glimpse into somewhat of a new era he YOU'RE AN ILLINI!! And boy oh boy have you made the most of your time here. I am so incredibly proud of you loves, you've done so well here and have made such a big impact on everyone. And that extends beyond just this school, you are a natural born leader and make such a positive impact on everyone you meet, and I can't wait to continue watching you do so.
        </p>
        <ChevronDown className="animate-bounce mt-8" />
        
        {currentEra === 'froshSpring' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>
      <section className="era prahm h-screen flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold mb-4">Sophomore Year! (i might've ran out of storage...)</h2>
        <div className="w-full max-w-10xl px-4">
          {/* Container for all images with proper centering */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {/* First row - 3 photos */}
            <div className="photo-card w-96 h-96 relative cursor-pointer">
              <div className="flip-card-inner w-96 h-96 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-96 h-96 backface-hidden">
                  <img 
                    src={require('./assets/pics/soph_year/soph_spring_study.jpg')} 
                    alt="Date 1" 
                    className="w-96 h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-96 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">grinding it out and sidney loo who 🫡 </p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/soph_year/july_7_24.jpg')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">28 months already :o</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/soph_year/bibibop_sum_24.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">bibibop into movie heh... (hint: 🚀🌚 )</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-center">
          And here we are, we've finally made it, NEAR INFINITE SLEEPOVERS HEH sophomore year I'M FINALLY GOING TO THE SAME SCHOOL AS MY BABY. and it is GLORIOUS. I love that now I get to wake up next to you, see you in between my breaks, and come home to you after a long day, whether it was a good one or a bad one. I love that I get to cook for you and care for you, it's like a lil glimpse into our future heh and it makes me so excited for the lifetime ahead of us. 
        </p>
        <ChevronDown className="animate-bounce mt-8" />
        
        {currentEra === 'sophYear' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>
      <section className="era prahm h-screen flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold mb-4">Junior Year! (i have storage again :o)</h2>
        <div className="w-full max-w-10xl px-4">
          {/* Container for all images with proper centering */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {/* First row - 3 photos */}
            <div className="photo-card w-96 h-96 relative cursor-pointer">
              <div className="flip-card-inner w-96 h-96 relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-96 h-96 backface-hidden">
                  <img 
                    src={require('./assets/pics/jr_year/dinner.jpg')} 
                    alt="Date 1" 
                    className="w-96 h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-96 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">OUR FIRST STIR FRY OF SECOND SEM</p>
                </div>
              </div>
            </div>
            
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/jr_year/jr_vday.jpg')} 
                    alt="Date 2" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Will you be my valentine??? 🥹🥹🥹</p>
                </div>
              </div>
            </div>
            
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/jr_year/alexa_21_bday.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">Another valentine's surprise ;)</p>
                </div>
              </div>
            </div>
            <div className="photo-card w-64 h-64 relative cursor-pointer">
              <div className="flip-card-inner w-full h-full relative duration-700 transform-gpu transition-transform preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img 
                    src={require('./assets/pics/jr_year/movies.jpg')} 
                    alt="Date 3" 
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="flip-card-back absolute w-64 h-96 backface-hidden bg-pink-100 rounded-lg shadow-md p-4 flex items-center justify-center transform rotate-y-180">
                  <p className="text-center font-medium">CAPTAIN AMERICA ATE DOWN MADE UP FOR THE WEEK BEFORE.... we don't talk about that.....</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-center">
        And here we are now, modern day Shuni, present day Alexa and Sean. THREE YEARS can you believe it hon, we've made it to 1095 days but it feels like three decades, and we haven't even been alive for that long! needless to say, it feels as though i've known you a lifetime and I can't even remember life before you. you're my best friend and you always will be heh, no one knows me or gets me like you do, you make me feel so loved and i hope i can make you feel the same. and i can't wait to keep on growing with you forever and EVERRRR i love you babes to the mooooon and back to the end of the universe 🤍🦋
        </p>
        
        
        {currentEra === 'sophYear' && (
          <button 
            onClick={toggleMusic} 
            className="absolute bottom-8 right-8 z-50 p-3 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5 text-white" /> : 
              <Music className="h-5 w-5 text-white" />
            }
          </button>
        )}
      </section>
    </div>
  );
};

export default Scrapbook;

// import React, { useState, useRef, useEffect, useMemo } from 'react';
// import { ChevronDown, Music, Pause } from 'lucide-react';

// // Import assets
// import firstMeetSong from './assets/haunt-you.mp3';
// import earlyDatesSong from './assets/superhero.mp3';
// import movingInSong from './assets/i-like-me-better.mp3';
// import presentDaySong from './assets/thats-so-true.mp3';

// import firstMeetImage1 from './assets/dinner.jpg';
// import firstMeetImage2 from './assets/dinner.jpg';
// import earlyDatesImage from './assets/movies.jpg';
// import presentDayImage from './assets/movies.jpg';

// const Scrapbook = () => {
//   const [currentEra, setCurrentEra] = useState('firstMeet');
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   const musicTracks = useMemo(() => ({
//     firstMeet: firstMeetSong,
//     earlyDates: earlyDatesSong,
//     movingIn: movingInSong,
//     presentDay: presentDaySong
//   }), []);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;
//     if (scrollPosition < windowHeight) {
//       setCurrentEra('firstMeet');
//     } else if (scrollPosition < windowHeight * 2) {
//       setCurrentEra('earlyDates');
//     } else if (scrollPosition < windowHeight * 3) {
//       setCurrentEra('movingIn');
//     } else {
//       setCurrentEra('presentDay');
//     }
//   };

//   const toggleMusic = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.src = musicTracks[currentEra];
//       if (isPlaying) {
//         audioRef.current.play();
//       }
//     }
//   }, [currentEra, isPlaying, musicTracks]);

//   return (
//     <div className="scrap-book">
//       <audio ref={audioRef} loop />
      
//       <button 
//         onClick={toggleMusic} 
//         className="fixed bottom-4 right-4 z-50 p-2 bg-pink-500 rounded-full"
//       >
//         {isPlaying ? <Pause color="white" /> : <Music color="white" />}
//       </button>

//       <section className="era first-meet h-screen flex flex-col justify-center items-center">
//         <h2 className="text-4xl font-bold mb-4">First Meeting</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <img 
//             src={firstMeetImage1} 
//             alt="First meeting" 
//             className="transform hover:scale-105 transition-transform"
//           />
//           <img 
//             src={firstMeetImage2} 
//             alt="Early moments" 
//             className="transform hover:scale-105 transition-transform"
//           />
//         </div>
//         <p className="mt-4 max-w-xl text-center">
//           Our story began on a beautiful day when our paths first crossed...
//         </p>
//         <ChevronDown className="animate-bounce mt-8" />
//       </section>

//       {/* Additional sections... */}
//     </div>
//   );
// };

// export default Scrapbook;
