import { useState, useEffect } from "react";

export const UseHeader = () => {
  const [IsMenuOpen, SetIsMenuOpen] = useState(false);
  const [IsMobile, SetIsMobile] = useState(false);
  const [ScrollPosition, SetScrollPosition] = useState(0);
  const [IsHeaderVisible, SetIsHeaderVisible] = useState(true);

  const HandleResize = () => {
    const IsMobileView = window.innerWidth <= 768;
    SetIsMobile(IsMobileView);
    if (!IsMobileView && IsMenuOpen) {
      SetIsMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  const HandleScroll = () => {
    const CurrentPosition = window.pageYOffset;
    SetIsHeaderVisible(
      ScrollPosition > CurrentPosition || CurrentPosition < 100
    );
    SetScrollPosition(CurrentPosition);
  };

  const ToggleMenu = () => {
    SetIsMenuOpen(!IsMenuOpen);
    document.body.style.overflow = !IsMenuOpen ? "hidden" : "auto";
  };

  const CloseMenu = () => {
    if (IsMenuOpen) {
      SetIsMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    HandleResize();
    window.addEventListener("resize", HandleResize);
    window.addEventListener("scroll", HandleScroll);
    document.addEventListener("mousedown", CloseMenu);

    return () => {
      window.removeEventListener("resize", HandleResize);
      window.removeEventListener("scroll", HandleScroll);
      document.removeEventListener("mousedown", CloseMenu);
    };
  }, [ScrollPosition]);

  return {
    IsMenuOpen,
    IsMobile,
    IsHeaderVisible,
    ToggleMenu,
    SetIsMenuOpen,
  };
};
