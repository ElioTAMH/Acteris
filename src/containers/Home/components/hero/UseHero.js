import { useState } from "react";

export const UseHero = () => {
  const [IsDownloading, SetIsDownloading] = useState(false);

  const HandleDownload = () => {
    SetIsDownloading(true);
    window.location.href = "/launcher.exe";
  };

  return {
    IsDownloading,
    HandleDownload,
  };
};
