export function PortfolioPage() {
    return (
        <div className="min-h-screen bg-white text-slate-700 font-sans antialiased selection:bg-[#0e3d39] selection:text-white">

            <header className="bg-[#e4f6f4] px-6 py-4 md:px-16">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-10 h-10 border-2 border-[#0e3d39]/20 bg-amber-50/60 flex items-center justify-[#0e3d39] justify-center rounded-sm shadow-sm">
                            <span className="font-bold text-[#0e3d39] text-sm tracking-tight">LR</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6 md:space-x-8 text-sm font-medium">
                        <a href="#skills" className="text-[#0e3d39] hover:opacity-80 transition-opacity">
                            Skills
                        </a>
                        <a href="#projects" className="text-[#0e3d39] hover:opacity-80 transition-opacity">
                            Projects
                        </a>
                        <a href="#education" className="text-[#0e3d39] hover:opacity-80 transition-opacity">
                            Education
                        </a>
                        <a href="#experience" className="text-[#0e3d39] hover:opacity-80 transition-opacity">
                            Experience
                        </a>

                        <a
                            href="#cv"
                            className="inline-flex items-center gap-2 bg-[#0e3d39] text-white px-4 py-2 text-xs font-semibold rounded-xs shadow-sm hover:bg-[#0a2e2b] transition-colors"
                        >
                            <span>Download CV</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 md:px-16 py-12 md:py-16 space-y-20">

                <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    <div className="md:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#d99b26] uppercase">
              Mid-Century Modern Professional
            </span>

                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0e3d39] tracking-tight">
                                Lodewyk Roux
                            </h1>
                            <h2 className="text-xl md:text-2xl font-medium text-slate-500">
                                Senior Full-Stack Developer
                            </h2>
                        </div>

                        <p className="text-slate-600 leading-relaxed text-sm max-w-xl">
                            Architecting robust solutions with a blend of functional minimalism and technical precision. Over 5 years of experience specializing in C#, .NET ecosystems, and streamlined DevOps practices to build scalable, timeless enterprise applications.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                href="#experience"
                                className="bg-[#0e3d39] text-white px-5 py-2.5 text-xs font-medium rounded-xs shadow-sm hover:bg-[#0a2e2b] transition-colors"
                            >
                                Explore Experience
                            </a>
                            <a
                                href="#projects"
                                className="border border-slate-300 bg-white text-[#0e3d39] px-5 py-2.5 text-xs font-medium rounded-xs shadow-sm hover:bg-slate-50 transition-colors"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-5 flex justify-center relative">
                        <div className="relative w-full max-w-md">
                            <div className="absolute top-4 -right-4 w-full h-full bg-[#d5eeeb] rounded-xs -z-10" />

                            <img
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                                alt="Workspace Setup"
                                className="w-full h-auto object-cover rounded-xs shadow-md border border-slate-100"
                            />
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100" />

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
                                <p className="text-xs text-slate-400">May 2023 - Current</p>
                            </div>
                            <div className="md:col-span-8">
                                <ul className="list-disc list-outside ml-4 text-xs text-slate-600 space-y-2.5 leading-relaxed">
                                    <li>
                                        Spearheaded the development and maintenance of scalable enterprise applications using C# and .NET core frameworks.
                                    </li>
                                    <li>
                                        Architected automated CI/CD pipelines via Azure DevOps, reducing deployment times and improving code reliability across teams.
                                    </li>
                                    <li>
                                        Mentored junior developers and established code quality standards, promoting a culture of technical excellence.
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
                                <p className="text-xs text-slate-400">March 2021 - April 2023</p>
                            </div>
                            <div className="md:col-span-8">
                                <ul className="list-disc list-outside ml-4 text-xs text-slate-600 space-y-2.5 leading-relaxed">
                                    <li>
                                        Engineered internal NuGet package pipelines to streamline shared infrastructure and standardize core utilities.
                                    </li>
                                    <li>
                                        Developed complex ERP integration systems, facilitating seamless data flow between disparate enterprise modules.
                                    </li>
                                    <li>
                                        Built cross-platform mobile applications using Flutter, delivering consistent user experiences on both iOS and Android.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100" />

                <section id="education" className="space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0e3d39]">
                        Education
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-slate-100 bg-white p-6 rounded-xs shadow-xs space-y-3 relative">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-bold text-[#d99b26]">2024</span>
                                <svg className="w-6 h-6 text-slate-300 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v6.5" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#0e3d39]">
                                    Bachelor of Science Honours
                                </h3>
                                <p className="text-xs text-slate-500 mt-1">Computing</p>
                                <p className="text-xs text-slate-400 mt-1">UNISA</p>
                            </div>
                        </div>

                        <div className="border border-slate-100 bg-white p-6 rounded-xs shadow-xs space-y-3 relative">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-bold text-[#d99b26]">2020</span>
                                <svg className="w-6 h-6 text-slate-300 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#0e3d39]">
                                    Bachelor of Science
                                </h3>
                                <p className="text-xs text-slate-500 mt-1">Information Technology</p>
                                <p className="text-xs text-slate-400 mt-1">NWU</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-[#e4f6f4] py-6 px-6 md:px-16 mt-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border border-[#0e3d39]/30 bg-amber-50/60 flex items-center justify-center rounded-2xs">
                            <span className="font-bold text-[#0e3d39] text-[9px]">LR</span>
                        </div>
                        <span>
              © 2024 Lodewyk Roux. Crafted with precision and mid-century soul.
            </span>
                    </div>

                    <div className="flex items-center space-x-6 text-slate-600 font-medium">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#0e3d39] transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#0e3d39] transition-colors">
                            GitHub
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#0e3d39] transition-colors">
                            Twitter
                        </a>
                        <a href="mailto:contact@example.com" className="hover:text-[#0e3d39] transition-colors">
                            Email
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}