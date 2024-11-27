import React from "react";
import {
  Home,
  Blocks,
  ShoppingCart,
  MessageCircle,
  Users,
  Server,
  Menu,
  X,
} from "lucide-react";
import { UseHeader } from "./UseHeader";

function Header() {
  const { IsMenuOpen, IsMobile, IsHeaderVisible, ToggleMenu } = UseHeader();

  return (
    <header className={`Header ${!IsHeaderVisible ? "Hidden" : ""}`}>
      <div className="HeaderContainer">
        <h1 className="SiteTitle">Acteris</h1>
        <nav className={`MainNav ${IsMenuOpen ? "Open" : ""}`}>
          {IsMobile && (
            <button className="CloseButton" onClick={ToggleMenu}>
              <X size={24} />
            </button>
          )}
          <ul>
            <li>
              <Home size={18} /> <span>Accueil</span>
            </li>
            <li>
              <Blocks size={18} /> <span>Mods</span>
            </li>
          </ul>
        </nav>
        <div className="HeaderActions">
          <div className="ServerStatus">
            <Users size={18} />
            <span>127/500</span>
          </div>
          <button className="ServerIp">
            <Server size={18} />
            <span>play.acteris.com</span>
          </button>
          {IsMobile && (
            <button className="MenuToggle" onClick={ToggleMenu}>
              <Menu size={18} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
