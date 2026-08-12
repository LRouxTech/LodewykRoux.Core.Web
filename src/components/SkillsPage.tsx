import {TopNavBar} from "./navigation/TopNavBar.tsx";
import {BottomNavBar} from "./navigation/BottomNavBar.tsx";
import {SkillCategoryCard} from "./card/SkillCategoryCard.tsx";

export function SkillsPage() {

    const skillCategories = [
        {
            id: 'languages',
            title: 'Languages & Frameworks',
            // You can pass an image URL string (e.g. "/icons/code.png") OR an inline SVG icon:
            icon: (
                <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
            ),
            skills: ['C#', '.NET Core', 'ASP.NET Core MVC', 'Dart', 'Flutter', 'SQL', 'MSSQL', 'MySQL', 'TypeScript', 'React'],
        },
        {
            id: 'devops',
            title: 'DevOps & Infrastructure',
            icon: (
                <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3 15a4 4 0 004 4h9a5 5 0 001-9.9 5 5 0 00-9.2-2.1A5.002 5.002 0 003 15z"/>
                </svg>
            ),
            skills: ['Azure Repos', 'GitHub', 'GitLab', 'CI/CD (YAML)', 'Linux', 'Apache2', 'Docker', 'Cloudflare'],
        },
        {
            id: 'testing',
            title: 'Testing & Tools',
            icon: (
                <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
            ),
            skills: ['Unit Testing', 'Integration Testing', 'Git', 'NuGet'],
        },
        {
            id: 'mobile-web',
            title: 'Mobile & Web',
            icon: (
                <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
            ),
            skills: ['Flutter (iOS/Android)', 'Google Play', 'App Store'],
        },
    ];

    return (
        <div
            className="min-h-screen bg-white text-slate-700 font-sans antialiased selection:bg-[#0e3d39] selection:text-white">

            <TopNavBar/>
                <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold text-[#0e3d39] tracking-tight">
                            Technical Expertise
                        </h2>
                        <div className="w-16 h-1 bg-[#d99b26] rounded-full"/>
                    </div>

                    <div className="space-y-4">
                        {skillCategories.map((category) => (
                            <SkillCategoryCard
                                key={category.id}
                                title={category.title}
                                icon={category.icon}
                                skills={category.skills}
                            />
                        ))}
                    </div>
                </section>

            <BottomNavBar/>
        </div>
    );
}