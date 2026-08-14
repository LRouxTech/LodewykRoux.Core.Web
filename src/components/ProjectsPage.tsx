import {TopNavBar} from "./navigation/TopNavBar.tsx";
import {BottomNavBar} from "./navigation/BottomNavBar.tsx";
import {usePageTimer} from "../service/hooks/usePageTime.ts";
import {type Project, ProjectCard} from "./card/project/ProjectCard.tsx";

export function ProjectsPage() {
    usePageTimer('projects_page');

    const projects: Project[] = [{
        id: 'isotainer-customer-system',
        category: 'Full-Stack Application',
        title: 'Isotainer Web and Mobile',
        description:
            'A web application to manage isotainer tank inventory, and schedule washes which are received by the mobile counterpart.',
        quickTags: [{name: 'Lodewyk Roux', url: 'https://isotainer.lodewykroux.co.za'}],
        sections: [
            {
                id: 'introduction',
                title: 'Project Introduction',
                summary: 'Isotainers are tanks that are shipped on freighted, designed specifically to hold liquids like wine or different chemicals.' +
                    'The washing of these tanks are very important to ensure that there are no residue left. Tank managers manage the entry and exit of the physical tanks, and schedule washes for these tanks, which are received by the wash crew via a mobile application.',
                items: [
                    {
                        label: 'Architecture',
                        description:
                            'The application is laid out in a modular monolith pattern. Each of the sections: `Users`, `Tank`, `Wash` are separate in their database schema & database context. They are only joined in the API library, but are able to be separated out into individually scalable systems.',
                    },
                    {
                        label: 'Patterns',
                        description:
                            'The application uses the result pattern to ensure errors are delivered properly.',
                    },
                ]
            },
            {
                id: 'technical-depth',
                title: 'Components',
                summary:
                    'The system needs to be able to handle a relatively low amount of data, being able to book the washes for the tanks and the mobile application receiving the communication of the booked tank.',
                items: [
                    {
                        label: 'Custom Nuget packages',
                        description:
                            'The application uses different custom nuget packages, that are reusable in different components of the application',
                    },
                    {
                        label: 'Api',
                        description: 'To ensure that everything works smoothly, a redis cache is used to ensure quick communication from commonly used wash types. Roles and rights allows users to access certain sections of the application, and logging is done and handled by serilog.',

                    },
                    {
                        label: 'Website',
                        description:
                            'The website handles the users, the tank inventory, the wash types and the booking of wash instructions. ',
                    },
                    {
                        label: 'Mobile',
                        description:
                            'The mobile applications receives signals for the tanks booked for washes.',
                    }
                ],
                technologies: [
                    { name: 'Distributed cache'},
                    { name: 'Serilog', url: 'https://dotnet.microsoft.com/' },
                    { name: 'Seq' },
                ],
            },
        ],
    }, {
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
    }, {
        id: 'tally-mobile',
        category: 'Cross-Platform Mobile',
        title: 'Tally - supplier stock system',
        description:
            'A small mobile application for both Android and IOS to quickly enter the amount of produce pallets of different suppliers that are currently displayed on the market floors.',
        quickTags: [{name: 'ThinkNinjas', url: 'https://www.thinkninjas.co.za/'}],
        sections: [
            {
                id: 'architecture-overview',
                title: 'Architecture Overview',
                summary: 'Flutter application with firebase as a NoSQL database storage, with cloud functions for automatic data harvesting.',
            },
            {
                id: 'technical-depth',
                title: 'Technical Depth',
                summary:
                    'The system utilized Flutter, Firebase, Cloud functions for Firebase, Google BigQuery',
                items: [
                    {
                        label: 'Flutter',
                        description:
                            'A cross platform mobile application built for Android and IOS, delivers the same look and feel on both platforms. ',
                    },
                    {
                        label: 'Firebase',
                        description:
                            'Using Firebase Firestore for Flutter, getting real-time updates for data and syncing data is a breeze',
                    },
                    {
                        label: 'Cloud functions for Firebase',
                        description:
                            'Using a Node.js application, cloud functions automatically syncs data to Google BigQuery, and handles user registration with custom fields and access.',
                    },
                    {
                        label: 'BigQuery',
                        description:
                            'BigQuery is used to handle large datasets. Perfect for long-term data views and visualizations.',
                    },
                ],
                technologies: [
                    { name: 'Flutter' },
                    { name: 'Firebase' },
                    { name: 'Cloud functions for firebase' },
                    { name: 'BigQuery' },
                ],
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