"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
const ThemeToggle = () => {
    const { toggle, theme } = useContext(ThemeContext);
    return(
        <div>
            <button onClick={toggle} className="bg-white dark:bg-black text-black dark:text-white p-2 rounded-md">Toggle {theme}</button>
        </div>
    )
}

export default ThemeToggle;