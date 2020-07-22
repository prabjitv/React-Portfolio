import React from "react";
import { Header, Project, Footer } from "../components";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Project />
        <Footer />

      </header>
    </div>
  );
}

export default Home;
