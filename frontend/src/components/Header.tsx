import React from "react";

const Header: React.FC = () => {
    return (
        <header>
            <h2>Hello from header</h2>
            <div className="header-container">
                <h5>select</h5>
                <h5>statistics</h5>
                <h5>about</h5>
            </div>
        </header>
    )
}

export default Header;