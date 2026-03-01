import React from "react";

export default function PageBackground({ children }) {
  return (
    <div
      id="parallax-bg"
      className="
        relative min-h-screen
        bg-repeat bg-top  
        flex justify-center items-start
        pt-16
      "
      style={{ backgroundImage: 'url(/src/assets/bg.jpg)' }}
    >
      {children}
    </div>
  );
}
