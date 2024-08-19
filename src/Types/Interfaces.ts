import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface ChildComponentProps {
  index?: number;
  Open?: boolean[];
  Max?: boolean[];
  Min?: boolean[];
  canResize?:boolean;
  makeTrue?: (index: number, name: string) => void;
  makeFalse?: (index: number, name: string) => void;
  Title?: string;
  Desctiption?: string;
  icon?: StaticImageData;
}

export interface INavBar {
  name: string;
}

export interface MyComputerProp {
  title : string;
  socials: {
    image: StaticImageData;
    Description: string;
    link : string,
  }[];
}