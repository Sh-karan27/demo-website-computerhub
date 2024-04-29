import React from "react";
import { FeatureArray } from "../constants";

const Features = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center px-5 py-5 gap-10">
<h1 className="text-5xl ">Features</h1>
      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        {FeatureArray.map((item, i) => (
          <div key={i}  className=" flex flex-col items-left justify-center  border px-2 py-2 gap-2">
            
              <h1 className="font-bold text-2xl text-blue-500">{item.title} </h1>
              <p className="text-gray-500">{item.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
