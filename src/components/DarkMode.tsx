"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DarkMode() {
  let router = useRouter();

  useEffect(() => {
    let cookie = ("; " + document.cookie).split(`; mode=`).pop()?.split(";")[0];
    if (cookie == "")
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
  }, []);

  const onDarkClick = () => {
    let cookie = ("; " + document.cookie).split(`; mode=`).pop()?.split(";")[0];
    if (cookie == "light") {
      document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
      router.refresh();
    } else {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
      router.refresh();
    }
  };
  return <span onClick={onDarkClick}>🌙</span>;
}
