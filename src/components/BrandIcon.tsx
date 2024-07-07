import React from "/public/icons/react.svg";
import Javascript from "/public/icons/javascript.svg";
import Typescript from "/public/icons/typescript.svg";
import NextJS from "/public/icons/nextjs.svg";
import Mongodb from "/public/icons/mongodb.svg";
import Docker from "/public/icons/docker.svg";
export const BrandIconsMap = {
    React,
    Javascript,
    Typescript,
    NextJS,
    Mongodb,
    Docker
  };

  export type BrandIconType = keyof typeof BrandIconsMap;


  const BrandIcon = (props: { type: keyof typeof BrandIconsMap; className?: string }) => {
    const { type, className } = props;
  
    const Icon = BrandIconsMap[type];
  
    if (!Icon) {
      return <div>Missing icon for {type}.</div>;
    }
  
    return <Icon className={className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'} fill="currentColor" />;
  };
  
  export default BrandIcon;