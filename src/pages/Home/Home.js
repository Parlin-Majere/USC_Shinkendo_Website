import "bootstrap/dist/css/bootstrap.css"
import '../../App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

function Home() {
  return (
    <>
      <div className="container-fluid">

        <div className="col justify-content-center" id="Title_Sect">
          <div  id="Eng_Title">
            Shinkendo Swordsmanship Club
          </div>
          <div id="Jpn_Title">
            眞劍道
          </div>
        </div>

        <div className="col justify-content-center" id="Intro_Title">
          About
        </div>

        <div className="col justify-content-center" id="Intro_Content">
          <div id="Intro" className="row">
            <div id="Content_Black">The Shinkendo Swordsmanship Club is an official recreational club at the University of Southern California focusing on the instruction and practice of traditional Japanese swordsmanship techniques and methods used by the samurai in ancient Japan. </div>
            <a href="https://shinkendo.com">
              <div class="LearnMore">Learn More</div>
            </a>
          </div>
        </div>

        <div className="col justify-content-center" id="video">
          <iframe class="responsive-iframe" title="Honbu Introduction Video" src="https://www.youtube.com/embed/Y3d4QjgkYCM"/>
        </div>

        <div className="col" id="Location_Sect">
          <div className="row">
            <div className="col" id="Practice_Info">
              <div id="Practice_Title">Practice Times and Location</div>
              <div id="Content_White">Club practices are every Monday & Wednesday 8-10 pm in PED South (PED210)</div>
            </div>
            <div className="col" id="Map_Body">
              <img id="Map" src={require("../../image/map.jpg")} alt="Practice Map"/>
            </div>
          </div>
        </div>

        <div className="col" id="Join_Info_Sect">
          <div className="row">
            <div className="col" id="Join_Picture">
              <img id="Join_Group_Pic" src={require("../../image/Join_Pic.JPG")} alt=""/>
            </div>
            <div className="col" id="Join_Info_Content">
              <div id="Join_Title">How To Join</div>
              <div id="Content_Black">You can join by coming to any of our practices. Students may join the club at any point during the semester, although we encourage early enrollment.
              <a href="../Join/Join.js">
                <div class="LearnMore">Learn More</div>
              </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col" id="Gallery_Title">
          Gallery
        </div>
        <div className="col" id="Gallery">
          <div id="Gallery_Grid">
            <figure class="gallery__item gallery__item--1">
            </figure>
            <figure class="gallery__item gallery__item--2">
            </figure>
            <figure class="gallery__item gallery__item--3">
            </figure>
            <figure class="gallery__item gallery__item--4">
            </figure>
            <figure class="gallery__item gallery__item--5">
            </figure>
          </div>

        </div>

        <div className="col" id="QA_Sect">
          <div id="QA_Content">
            <div id="QA_Title">Frequently Asked Questions</div>
            <div class="Question">I have no martial arts experience. Can I still join?</div>
            <div class="Answer">Of course! Many of our members have no prior martial arts experience. 
                                Our Sensei and senpai will guide you through your Shinkendo Experience</div>
            <div class="Question">What is the difference between Kendo and Shinkendo?</div>
            <div class="Answer">Kendo is a competitive sport in which members fight on a point system. 
                                Shinkendo is not a sport but martial art that focuses on practical and 
                                effective techniques and forms based on that of traditional Japanese 
                                samurai. Unlike Kendo, Shinkendo has minimal physical contact and does 
                                not require protective equipment. Rather than participating in 
                                competitions, Shinkendo emphasizes self-improvement and training.</div>
            <div class="Question">Do I need to attend every practice?</div>
            <div class="Answer">While we would love for you to attend as much as you can, we recognize that
                                 practice times may not always align with your schedule. If you have 
                                 schedule conflicts, you can attend once a week, come lat, or leave 
                                 early as needed.</div>
            <div class="Question">What do I need to wear?</div>
            <div class="Answer">You may come in any comfortable clothes. We do ask that you eventually 
                                get a dogi and bokutō if you join, but they are not required for new 
                                students. Keep in mind that we pratice on the gym's hardwood floor, 
                                and we do not wear shoes other than tabi while training.</div>
            <div class="Question"></div>
            <div class="Answer"></div>

          </div>
        </div>


        <div className="col justify-content-center" id="Contact_Sect">
          <div id="Contact_Title">Contact Us</div>
          <div id="Officers"></div>
          <div id="Content_Black">If you have any other questions, feel free to email us at shinken@usc.edu or reach out to our officers:</div>
          
          <div className="row" id="Officer_Contacts">
            <div className="col" id="Timothy_Info">
              <div class="Officer_Name">Timothy Su</div>
              <div class="Officer_Pos">Treasurer</div>
              <div class="Officer_Email">tjsu@usc.edu</div>
            </div>
            <div className="col" id="Louis_Info">
              <div class="Officer_Name">Jiaqi "Louis" Lu</div>
              <div class="Officer_Pos">President</div>
              <div class="Officer_Email">jiaqilu@usc.edu</div>
            </div>
            <div className="col" id="Hanchen_Info">
              <div class="Officer_Name">Hanchen Xie</div>
              <div class="Officer_Pos" id="Hanchen_Pos">Stand in</div>
              <div class="Officer_Email">hanchenx@usc.edu</div>
            </div>

          </div>
        
        </div>

        <footer>
          <div id="Footer">Copyright © 2022 Shinkendo Swordsmanship Club</div>
        </footer>

      </div>
    </>
  );
}

export default Home;
