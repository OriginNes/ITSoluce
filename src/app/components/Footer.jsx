import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#3335] border-l-transparent border-r-transparent text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="flex mt-4 sm:justify-center sm:mt-0">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
              href="https://www.linkedin.com/in/brandon-foret-0711931b2/" className="hover:underline">Brandon</a>. All Rights Reserved.
          </span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
