import {TopNavBar} from "./navigation/TopNavBar.tsx";
import {BottomNavBar} from "./navigation/BottomNavBar.tsx";
import {SkillCategoryCard} from "./card/skill/SkillCategoryCard.tsx";
import {UnitTestingIcon} from "./icons/UnitTestingIcon.tsx";
import {IntegrationTestingIcon} from "./icons/IntegrationTestingIcon.tsx";
import {usePageTimer} from "../service/hooks/usePageTime.ts";

export function SkillsPage() {
    usePageTimer('skills_page');

    const categories = [
        {
            title: 'Languages & Frameworks',
            skills: [
                { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
                { name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
                { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
                { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
                { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
                { name: 'MSSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
                { name: 'Typescript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
            ],
        },
        {
            title: 'Devops & Infrastructure',
            skills: [
                { name: 'Azure Repos', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg' },
                { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
                { name: 'Gitlab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg' },
                { name: 'CI/CD (YAML)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg' },
                { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
                { name: 'Apache2', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg' },
                { name: 'NGINX', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg' },
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg' },
                { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg' },
            ],
        },
        {
            title: 'Testing & Tools',
            skills: [
                { name: 'Unit Testing', icon: <UnitTestingIcon /> },
                { name: 'Integration Testing', icon: <IntegrationTestingIcon /> },
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                { name: 'NuGet', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuget/nuget-original.svg' },
                { name: 'Rider', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rider/rider-original.svg' },
                { name: 'DataGrip', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/datagrip/datagrip-original.svg' },
                { name: 'VsCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
            ],
        },
        {
            title: 'Mobile',
            skills: [
                { name: 'Google Play', icon:'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original' },
                { name: 'App Store', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original' },
                { name: 'iOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg' },
                { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' },
            ],
        },
    ];

    return (
        <div
            className="min-h-screen bg-white text-slate-700 font-sans antialiased selection:bg-[#0e3d39] selection:text-white">

            <TopNavBar/>
            <section className="max-w-6xl mx-auto px-6 py-12 space-y-10">

                <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0e3d39] tracking-tight">
                        Technical Expertise
                    </h2>
                    <div className="w-16 h-1 bg-[#d99b26] mx-auto rounded-full" />
                </div>

                <div className="space-y-8">
                    {categories.map((category, index) => (
                        <SkillCategoryCard
                            key={index}
                            title={category.title}
                            skills={category.skills}
                        />
                    ))}
                </div>

            </section>

            <BottomNavBar/>
        </div>
    );
}