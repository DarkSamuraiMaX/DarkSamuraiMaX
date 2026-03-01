import React from "react";

export default function CenteredLogo() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] text-center">
      <img
        src="/logo.png"
        alt="DarkSamurai"
        className="mb-6 rounded-lg shadow-2xl border-4 border-gray-800 hover:scale-105 transition-transform duration-500"
      />
      <h1 className="text-4xl font-bold text-white tracking-widest">
        DarkSamurai
      </h1>
      <p className="text-gray-400 mt-2">
        Game Designer & Writer
      </p>
    </div>
  );
}