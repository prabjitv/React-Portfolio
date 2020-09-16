import React from "react";
import { Header, Project, Footer, Hero, Carousel } from "../components";

function Home(props) {
  return (
    <div className="App">
      <div className="viewheight">
      <div className="home">
        <header className="App-header">
          <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
          {/* <Carousel /> */}
        </header>
        </div>
      </div>
    </div>
  );
}

export default Home;
