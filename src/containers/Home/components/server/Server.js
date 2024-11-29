import React from "react";
import { Download, Users, GitBranch, Puzzle } from "lucide-react";

function ServerSection() {
  return (
    <section className="ServerSection">
      <div className="ServerContainer">
        <div className="ServerContent">
          <h2 className="ServerTitle">
            Une Expérience <span className="Highlight">Unique</span>
          </h2>
          <p className="ServerDescription">
            Découvrez un serveur Minecraft révolutionnaire avec des
            fonctionnalités exclusives et une communauté active.
          </p>

          <div className="ServerFeatures">
            <div className="FeatureCard">
              <Users size={32} />
              <h3>A Lecoute De La Communauter</h3>
              <p>Une Equipe Toujour Present Pour Vous Aider</p>
            </div>

            <div className="FeatureCard">
              <GitBranch size={32} />
              <h3>Amelioration Constante</h3>
              <p>Des Mise A Jour Reguliere Pour Plus De Contenue</p>
            </div>

            <div className="FeatureCard">
              <Puzzle size={32} />
              <h3>Plein De Bon Mods</h3>
              <p>Des Mods Choisi Avec Soin Pour Une Experience Unique</p>
            </div>
          </div>

          <div className="LauncherInfo">
            <div className="LauncherContent">
              <h3>Launcher Personnalisé</h3>
              <p>
                Téléchargez notre launcher pour une installation automatique des
                mods et une connexion simplifiée
              </p>
              <button className="DownloadButton">
                <Download size={24} />
                Télécharger Le Launcher
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServerSection;
