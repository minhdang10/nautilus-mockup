import React from "react";
import "../App.css";

function Channels() {
    return (
        <div class= "container">
            <div class="head-container">
                <h2 className="main-header">Channels</h2>
                <h3 className="sub-header">TUNE IN TO <em>NAUTILUS'</em> DEEP DIVE PORTALS</h3>
            </div>
            
            <div class="card-deck" id="card-deck">
                {/*Row 1*/}
                <div class="row">
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p><strong class='blue'>BIOLOGY</strong><strong>+BEYOND</strong></p>
                            <img class="card-images" src={require("../assets/bio_and_beyond.jpeg")}className="card-img-top frag" alt=""></img>
                            <h2 class="sub-title">Making Sense of the Genome at Last</h2>
                            <h4 class="author">by Adam Piere</h4>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <strong>Women's Science & Engineering</strong>
                            <img class="card-images" src={require("../assets/wise_sci_and_engineering.png")}className="card-img-top frag" alt=""></img>
                            <h2 class="sub-title">Your Brain Is On the Brink of Chaos</h2>
                            <h4 class="author">by Kelly Clancy</h4>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p><strong>QUANTA</strong> ABSTRACTIONS</p>
                            <img class="card-images" src={require("../assets/abstractions.jpeg")}className="card-img-top frag" alt=""></img>
                            <h2 class="sub-title">Mathematicians Calculate How Randomness Creeps In</h2>
                            <h4 class="author">by Marcus Woo</h4>
                        </div>
                    </div>
                </div>
                
                {/*Row 2*/}
                <div class="row">
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <strong class='red'>EARTH</strong>
                            <img class="card-images" src={require("../assets/earth.jpeg")}className="card-img-top frag" alt=""></img>
                            <h2 class="sub-title">The Deep Time of Walden Pond</h2>
                            <h4 class="author">by Cart Stager</h4>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p><strong class='turquoise'>THINK</strong><strong> LIKE A SCIENTIST</strong></p>
                            <img class="card-images" src={require("../assets/tlas.jpeg")}className="card-img-top frag" alt=""></img>
                            <h2 class="sub-title">The Best Burger Place Is a Lab</h2>
                            <h4 class="author">by Thomas King</h4>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p><strong><i>cosmos</i></strong></p>
                            <img class="card-images" src={require("../assets/cosmos.jpeg")}className="card-img-top frag" alt=""></img>
                            <h2 class="sub-title">How Much Should Expectation Drive Science?</h2>
                            <h4 class="author">by Claudia Geib</h4>
                        </div>
                    </div>
                </div>
                
                {/*Row 3*/}
                <div class="row">
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <strong>POETRY IN SCIENCE</strong>
                            <img class="card-images" src={require("../assets/poetry.jpeg")}className="card-img-top frag" alt=""></img>
                            <h2 class="sub-title">On Observation and Imagination</h2>
                            <h4 class="author">by Gillian Osborne</h4>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <strong>Aging</strong>
                            <img class="card-images" src={require("../assets/aging.png")}className="card-img-top frag" alt=""></img>
                            <h2 class="sub-title">Yes, Life in the Fast Lane Kills You</h2>
                            <h4 class="author">by Phillip Ball</h4>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p><strong class='red'>SCIENCE</strong><strong class='greenish'> PHILANTHROPY ALLIANCE</strong></p>
                            <img class="card-images" src={require("../assets/alliance.png")}className="card-img-top frag" alt=""></img>
                            <h2 class="sub-title">Taking to the Stars</h2>
                            <h4 class="author">by Science Philanthropy Alliance</h4>
                        </div>
                    </div>
                </div>

                {/*Row 4*/}
                <div class="row">
                    <div class="col-lg-4" id="last-container">
                        <div id="card" class="card">
                            <p class='greenish'>MP<strong>Neuro</strong></p>
                            <img class="card-images" src={require("../assets/maxplanck.jpeg")}className="card-img-top frag" alt=""></img>
                            <h2 class="sub-title">Understanding the Brain with the Help of Artificial Intelligence</h2>
                            <h4 class="author">by Max Planck Institute of Neurobiology</h4>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Channels