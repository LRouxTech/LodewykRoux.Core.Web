import {TopNavBar} from "./navigation/TopNavBar.tsx";
import {BottomNavBar} from "./navigation/BottomNavBar.tsx";
import {usePageTimer} from "../service/hooks/usePageTime.ts";
import {type Project, ProjectCard} from "./card/project/ProjectCard.tsx";

export function ProjectsPage() {
    usePageTimer('projects_page');

    const projects: Project[] = [{
        id: 'lms-erp-integration',
        category: 'Enterprise Architecture',
        title: 'LMS & ERP Integration System',
        description:
            'A robust middleware solution bridging modern Learning Management Systems with legacy ERP infrastructure, designed for high throughput and fault tolerance.',
        quickTags: [{name: 'UFS', url: 'https://www.ufs.ac.za'}],
        sections: [
            {
                id: 'architecture-overview',
                title: 'Architecture Overview',
                summary: 'High-level system design focusing on event-driven orchestration.',
            },
            {
                id: 'technical-depth',
                title: 'Technical Depth',
                summary:
                    'The core challenge was translating real-time, high-volume event streams from the LMS into structured, reliable transactions for the rigid Oracle PeopleSoft environment without overloading the legacy systems during peak enrollment periods.',
                items: [
                    {
                        label: 'Oracle PeopleSoft Integration',
                        description:
                            'Engineered a robust, fault-tolerant translation layer capable of transforming modern JSON payloads into complex XML structures required by PeopleSoft Component Interfaces, ensuring atomic transaction integrity.',
                    },
                    {
                        label: 'Asynchronous Background Workers',
                        description:
                            'Implemented a resilient queueing system utilizing RabbitMQ and hosted .NET Core BackgroundServices to decouple immediate LMS responses from slow ERP processing, introducing automated retry mechanisms with exponential backoff.',
                    },
                    {
                        label: 'High Throughput API Design',
                        description:
                            'Architected RESTful APIs capable of smoothly handling and validating over 50,000 daily enrollment events during peak registration cycles, utilizing Redis for distributed caching to minimize database hits.',
                    },
                ],
                technologies: [
                    { name: '.NET 6', url: 'https://dotnet.microsoft.com/' },
                    { name: '.NET 6' },
                ],
            },
            {
                id: 'impact-metrics',
                title: 'Impact & Metrics',
                summary: 'Reduced processing latency by 85% and achieved 99.99% system uptime.',
            },
        ],
    }];

    return (
        <div
            className="min-h-screen bg-white text-slate-700 font-sans antialiased selection:bg-[#0e3d39] selection:text-white">

            <TopNavBar/>
            <main className="min-h-screen bg-[#edf6f3] px-6 py-12 md:px-16 lg:px-24">
                <div className="max-w-5xl mx-auto">
                    <header className="mb-10 sm:mb-14">
                        <h1 className="text-3xl sm:text-4xl font-bold text-[#0c3832] tracking-tight mb-3">
                            Featured Projects
                        </h1>
                        <p className="text-[#4a6d66] text-sm sm:text-base max-w-2xl leading-relaxed">
                            Selected case studies demonstrating architectural impact, technical depth, and the orchestration of complex enterprise systems.
                        </p>
                    </header>
                    {projects.map((project) => {
                        return (
                            <ProjectCard key={project.id} project={project}/>
                        )
                    })}
                </div>
            </main>
            <BottomNavBar/>
        </div>
    );
}