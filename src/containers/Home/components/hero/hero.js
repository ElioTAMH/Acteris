import React from "react";
import { Download, Users, Blocks, ChevronDown } from "lucide-react";
import { UseHero } from "./UseHero";

function Hero() {
  const { HandleDownload, ScrollToContent } = UseHero();

  return (
    <section className="Hero">
      <div className="HeroBackground">
        <div className="HeroOverlay" />
        <div className="HeroParticles" />
      </div>
      <div className="HeroContainer">
        <div className="HeroContent">
          <div className="HeroTitleWrapper">
            <h1 className="HeroTitle">
              Découvrez <span className="Highlight">Acteris</span>
            </h1>
            <p className="HeroSubtitle">
              Une expérience Minecraft révolutionnaire
            </p>
          </div>
          <div className="HeroActions">
            <button className="HeroMainButton" onClick={HandleDownload}>
              <Download size={24} />
              <span>Télécharger le launcher</span>
              <div className="ButtonGlow" />
            </button>
            <div className="HeroStats">
              <div className="StatItem">
                <Users size={24} />
                <span className="StatValue">25+</span>
                <span className="StatLabel">Joueurs</span>
              </div>
              <div className="StatDivider" />
              <div className="StatItem">
                <Blocks size={24} />
                <span className="StatValue">50+</span>
                <span className="StatLabel">Mods</span>
              </div>
            </div>
          </div>
        </div>
        <button className="ScrollDownButton" onClick={ScrollToContent}>
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
