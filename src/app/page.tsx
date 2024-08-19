'use client'
import StartMenu from "@/Components/components/TaskBar/StartMenu";
import ParentComponent from "@/Components/ParentComponent";
import Image from "next/image";
import { RecoilRoot } from 'recoil';

export default function Home() {
  return (
    <RecoilRoot>
      <div className="overflow-hidden">
        <ParentComponent />
      </div>
    </RecoilRoot>
  );
}
