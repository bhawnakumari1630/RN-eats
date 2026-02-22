"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  useEffect(() => {
    setTheme("light");
  }, []);
  return (
    <>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="border capitalize px-3 py-1 rounded-lg border-gray-400"
      >
        {["system", "light", "dark"].map((opt: string) => (
          <option value={opt} key={opt} className="text-black ">
            {opt}
          </option>
        ))}
      </select>
    </>
  );
};
