import React from 'react';
import { Footer } from 'flowbite-react';
import { company, websiteURL } from '../constants';
import { useNavigate } from 'react-router-dom';
import NdhuLogo from '../res/img/LOGO_NDHU.png';


const Footers = () => {
  const storedTheme = sessionStorage.getItem('darkMode');

  const navigate = useNavigate();
  function redirectAbout() {
    navigate("/about");
  }
  function redirectContact() {
    navigate("/contact");
  }
  function redirectTerms() {
    navigate("/terms");
  }

  function redirectPrivacy() {
    navigate("/privacy");
  }

  return (
    <Footer container className="shadow-none border-t border-black dark:border-white rounded-none dark:bg-black">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href={websiteURL}
            src={storedTheme === "true" ? NdhuLogo : NdhuLogo}
          />
          <Footer.LinkGroup>
            <p className="text-black font-bold mx-4 dark:text-white cursor-pointer" onClick={redirectAbout}>
              About
            </p>
            <p className="text-black  font-bold  mx-4 dark:text-white cursor-pointer" onClick={redirectContact}>
              Contact
            </p>
          </Footer.LinkGroup>
        </div>
        <Footer.Copyright
          className="text-black dark:text-white font-bold"
          href={websiteURL}
          by={company}
          year={2025}
        />
      </div>
    </Footer>
  );
};

export default Footers;
