import {type Skill, SkillItem } from './SkillItem';

export interface SkillCategoryCardProps {
    title: string;
    skills: Skill[];
}

export function SkillCategoryCard({ title, skills }: SkillCategoryCardProps) {
    return (
        <div className="bg-[#e4f4f2] border-t-4 border-[#0e3d39] p-6 md:p-8 shadow-2xs space-y-6">

            <div className="text-center space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-[#0e3d39]">
                    {title}
                </h3>
                <div className="w-10 h-0.5 bg-[#d99b26] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 items-center justify-items-center">
                {skills.map((skill, index) => (
                    <SkillItem key={index} name={skill.name} icon={skill.icon} />
                ))}
            </div>

        </div>
    );
}