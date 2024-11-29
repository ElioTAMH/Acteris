import { useState } from "react";

export const UseHero = () => {
  const [IsDownloading, SetIsDownloading] = useState(false);

  const HandleDownload = () => {
    SetIsDownloading(true);
    window.location.href = "/launcher.exe";
  };

  const ScrollToContent = () => {
    const ServerSection = document.querySelector(".ServerSection");
    if (ServerSection) {
      const HeaderHeight = document.querySelector(".Header")?.offsetHeight || 0;
      const TopPosition = ServerSection.offsetTop - HeaderHeight + 215;

      window.scrollTo({
        top: TopPosition,
        behavior: "smooth",
      });
    }
  };

  return {
    IsDownloading,
    HandleDownload,
    ScrollToContent,
  };
};
