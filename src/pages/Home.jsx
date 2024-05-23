function Home() {
  return (
    <main className="homepage">
      <div className="infoList">
        <ul>
          <li>list item 1</li>
          <li>list item 2</li>
          <li>list item 3</li>
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
              <li>A built in 3-axis camera in 4k.</li>
              <li>A GPS tracker.</li>
              <li>Ultra HD video quality.</li>
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
              <li>Slick foldable design.</li>
              <li>Manufactured with high quality plastic.</li>
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
              <li>30 minutes of camera life.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="info">small info</div>
      <div className="contactUs">contact us</div>
    </main>
  );
}

export default Home;
