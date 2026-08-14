import React from 'react';

export interface Skill {
    name: string;
    icon: React.ReactNode | string;
}

export function SkillItem({ name, icon }: Skill) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-3 group transition-transform duration-200 hover:-translate-y-1">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                {typeof icon === 'string' ? (
                    <img
                        src={icon}
                        alt={`${name} icon`}
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#0e3d39]">
                        {icon}
                    </div>
                )}
            </div>

            <span className="text-xs font-medium text-slate-700 text-center tracking-tight">
                {name}
            </span>
        </div>
    );
}