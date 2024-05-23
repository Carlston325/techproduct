import Button from "../components/Button";

function Home() {
  return (
    <main className="homepage">
      <div className="infoList">
        <ul>
          <li>Our drones are beginner friendly and easy to fly</li>
          <li>Images from the drone can be transmitted upto 7km</li>
          <li>You can fly our drone upto 500m</li>
        </ul>
      </div>
      <div className="allFeatures">
        <div className="feature">
          <img
            className="featureImg"
            src="./images/apex_drone/H1a73e8cad50b435c9908cb59a065895cX.png"
            alt="IMG here"
          />
          <div className="featureInfo">
            <ul>
              <li>
                Can be controlled by your phone (devices) through our App.
              </li>
              <li>Has a built in 3-axis camera in 4k.</li>
              <li>Ultra HD video quality.</li>
              <li>A GPS tracker.</li>
            </ul>
          </div>
        </div>
        <div className="feature">
          <img
            className="featureImg"
            src="./images/apex_drone/He46a313c6f9043e8ade2cadc23ed88e9o.png"
            alt="IMG here"
          />
          <div className="featureInfo">
            <ul>
              <li>Remote controlled.</li>
              <li>Slick foldable design.</li>
              <li>Manufactured with high quality plastic.</li>
              <li>Flight lenght of 30 - 40 minutes.</li>
            </ul>
          </div>
        </div>
        <div className="feature">
          <img
            className="featureImg"
            src="./images/apex_drone/H8a33f5938cc44e3c8b68a08ac17c03f1g.png"
            alt="IMG here"
          />
          <div className="featureInfo">
            <ul>
              <li>Has an Altitude Hold Mode.</li>
              <li>Comes with a recording capability of 30 minutes.</li>
              <li>Takeoff & Landings with only a single key.</li>
              <li>2 hours charging time.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="info">
        <p>small info</p>
      </div>
      <div className="contactUs">
        <Button btnPath="/contact" btnName="Contact" />
      </div>
    </main>
  );
}

export default Home;
