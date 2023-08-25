import "bootstrap/dist/css/bootstrap.css"
import '../../App.css';
import React, { Component } from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

function About() {
  return (
    <>
      <div className="container-fluid">

        <div className="col justify-content-center" id="About_Title_Sect">
          <div id="Eng_Title">
            About
          </div>
        </div>

        <div className="col justify-content-center" >
          <div id="Content_Black" className="row">
            The Shinkendo Swordsmanship Club is an official recreational club at the University of Southern California focusing on the instruction and practice of traditional Japanese swordsmanship techniques and methods used by the samurai in ancient Japan. 
          </div>
        </div>

        <div className="col justify-content-center">
          <div class="About_Picture_2">
            <img id="About_Picture_2_img" src={require("../../image/About_Pic_2.jpg")} alt=""/>
          </div>
        </div>


        <div className="col justify-content-center" >
          <div id="Content_Black" className="row">
            At the USC Shinkendo Swordsmanship Club, we not only focus on learning sword techniques, but also on bojustu (6 foot staff training) and footwork under the guidance of our Sensei, Nicholas Lauridsen.
          </div>
        </div>

        <div className="col justify-content-center" >
          <div id="Content_Black" className="row">
            Shinkendo is not a sport but an enriching martial art that focuses on practical and effective technique, strengthening the body, cultivating the mind and spirit, and overall developing strong and capable individuals. In addition to the technical curriculum, students can expect rigorous instruction in traditional etiquette, philosophy, strategy, and history.
          </div>
        </div>

        <div className="col justify-content-center" id="video">
          <iframe class="responsive-iframe" title="Honbu Introduction Video" src="https://www.youtube.com/embed/uc4an4PVEV8"/>
        </div>
        
        <div className="col justify-content-center" >
          <div id="Content_Black" className="row">
            The Shinkendo Swordsmanship Club is an authorized branch of the International Shinkendo Federation. The founder of Shinkendo, Obata Toshishiro, is one of the most renowned martial artists and swordsmen in the world today.
            Students interested in further Shinkendo training can visit the Honbu Dojo (Headquarters) and take classes under Obata Toshishiro-kaiso's instruction. 
          </div>
        </div>


        <footer>
          <div id="Footer">Copyright © 2022 Shinkendo Swordsmanship Club</div>
        </footer>

      </div>
    </>
  );
}

export default About;
