import React from 'react';
import Image from 'next/image';
import SharedDocsIcon from '@/../public/Shared_Folder_Close.png';
import UserDocsIcon from '@/../public/MyDocuments.png';
import LocalDiskIcon from '@/../public/LocalDisk.png';
import CDDriveIcon from '@/../public/CDDrive.png';
import GithubIcon from '@/../public/Github.png';
import DogeIcon from '@/../public/Do_Not_Open.png';

// Reusable Gradient Line Component
const GradientLine: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`w-[200px] h-[2px] bg-gradient-to-r from-[#CBE3FF] via-[#232323] to-[#CBE3FF] ${className}`} />
);

const MyComputer: React.FC = () => {
  return (
    <div className="h-full p-4 bg-gray-100 border border-gray-400 shadow-lg overflow-y-auto">
      {/* Files Stored on This Computer */}
      <section className="mb-4">
        <h2 className="text-sm font-bold p-1">Files Stored on This Computer</h2>
        <GradientLine className="mb-2" />
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <Image src={SharedDocsIcon} alt="Shared Documents" width={40} height={40} />
            <span className="text-xs mt-1 text-center">Shared Documents</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src={UserDocsIcon} alt="User's Documents" width={40} height={40} />
            <span className="text-xs mt-1 text-center">User's Documents</span>
          </div>
        </div>
      </section>

      {/* Hard Disk Drives */}
      <section className="mb-4">
        <h2 className="text-sm font-bold p-1">Hard Disk Drives</h2>
        <GradientLine className="mb-2" />
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <Image src={LocalDiskIcon} alt="Local Disk (C:)" width={40} height={40} />
            <span className="text-xs mt-1 text-center">Local Disk (C:)</span>
          </div>
        </div>
      </section>

      {/* Devices with Removable Storage */}
      <section className="mb-4">
        <h2 className="text-sm font-bold p-1">Devices with Removable Storage</h2>
        <GradientLine className="mb-2" />
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <Image src={CDDriveIcon} alt="CD Drive (D:)" width={40} height={40} />
            <span className="text-xs mt-1 text-center">CD Drive (D:)</span>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section>
        <h2 className="text-sm font-bold p-1">About Me :)</h2>
        <GradientLine className="mb-2" />
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <Image src={GithubIcon} alt="Github" width={40} height={40} />
            <a href="https://github.com" className="text-xs mt-1 text-blue-600">Github</a>
          </div>
          <div className="flex flex-col items-center">
            <Image src={DogeIcon} alt="My Website" width={40} height={40} />
            <a href="https://yourwebsite.com" className="text-xs mt-1 text-blue-600">My Website</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyComputer;
