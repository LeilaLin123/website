import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import SectionUpdatesHero from "./HeroSection";
import ArticlesSection from "./ArticlesSection";

import "./Updates.scss";

class Updates extends React.Component {
  render() {
    return (
      <div className="page-updates">
        <Header />
        <SectionUpdatesHero />
        <ArticlesSection />
        <Footer />
      </div>
    );
  }
}

export default Updates;