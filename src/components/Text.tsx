import React, { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string | any;
  className?: string;
  as?:
    | "h1"
    | "h2"
    | "h2about"
    | "h2episode"
    | "h3"
    | "h3Link"
    | "p"
    | "pAbout"
    | "pEpisode";
}

export default function Text({
  children,
  as,
  className = "",
  ...props
}: TextProps) {
  if (as === "h1") {
    return (
      <h1
        {...props}
        className={`text-black font-bold tracking-tight text-2xl md:text-6xl ${className}`}
      >
        {children}
      </h1>
    );
  }

  if (as === "h3Link") {
    return (
      <h3
        {...props}
        className={`text-lg text-gray-500 hover:text-emerald-400 font-bold ${className}`}
      >
        {children}
      </h3>
    );
  }
  if (as === "p") {
    return (
      <p
        {...props}
        className={`mb-6 text-xl sm:text-base text-gray-500 ${className}`}
      >
        {children}
      </p>
    );
  }

  return (
    <p {...props} className={className}>
      {children}
    </p>
  );
}
