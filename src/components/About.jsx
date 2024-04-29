import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full h-full flex flex-col items-center justify-center gap-5">
      <div className=" w-3/4 flex flex-col items-left justify-center gap-5">
        <h1 className="text-5xl max-sm:text-3xl">About Us</h1>
        <p className="text-xl text-gray-500">
          At the heart of our enterprise is a legacy of over three decades in
          the tech industry, founded by a visionary who's mastered everything
          from hardware sales and repairs to advanced software solutions.
          Alongside him, a senior data scientist brings cutting-edge AI and data
          analytics expertise from leading US startups. Together, we offer a
          comprehensive suite of services designed to empower your digital
          journey. Our commitment to innovation, excellence, and customer
          support ensures we're the trusted partner you need to navigate the
          complexities of today's tech landscape.
        </p>
      </div>
        <button className="btn">Learn More</button>
    </section>
  );
};

export default About;
