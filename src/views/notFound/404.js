import React from "react";
import './404.scss';

const NotFound = () => {
    
    return (
        <>
           <div class="scene">
            <div class="planet">
                <div class="crater"></div>
                <div class="crater"></div>
                <div class="crater"></div>
                <div class="crater"></div>
                <div class="crater"></div>
                <div class="rover">
                <div class="body"></div>
                <div class="wheels"></div>
                <div class="trace"></div>
                </div>
                <div class="flag">
                404
                </div>
            </div>
            <div class="message">
                <p>
                There is no life, try to find <a href="https://codepen.io/ddly/">something else</a>
                </p>
            </div>
            </div>
        </>
    )
}

export default NotFound;