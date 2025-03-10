import React from 'react';
import { websiteURL } from '../constants';
import NdhuLogo from '../res/img/LOGO_NDHU.png';

const LogoComponent = ({ isDarkMode }) => {

    function redirectHome() {
        window.location.href = websiteURL;
    }

    return <img alt='logo' src={isDarkMode === "true" ? NdhuLogo : NdhuLogo} className="mr-3 h-9" onClick={redirectHome} />;
};

export default LogoComponent;
