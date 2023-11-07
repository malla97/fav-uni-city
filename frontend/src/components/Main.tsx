import React from "react";
import Universities from "./Universities";
import Data from "./Data";

const Main: React.FC = () => {
    /**
     * Mainille ei varmaan kannata laittaa kokoa 1vh vaan weatherille ja datalle jne?
     */
    return (
        <main>
            <Universities />
            <Data />
        </main>
    )
}

export default Main;