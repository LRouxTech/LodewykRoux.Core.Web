import { useState } from 'react';
import {ChevronDown, ChevronUp, ExternalLink} from 'lucide-react';
import {faro} from "../../../main.tsx";

export interface ProjectSubItem {
    label: string;
    description: string;
}

export interface ProjectSection {
    id: string;
    title: string;
    summary?: string;
    items?: ProjectSubItem[];
    technologies?: TechItem[];
}

export interface Project {
    id: string;
    category: string;
    title: string;
    description: string;
    quickTags?: TechItem[];
    sections?: ProjectSection[];
    defaultExpanded?: boolean;
}

export interface TechItem {
    name: string;
    url?: string;
}

const trackClick = (eventName: string, attributes?: Record<string, string>) => {
    faro.api.pushEvent(eventName, attributes);
};

export function ProjectCard({ project }: { project: Project }) {
    const [isExpanded, setIsExpanded] = useState(project.defaultExpanded ?? false);
    const [activeTabId, setActiveTabId] = useState<string>(
        project.sections?.[0]?.id ?? ''
    );

    const activeSection = project.sections?.find((sec) => sec.id === activeTabId) ?? project.sections?.[0];
    const hasSections = Boolean(project.sections && project.sections.length > 0);

    return (
        <article className="border border-[#cbe3db] bg-[#f7fbf9] rounded-sm p-6 sm:p-8 mb-8 text-[#0c3832] transition-all">
            <div
                onClick={() => {
                    if (hasSections) {
                        setIsExpanded(!isExpanded);
                    }
                    trackClick('project_title', {
                        target_page: 'projects',
                        project: project.id,
                    });
                }}
                className={`group flex flex-col md:flex-row md:items-start justify-between gap-4 ${
                    hasSections ? 'cursor-pointer select-none' : ''
                }`}
            >
                <div className="max-w-3xl">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d97706] block mb-2">
                    {project.category}
                  </span>

                    <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3832] group-hover:text-[#185e54] transition-colors">
                            {project.title}
                        </h2>
                    </div>

                    <p className="text-[#3c5e58] text-sm sm:text-base leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="flex items-center gap-3 self-start md:self-auto pt-1">
                    {project.quickTags && project.quickTags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {project.quickTags.map((tag) => {
                                const name = typeof tag === 'string' ? tag : tag.name;
                                const url = typeof tag === 'string' ? undefined : tag.url;
                                if (url) {
                                    return (
                                        <a
                                            key={name}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1.5 bg-[#f0f7f4] hover:bg-[#e1f0e9] text-[#0c3832] hover:text-[#185e54] text-xs font-medium px-2.5 py-1 rounded-xs border border-[#cbe3db] underline decoration-[#d97706]/60 underline-offset-2 hover:decoration-[#d97706] transition-all"
                                        >
                                            <span>{name}</span>
                                            <ExternalLink className="w-3 h-3 text-[#0c3832] shrink-0" />
                                        </a>
                                    );
                                }

                                return (
                                    <span
                                        key={name}
                                        className="border border-[#cbe3db] bg-white text-[#0c3832] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1.5 rounded-xs"
                                    >
                                  {name}
                                </span>
                                );

                            })}
                        </div>
                    )}

                    {hasSections && (
                        <button
                            type="button"
                            aria-label={isExpanded ? 'Collapse project' : 'Expand project'}
                            className="p-1.5 text-[#3c5e58] group-hover:text-[#0c3832] transition-colors rounded-xs hover:bg-[#ebf4f0]"
                            onClick={() =>
                                trackClick('project_section', {
                                    target_page: 'projects',
                                    section: project.id,
                                })
                            }
                        >
                            {isExpanded ? (
                                <ChevronUp className="w-6 h-6 cursor-pointer" />
                            ) : (
                                <ChevronDown className="w-6 h-6 cursor-pointer" />
                            )}
                        </button>
                    )}
                </div>
            </div>

            {isExpanded && hasSections && activeSection && (
                <div className="mt-6 border-t border-[#d8eae4] pt-6 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">

                    <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r border-[#e2eee9] pb-4 md:pb-0 md:pr-4">
                        {project.sections!.map((section) => {
                            const isActive = section.id === activeSection.id;

                            return (
                                <button
                                    key={section.id}
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveTabId(section.id);
                                        trackClick('project_section', {
                                            target_page: 'projects',
                                            project: project.id,
                                            section: section.id,
                                        });
                                    }}
                                    className={`cursor-pointer text-left text-xs sm:text-sm font-medium transition-all px-3 py-2.5 rounded-xs whitespace-nowrap md:whitespace-normal ${
                                        isActive
                                            ? 'text-[#0c3832] font-bold bg-white md:bg-transparent md:border-l-2 md:border-[#d97706] md:rounded-none shadow-xs md:shadow-none'
                                            : 'text-[#5a7d76] hover:text-[#0c3832] hover:bg-[#edf5f1]'
                                    }`}
                                >
                                    {section.title}
                                </button>
                            );
                        })}
                    </nav>

                    <div className="bg-white p-5 sm:p-7 rounded-sm border border-[#e2eee9] shadow-xs">
                        <h3 className="text-xl font-bold text-[#0c3832] mb-3">
                            {activeSection.title}
                        </h3>

                        {activeSection.summary && (
                            <p className="text-[#3c5e58] text-sm leading-relaxed mb-6">
                                {activeSection.summary}
                            </p>
                        )}

                        {activeSection.items && activeSection.items.length > 0 && (
                            <div className="space-y-6">
                                {activeSection.items.map((item, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0c3832] mb-1.5">
                                            {item.label}
                                        </h4>
                                        <p className="text-[#3c5e58] text-xs sm:text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeSection.technologies && activeSection.technologies.length > 0 && (
                            <div className="mt-8 pt-4 border-t border-[#edf5f2]">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d97706] block mb-2">
                                  Core Technologies
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {activeSection.technologies.map((tech) => {
                                        // Supports either a simple string or a TechItem object
                                        const name = typeof tech === 'string' ? tech : tech.name;
                                        const url = typeof tech === 'string' ? undefined : tech.url;

                                        if (url) {
                                            return (
                                                <a
                                                    key={name}
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center gap-1.5 bg-[#f0f7f4] hover:bg-[#e1f0e9] text-[#0c3832] hover:text-[#185e54] text-xs font-medium px-2.5 py-1 rounded-xs border border-[#cbe3db] underline decoration-[#d97706]/60 underline-offset-2 hover:decoration-[#d97706] transition-all"
                                                >
                                                    <span>{name}</span>
                                                    <ExternalLink className="w-3 h-3 text-[#d97706] shrink-0" />
                                                </a>
                                            );
                                        }

                                        return (
                                            <span
                                                key={name}
                                                className="bg-[#f0f7f4] text-[#185e54] text-xs font-medium px-2.5 py-1 rounded-xs border border-[#dcebe5]"
                                            >
                                                {name}
                                              </span>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            )}
        </article>
    );
}