'use client';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const targetDate = new Date('2025-07-17T00:00:00-05:00');
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-12 px-4 max-w-5xl mx-auto">
      <div className="md:w-3/5 text-left flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3B2B22] mb-4 leading-tight">
          NASA SPACE APPS<br />CHALLENGE 2025
        </h1>
        <p className="text-xl text-[#3B2B22] mb-6">July 18–20, 2025</p>
        <button
          className="bg-[#B7D8CC] text-[#3B2B22] font-semibold py-2 px-8 rounded-xl hover:bg-[#A3CFC0] transition duration-300 mb-6"
          onClick={scrollToRegister}
        >
          REGISTER HERE
        </button>
        <div className="flex justify-start mt-2 flex-wrap gap-2">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="p-2 bg-[#E2F1ED] rounded-lg w-20">
              <div className="text-center text-3xl font-bold text-[#3B2B22]">{String(value).padStart(2, '0')}</div>
              <div className="text-center text-xs text-[#3B2B22] tracking-widest">{label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-2/5 flex justify-center mb-8 md:mb-0">
        <img
          src="https://placehold.co/320x260/CCE3D9/FFF?text=Woman+on+beach+watching+rocket+launch"
          alt="Illustration of woman on beach watching rocket"
          className="rounded-[80px] w-[320px] h-[260px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
