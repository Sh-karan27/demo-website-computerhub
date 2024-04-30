import React from "react";

const Footer = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className=" max-sm:flex-col max-sm:h-[700px]  w-full px-5 py-5 flex justify-between text-blue-500 font-semibold border-t bg-[#292627]">
        <div className="flex items-left justify-center gap-2">
          <div className="bg-black w-10 h-10 rounded-full"></div>
          <h1>Let's Connect</h1>
        </div>
        <div className=" flex flex-col items-left justify-center">
          <span className="w-[200px]">
            Office Address 1: A - 2 Kadipur Ext. New Delhi, Delhi - 110036
          </span>
          <span className="w-[200px]">
            Office Address 2: J. P. Nagar 8th Phase, Bengaluru, Karnataka -
            560076
          </span>

          <div className="flex flex-col items-left justify-center">
            <span>Contact:</span>
            <span>+91 9364-00-4402</span>
            <span>info@computermarkethub.com</span>
          </div>
        </div>
        <div className="flex flex-col items-left justify-between">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
          <span>Linkedin</span>
          <span>YouTube</span>

        </div>
        <div className="flex flex-col items-left justify-between">
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
          <span>Shipping and Delivery</span>
          <span>Cancellation and Refund</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
