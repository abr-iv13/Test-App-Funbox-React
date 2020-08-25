import React from 'react'

import './FooterDisabled.css'

const FooterDisabled = ({ afterTitle }) => {
    return (
        <p className="footer-disabled">Печалька, {afterTitle} закончился.</p>
    );
};

export default FooterDisabled;