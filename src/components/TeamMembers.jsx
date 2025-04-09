import React from 'react';
import { FounderIcon,DirectorIcon } from 'src/app/helpers/svg';

const TEAM_MEMBERS = [
  {
    name: 'Akshat Gandhi',
    role: 'Co-Founder',
    icon: <FounderIcon/>,
  },
  {
    name: 'Trusha Gandhi',
    role: 'Founder',
    icon: <FounderIcon/>,
  },
  {
    name: 'Saurabh Nayak',
    role: 'Director (Operations)',
    icon: <DirectorIcon/>,
  }
];

export const TeamMembers = () => {
  return (
    <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {TEAM_MEMBERS.map((member, index) => (
          <div 
            key={index} 
            className="w-full bg-[#FEEDC6] rounded-lg p-6 relative shadow-sm border border-[#FDC446]"
          >
            <div className="absolute -top-8 p-4 left-1/2 -translate-x-1/2 bg-white rounded-lg border border-[#FFD059] shadow-sm">
              {member.icon}
            </div>
            <div className="mt-6">
              <div className="py-2 px-4 mb-1">
                <p className="text-center text-lg font-semibold">{member.name}</p>
              </div>
              <p className="text-center text-gray-600 italic">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};