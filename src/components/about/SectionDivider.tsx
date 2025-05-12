
import React from 'react';

const SectionDivider = () => {
  return (
    <div className="flex justify-center items-center gap-3 md:gap-6 mt-8 md:mt-12">
      <div className="text-turquoise">
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3,22V12h4v10H3z M9.5,22V4h4v18H9.5z M16,22V8h4v14H16z" />
        </svg>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-coral to-transparent w-12 md:w-20"></div>
      <div className="text-sunny">
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M12,2L12,2c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V3C13,2.45,12.55,2,12,2z M12,20L12,20c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2C13,20.45,12.55,20,12,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" />
        </svg>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-coral to-transparent w-12 md:w-20"></div>
      <div className="text-coral">
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,7H7C6.4,7,6,7.4,6,8s0.4,1,1,1h10c0.6,0,1-0.4,1-1S17.6,7,17,7z M17,12H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S17.6,12,17,12z" />
        </svg>
      </div>
    </div>
  );
};

export default SectionDivider;
