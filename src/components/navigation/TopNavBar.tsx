import {DownloadCvButton} from "../buttons/DownloadCVButton.tsx";
import {Link} from "@tanstack/react-router";
import {faro} from "../../main.tsx";
import {Code2, FolderGit2, User} from 'lucide-react';

export function TopNavBar() {

    const trackClick = (eventName: string, attributes?: Record<string, string>) => {
        faro.api.pushEvent(eventName, attributes);
    };

    return (
        <header className="bg-[#e4f6f4] px-6 py-4 md:px-16">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-10 h-10 border-2 border-[#0e3d39]/20 bg-amber-50/60 flex items-center justify-center rounded-sm shadow-sm overflow-hidden">
                        <img
                            src="/logo.png"
                            alt="LR"
                            className="w-full h-full object-cover rounded-xs"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-6 md:space-x-8 text-sm font-medium">
                    <Link
                        to="/"
                        onClick={() =>
                            trackClick('click_navigation_link', {
                                target_page: 'portfolio',
                                section: 'header_navigation',
                                })
                            }
                        className="flex items-center text-[#0e3d39] hover:opacity-80 transition-opacity p-1.5 sm:p-0"
                    >
                        <User className="w-5 h-5 sm:hidden" />
                        <span className="hidden sm:inline">Portfolio</span>
                    </Link>

                    <Link
                        to="/skills"
                        onClick={() =>
                            trackClick('click_navigation_link', {
                                target_page: 'skills',
                                section: 'header_navigation',
                            })
                        }
                        className="flex items-center text-[#0e3d39] hover:opacity-80 transition-opacity p-1.5 sm:p-0"
                    >
                        <Code2 className="w-5 h-5 sm:hidden" />
                        <span className="hidden sm:inline">Skills</span>
                    </Link>

                    <Link
                        to="/projects"
                        onClick={() =>
                            trackClick('click_navigation_link', {
                                target_page: 'projects',
                                section: 'header_navigation',
                            })
                        }
                        className="flex items-center text-[#0e3d39] hover:opacity-80 transition-opacity p-1.5 sm:p-0"
                    >
                        <FolderGit2  className="w-5 h-5 sm:hidden" />
                        <span className="hidden sm:inline">Projects</span>
                    </Link>

                    <DownloadCvButton/>
                </div>
            </div>
        </header>
    );
}