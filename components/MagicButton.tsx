import React from "react";

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
    buttonClass,
    width = "w-18", 
    height = "h-12", 
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
    buttonClass?: string;
    width?: string; 
    height?: string;  
}) => {
    return (
        <button
            className={`relative inline-flex ${height} ${width} md:mt-10 overflow-hidden rounded-xl p-[1px] focus:outline-none ${buttonClass}`}
            onClick={handleClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ED1566_0%,#5927a0_50%,#ED1566_100%)]" />
            <span
                className={`inline-flex h-full ${width} font-manrope cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    );
};

export default MagicButton;
