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
        author: {name: 'Lodewyk Roux'},
        description:
            'A web application to manage isotainer tank inventory, and schedule washes which are received by the mobile counterpart.',
        quickTags: [{name: 'Isotainer', url: 'https://isotainer.lodewykroux.co.za'}, {name: 'GitHub', url: 'https://github.com/LRouxTech/Isotainer.Core.Api'}],
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
                    { name: '.NET 10' },
                    { name: 'PostgreSQL' },
                    { name: 'Redis'},
                    { name: 'NuGet'},
                    { name: 'Serilog'},
                    { name: 'Seq' },
                ],
            },
        ],
    }, {
        id: 'vehicle-telemetry-system',
        category: 'Microservices & Distributed Systems',
        title: 'Vehicle Telemetry System',
        author: {name: 'Lodewyk Roux'},
        description:
            'A microservice and kafka event streaming service for capturing vehicle telemetry data.',
        quickTags: [{name: 'Telemetry', url: 'https://vehicletelemetry.lodewykroux.co.za/'}, {name: 'GitHub', url: 'https://github.com/LRouxTech/VehicleData.Core.Telemetry'}],
        sections: [
            {
                id: 'introduction',
                title: 'Project Introduction',
                summary: 'To capture the data from vehicles, a normal api endpoint might get overwhelmed processing the data into a usable form. ' +
                    'A Kafka message queue can be used to store the data in the order that they come in, and for consumers to handle that data when they are able to.',
                items: [
                    {
                        label: 'Architecture',
                        description:
                            'Several applications make up the architecture of the main project. They all work together to produce results that can be shown.' +
                            'The system makes use of sharding as well, using consistent hashing patter to identify the correct shard.',
                    }
                ]
            },
            {
                id: 'technical-depth',
                title: 'Components',
                summary:
                    'The system consists of multiple sections.',
                items: [
                    {
                        label: 'Shards',
                        description:
                            'The database consists of 3 shards that make use of consistent hashing to identify which shard the data should go to. This uses the vehicle ID to identify the correct shard for the data.',
                    }, {
                        label: 'Kafka',
                        description: 'A kafka instance with 1 partition is created, together with zookeeper to keep information about the kafka instance. Kafdrop is used to inspect the items in the message queue.',

                    }, {
                        label: 'API',
                        description:
                            'The API acts as the producer as well as the receiver for the information. It can be load balanced to increase its handling capabilities.' +
                            'The API receives incoming requests from the "vehicles" (data is generated randomly to simulate this), and pushes it to the kafka topic.',
                    }, {
                        label: 'Consumer',
                        description:
                            'The consumer application consumes the kafka queue messages in order, and writes the data to the database. ' +
                            'There are two instances of the consumer set up, to handle the amount of messages in the queue.',
                    }, {
                        label: 'Web',
                        description:
                            'The web is simply used to display the vehicles telemetry data as they enter the system. It auto-refreshes to see the latest telemetry data.',
                    }, {
                        label: 'MCP',
                        description:
                            'A postgres MCP instance is open to connect to via clients, to offer insights about the data via a chat.',
                    },
                ],
                technologies: [
                    { name: 'Sharding' },
                    { name: 'Consistent hashing'},
                    { name: 'Kafka' },
                    { name: 'Docker'},
                    { name: 'PostgreSQL'},
                    { name: 'PostgreSQL MCP' },
                ],
            },
        ],
    }, {
        id: 'lms-erp-integration',
        category: 'Enterprise Architecture',
        title: 'LMS & ERP Integration System',
        author: {name: 'Lodewyk Roux - UFS', url: 'https://www.ufs.ac.za'},
        description:
            'A robust middleware solution bridging modern Learning Management Systems with legacy ERP infrastructure, designed for high throughput and fault tolerance.',
        quickTags: [{name: 'LMS', url: 'https://www.lms.ufs.ac.za'}],
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
                            'Implemented a resilient system utilizing .NET Core BackgroundServices to decouple immediate LMS responses from slow ERP processing, introducing automated retry mechanisms with exponential backoff.',
                    },
                    {
                        label: 'High Throughput API Design',
                        description:
                            'Architected RESTful APIs capable of smoothly handling and validating over 50,000 daily enrollment events during peak registration cycles, utilizing Redis for distributed caching to minimize database hits.',
                    },
                ],
                technologies: [
                    { name: '.NET 9', url: 'https://dotnet.microsoft.com/' },
                    { name: 'MVC' },
                    { name: 'MSSQL' },
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
        author: {name: 'Lodewyk Roux - ThinkNinjas', url: 'https://www.thinkninjas.co.za/'},
        description:
            'A small mobile application for both Android and IOS to quickly enter the amount of produce pallets of different suppliers that are currently displayed on the market floors.',
        quickTags: [{name: 'Tally', url: 'https://play.google.com/store/apps/details?id=za.co.thinkninjas.tally&hl=en_ZA'}],
        sections: [
            {
                id: 'architecture-overview',
                title: 'Architecture Overview',
                summary: 'Flutter application with firebase as a NoSQL database storage, with cloud functions for automatic data harvesting.',
                items: [
                    {
                        label: 'ZZ2',
                        description:
                            'The application was developed for ZZ2 floor runners to quickly enter the amounts of stock for competitors. ',
                    },
                ]
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
    }, {
        id: 'portfolio project',
        category: 'Full-Stack Application',
        title: 'Portfolio (This website!)',
        author: {name: 'Lodewyk Roux'},
        description:
            'This portfolio page is used to showcase my experience, skills and projects online.',
        quickTags: [{name: 'Graph', url: 'https://graphs.lodewykroux.co.za/public-dashboards/c60ab806a0e74cbe8037fd858b190bc1?from=now-7d&to=now&timezone=browser'}, {name: 'GitHub', url: 'https://github.com/LRouxTech/LodewykRoux.Core.Web'}],
        sections: [
            {
                id: 'introduction',
                title: 'Project Introduction',
                summary: 'The idea behind the portfolio page is to have an online CV, in order to give someone a quick way to engage with me or to be able to see my CV and download my 1 page CV whenever I am not able to give it to them easily.',
                items: [
                    {
                        label: 'Architecture',
                        description:
                            'This application uses React, a .Net Minimal Api\'s project with Azure Blob storage for the CV. It also uses Grafana alloy, Loki and Grafana dashboards.',
                    },
                ]
            },
            {
                id: 'technical-depth',
                title: 'Components',
                summary:
                    'The system needs to be able to handle a small amount of users, and needs to make sure that all of the events are captured.',
                items: [
                    {
                        label: 'React',
                        description:
                            'The website uses react router, tailwind CSS and Grafana faro SDK.',
                    },
                    {
                        label: 'Api',
                        description: 'The Api is used to fetch the CV pdf file from Azure Blobs, using the Azure Blobs Microsoft package.',

                    },
                    {
                        label: 'Grafana & Loki',
                        description:
                            'The Grafana faro SDK is implemented in the application on various interactions, and sends the data to the Grafana Alloy endpoint. ' +
                            'The data is then sent to Loki, which acts as a datasource to the Grafana dashboard. ',
                    },
                    {
                        label: 'Hosting',
                        description:
                            'Everything is hosted as docker images and hosted on a Linux private VM. Everything is deployed automatically with Github Actions.',
                    }
                ],
                technologies: [
                    { name: 'Linux'},
                    { name: 'React', url: 'https://github.com/LodewykRoux/LodewykRoux.Core.Web/tree/main/src'},
                    { name: '.NET' },
                    { name: 'Loki' },
                    { name: 'Grafana', url: 'https://graphs.lodewykroux.co.za/public-dashboards/c60ab806a0e74cbe8037fd858b190bc1?from=now-7d&to=now&timezone=browser' },
                    { name: 'Docker'},
                    { name: 'Github Actions'},
                    { name: 'Azure Blobs', url: 'https://github.com/LodewykRoux/LodewykRoux.Core.Api/blob/main/LodewykRoux.Blobs.Api/BlobService.cs'}
                ],
            },
        ],
    }, {
        id: 'exchange-rate-collector',
        category: 'Cloud Application',
        title: 'Exchange Rate collector',
        author: {name: 'Lodewyk Roux'},
        description:
            'A simple application to fetch the exchange rate data for all currencies, and stores it inside a cosmosDB instance.',
        quickTags: [{name: 'GitHub', url: 'https://github.com/LodewykRoux/ExchangeRateCollector'}],
        sections: [
            {
                id: 'introduction',
                title: 'Project Introduction',
                summary: 'In order to save on costs, fetching the exchange rate on demand from an external API, it is easier to query the API within the free usage limits, and to store that data. Then when an exchange rate needs to be calculated, it can be fetched from internal systems, rather than a costly external service.',
                items: [
                    {
                        label: 'Architecture',
                        description:
                            'The application uses the Azure Functions to schedule the triggers, and uses cosmosDB to save the data. It uses an external API with an API key to authenticate. The application uses C#, together with the Microsoft packages for authentication in Azure, The Azure Functions worker settings and the Azure CosmosDB.',
                    }
                ],
                technologies: [
                    { name: 'CosmosDB', url: 'https://github.com/LodewykRoux/ExchangeRateCollector/blob/main/ExchangeRate/ExchangeRateDb.cs'},
                    { name: 'Azure Functions', url: 'https://github.com/LodewykRoux/ExchangeRateCollector/blob/main/ExchangeRate/FetchExchangeRate.cs'}
                ],
            }
        ],
    }, {
        id: 'nuget-auth-package',
        category: 'Developer Tooling & Libraries',
        title: 'NuGet Auth Package',
        author: {name: 'Lodewyk Roux'},
        description:
            'The Nuget auth package is a reusable user management system, that can be easily implemented to quick start a project.',
        quickTags: [{name: 'GitHub', url: 'https://github.com/LRouxTech/LRouxTech.Core.Auth'}],
        sections: [
            {
                id: 'introduction',
                title: 'Project Introduction',
                summary: 'To save on development time, a user package can be used for auth, user creation and permission/role management.',
                items: [
                    {
                        label: 'Architecture',
                        description:
                            'The application uses a modular monolith approach. Users are separated into their own database schema.',
                    }
                ],
                technologies: [
                    { name: 'PostgreSQL'},
                    { name: 'Unit Testing'}
                ],
            }
        ],
    },];

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