import "./nav_bar.css"
import "bootstrap/dist/css/bootstrap.css"
import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";

function NavBar(){
    return<nav className="NavBar">
        <div className="d-flex flex-row" id="Nav_Row">
            <div className="p-2">
                <a href = "../Home">
                    <div class="navLinkText">Home</div>
                </a>
            </div>
            <div className="p-2">
                <a href = "../About">
                    <div class="navLinkText">About</div>
                </a>
            </div>
            <div className="p-2">
                <a href = "../Join">
                    <div class="navLinkText">Join</div>
                </a>
            </div>
            <div id="Honbu_Link" className="ml-auto p-2">
                <a href = "https://shinkendo.com">
                    <img id="shinkendo_logo" src = {require("../image/isf.png")} alt="shinkendo logo"/>
                </a>
            </div>
	    </div>
    </nav>
}

export default NavBar;