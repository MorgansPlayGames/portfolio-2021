import React from "react";

function Header() {
  return (
    <header className="p-8 md-4">
      <h2 className="text-8xl py-36 hiddenAnimate">Parker Morgan</h2>
      <h3 className="text-4xl py-36 hiddenAnimate animate__fadeInUp animate__animated animate__delay-2s">
        From server to browser,
      </h3>
      <h3 className="text-4xl py-36 hiddenAnimate animate__fadeInUp animate__animated animate__delay-3s">
        Coding is an art to practice.
      </h3>
      <h3 className="text-4xl py-36 hiddenAnimate animate__fadeInUp animate__animated animate__delay-4s">
        Here has been my journey:
      </h3>
    </header>
  );
}

export default Header;
