import "bootstrap/dist/css/bootstrap.css"
import '../../App.css';
import React, { Component } from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

function Join() {
  return (
    <>
      <div className="container-fluid">

        <div className="col justify-content-center" id="Join_Title_Sect">
          <div id="Eng_Title">
            Join
          </div>
        </div>

        <div className="col justify-content-center" >
          <div id="Sub_Head_Black" className="row">
            Who Can Join?
          </div >
        </div>

        <div className="col justify-content-center" >
          <div id="Content_Black" className="row">
            The Shinkendo Swordsmanship Club is open to current USC students, faculty, and staff, as well as USC alumni. If you are not a current USC student or alumnus but are interested in learning the art of Shinkendo, please consult the Shinkendo directory for a list of schools in the area.
          </div>
        </div>

        <div className="col justify-content-center" >
          <div id="Sub_Head_Black" className="row">
            How Do I Join?
          </div>
        </div>

        <div className="col justify-content-center" >
          <div id="Content_Black" className="row">
            Prospective students may simply stop by practice at the scheduled place and time and try out a class. If you are interested in joining, you can fill out a membership application form provided by the instructor. We will provide you with a bokutō (wooden sword), but we do encourage you to eventually obtain your own dogi (uniform) and bokutō. 
          </div>
        </div>

        <div className="col justify-content-center">
          <div class="Join_Picture_1">
            <img id="Join_Picture_1_img" src={require("../../image/Join_Pic_2.jpg")} alt=""/>
          </div>
        </div>

        <div className="col justify-content-center" >
          <div id="Sub_Head_Black" className="row">
            Requirements
          </div>
        </div>

        <div className="col justify-content-center" >
          <div id="Content_Black" className="row">
            The semesterly fee for club enrollment is $40, due at the beginning of the semester or at the time of joining. You will need to fill out the appropriate USC liability and medical forms before joining (available at the Lyon Center or through club officers), as well as a membership application.
          </div>
        </div>

        <div className="col justify-content-center">
          <div class="Join_Picture_2">
            <img id="Join_Picture_2_img" src={require("../../image/Join_Pic_1.jpg")} alt=""/>
          </div>
        </div>

        <div className="col justify-content-center" >
          <div id="Sub_Head_Black" className="row">
            Expectations
          </div>
        </div>

        <div className="col justify-content-center" >
          <div id="Content_Black" className="row">
            Joining the Shinkendo Swordsmanship Club means not only enrolling in a club, but becoming a student in a traditional dojo setting. Upon admittance to the club, students are formally considered disciples of swordsmanship, and must behave accordingly and do their utmost to learn the material and train assiduously. This does not mean that class is not enjoyable or fun, but that the art and its students are taken seriously, and the integrity of martial arts practice, with its associated challenges, is always preserved, as it was for those who historically formulated and practiced these arts.

            With the proper mindset and ample effort, the activity of learning a traditional martial art becomes not merely a pastime or exercise, but an immensely rewarding and transformative experience.
            Students are highly encouraged to attend as often as possible, as this accelerates the learning and broadens the range of material that can be learned during the semester.
          </div>
        </div>


        <footer>
          <div id="Footer">Copyright © 2022 Shinkendo Swordsmanship Club</div>
        </footer>

      </div>
    </>
  );
}

export default Join;
