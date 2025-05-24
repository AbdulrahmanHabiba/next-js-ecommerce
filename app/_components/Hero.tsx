import React from "react";

const Hero = () => {
  return (
    <section className="   ">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-lg mb-4">
            Elevate Your
            <span className="text-accent bg-clip-text bg-gradient-to-r from-accent to-primary">
              {" "}
              Digital Experience{" "}
            </span>
            Today
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg md:text-2xl text-textmuted font-medium drop-shadow">
            Explore, purchase, and instantly access{" "}
            <span className="text-primary font-bold">top-tier eBooks</span>,{" "}
            <span className="text-secondary font-bold">courses</span>,{" "}
            <span className="text-accent font-bold">software</span>, and more —
            all in one place.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-11/12 rounded-xl border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition-all duration-200 shadow-lg"
              href="#products"
            >
              Get Started
            </a>
            <a
              className="block w-11/12 rounded-xl border border-secondary bg-secondary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-secondary focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition-all duration-200 shadow-lg"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
