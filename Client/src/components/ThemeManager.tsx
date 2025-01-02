"use client";

import { useEffect } from "react";

export default function ThemeManager() {
  useEffect(() => {
    const thema = localStorage.getItem("theme");
    thema: document.documentElement.setAttribute("data-theme", thema);
  });

  return null;
}
