import React from "react";
import s from'./Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png"
                width="50px" alt="Logo"/>
        </header>
    )
}

export default Header;