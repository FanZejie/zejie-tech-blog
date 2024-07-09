import React from "/public/icons/react.svg";
import Vue from "/public/icons/vue.svg";
import Javascript from "/public/icons/javascript.svg";
import Typescript from "/public/icons/typescript.svg";
import NextJS from "/public/icons/nextjs.svg";
import NestJS from "/public/icons/nestjs.svg";
import Java from "/public/icons/java.svg";
import Tailwindcss from "/public/icons/tailwindcss.svg";
import Mongodb from "/public/icons/mongodb.svg";
import Mysql from "/public/icons/mysql.svg";
import Docker from "/public/icons/docker.svg";
import AWS from "/public/icons/aws.svg";
import Prisma from "/public/icons/prisma.svg";
export const BrandIconsMap = {
    React,
    Vue,
    Javascript,
    Typescript,
    NextJS,
    Tailwindcss,
    NestJS,
    Java,
    Mongodb,
    Mysql,
    Docker,
    AWS,
    Prisma
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