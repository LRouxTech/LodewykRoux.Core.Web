import { useState } from 'react';
import {fileService} from "../../service/http/files/fileService.ts";
import {faro} from "../../main.tsx";

export function DownloadCvButton() {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        try {
            setIsDownloading(true);
            faro.api.pushEvent('click_download_cv', {
                section: 'hero_navigation',
            });
            await fileService.downloadCv();
        } catch (error) {
            console.error('Failed to download CV:', error);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className="cursor-pointer inline-flex items-center gap-2 bg-[#0e3d39] text-white px-4 py-2 text-xs font-semibold rounded-xs shadow-sm hover:bg-[#0a2e2b] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
            <span className="hidden sm:inline" >{isDownloading ? 'Downloading...' : 'Download CV'}</span>

            <svg
                className={`w-3.5 h-3.5 ${isDownloading ? 'animate-bounce' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
            </svg>
        </button>
    );
}