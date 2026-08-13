import {TopNavBar} from "./navigation/TopNavBar.tsx";
import {BottomNavBar} from "./navigation/BottomNavBar.tsx";
import {usePageTimer} from "../service/hooks/usePageTime.ts";

export function PortfolioPage() {

    usePageTimer('portfolio_page');

    return (
        <div
            className="min-h-screen bg-white text-slate-700 font-sans antialiased selection:bg-[#0e3d39] selection:text-white">

            <TopNavBar/>

            <main className="max-w-6xl mx-auto px-6 md:px-16 py-12 md:py-16 space-y-20">

                <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    <div className="md:col-span-7 space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0e3d39] tracking-tight">
                                Lodewyk Roux
                            </h1>
                            <h2 className="text-xl md:text-2xl font-medium text-slate-500">
                                Senior Full-Stack Developer
                            </h2>
                        </div>

                        <p className="text-slate-600 leading-relaxed text-sm max-w-xl">
                            Senior Full-Stack Developer with 5+ years of experience specializing in C#, .NET Core, MSSQL, and Linux
                            environments. Proven track record in CI/CD pipeline automation, modular backend architecture, and maintainable
                            API design. Adept at leading project standards, mentoring developers, and maintaining core shared infrastructure,
                            including custom NuGet pipelines and data stores. Seeking Backend, DevOps, or Cloud-focused engineering roles.
                            Planning to complete a Master’s degree in Computer Engineering to deepen expertise in building software.
                        </p>
                    </div>

                    <div className="md:col-span-5 flex justify-center relative">
                        <div className="relative w-full max-w-md">
                            <div className="absolute top-4 -right-4 w-full h-full bg-[#d5eeeb] rounded-xs -z-10"/>

                            <img
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                                alt="Workspace Setup"
                                className="w-full h-auto object-cover rounded-xs shadow-md border border-slate-100"
                            />
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100"/>

                <section id="experience" className="space-y-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0e3d39]">
                        Professional Experience
                    </h2>

                    <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-4 space-y-1">
                                <h3 className="text-base font-bold text-[#0e3d39]">
                                    Senior Software Developer
                                </h3>
                                <p className="text-xs font-semibold text-[#d99b26]">UPS</p>
                                <p className="text-xs text-slate-400">May 2025 - Current</p>
                                <p className="text-xs text-slate-400">Hybrid, Bloemfontein</p>
                            </div>
                            <div className="md:col-span-8">
                                <h4 className="text-base font-medium- text-slate-700 mb-2">
                                    The University of the Free State is a multi-campus public University located in Bloemfontein, Free State. The ICT
                                    department of the University was created to support the growing University needs.
                                </h4>
                                <ul className="list-disc list-outside ml-4 text-xs text-slate-600 space-y-2.5 leading-relaxed">
                                    <li>
                                        Full-Stack & MVC Development: Designed and delivered enterprise ASP.NET MVC applications and REST
                                        APIs supporting multiple university departments.
                                    </li>
                                    <li>
                                        DevOps & Pipeline Automation: Designed automated Azure DevOps CI/CD pipelines that reduced
                                        deployment effort and time. Standardized release management and improved reliability across
                                        environments.
                                    </li>
                                    <li>
                                        Architecture & Standards: Defined engineering standards, reviewed pull requests, mentored 5 developers
                                        and introduced reusable deployment practices adopted across multiple projects.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-4 space-y-1">
                                <h3 className="text-base font-bold text-[#0e3d39]">
                                    Intermediate Software Developer
                                </h3>
                                <p className="text-xs font-semibold text-[#d99b26]">ThinkNinjas</p>
                                <p className="text-xs text-slate-400">March 2021 - April 2025</p>
                                <p className="text-xs text-slate-400">Remote, South Africa</p>
                            </div>
                            <div className="md:col-span-8">
                                <h4 className="text-base font-medium- text-slate-700 mb-2">
                                    ThinkNinjas is a SaaS provider delivering custom software solutions across multi-tenant client environments.
                                </h4>
                                <ul className="list-disc list-outside ml-4 text-xs text-slate-600 space-y-2.5 leading-relaxed">
                                    <li>
                                        API & Database Engineering: Designed and implemented RESTful API endpoints and MySQL database
                                        schemas for new software products, ensuring scalable data models and efficient query execution.
                                    </li>
                                    <li>
                                        System Integrations & Automation: Developed asynchronous background worker services and scheduled
                                        API tasks to integrate with Sage ERP systems, automating stock updates and real-time order calculations
                                    </li>
                                    <li>
                                        Cross-Platform & Fleet Solutions: Engineered companion mobile applications (Flutter) and supporting
                                        backend APls to manage fleet operations, real-time trip routing, and logistical tracking.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100"/>

                <section id="education" className="space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0e3d39]">
                        Education
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-slate-100 bg-white p-6 rounded-xs shadow-xs space-y-4 relative">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-bold text-[#d99b26]">2024</span>
                                <svg className="w-6 h-6 text-slate-300 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v6.5"/>
                                </svg>
                            </div>

                            <div className="flex items-start gap-3.5">
                                <img
                                    src="/unisa-logo.jpg"
                                    alt="UNISA Logo"
                                    className="w-15 h-15 object-contain rounded-xs shrink-0"
                                />
                                <div>
                                    <h3 className="text-base font-bold text-[#0e3d39] leading-snug">
                                        Bachelor of Science Honours
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-0.5">Computing</p>
                                    <p className="text-xs text-slate-400 mt-1">UNISA</p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-slate-100 bg-white p-6 rounded-xs shadow-xs space-y-4 relative">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-bold text-[#d99b26]">2020</span>
                                <svg className="w-6 h-6 text-slate-300 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                                </svg>
                            </div>

                            <div className="flex items-start gap-3.5">
                                <img
                                    src="/nwu-logo.png"
                                    alt="NWU Logo"
                                    className="w-15 h-15 object-contain rounded-xs shrink-0"
                                />
                                <div>
                                    <h3 className="text-base font-bold text-[#0e3d39] leading-snug">
                                        Bachelor of Science
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-0.5">Information Technology</p>
                                    <p className="text-xs text-slate-400 mt-1">NWU</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <BottomNavBar/>
        </div>
    );
}