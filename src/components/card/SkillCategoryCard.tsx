import React from 'react';

export interface SkillCategoryCardProps {
    title: string;
    icon: React.ReactNode | string;
    skills: string[];
}

export function SkillCategoryCard({title, icon, skills}: SkillCategoryCardProps) {
    return (
        <div className="bg-[#e4f4f2] border-t-4 border-[#0e3d39] p-6 shadow-2xs transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                <div className="flex items-center gap-3 md:w-1/3 shrink-0">
                    {typeof icon === 'string' ? (
                        <img
                            src={icon}
                            alt={`${title} icon`}
                            className="w-5 h-5 object-contain"
                        />
                    ) : (
                        <div className="text-[#d99b26] shrink-0">
                            {icon}
                        </div>
                    )}
                    <h3 className="text-base font-bold text-[#0e3d39]">
                        {title}
                    </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 md:w-2/3">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-white/90 text-[#0e3d39] text-xs font-mono font-medium px-3 py-1.5 rounded-2xs border border-[#0e3d39]/10 shadow-2xs hover:bg-white transition-colors"
                        >
                          {skill}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    );
}