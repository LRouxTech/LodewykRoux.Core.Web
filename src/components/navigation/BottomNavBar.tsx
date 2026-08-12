import {EmailCopyButton} from "../buttons/EmailCopyButton.tsx";

export function BottomNavBar() {
    return (
        <footer className="bg-[#e4f6f4] py-6 px-6 md:px-16 mt-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border border-[#0e3d39]/30 bg-amber-50/60 flex items-center justify-center rounded-2xs">
                        <img
                            src="/logo.png"
                            alt="LR"
                            className="w-full h-full object-cover rounded-xs"
                        />
                    </div>
                    <span>
                      © 2026 Lodewyk Roux.
                    </span>
                </div>

                <div className="flex items-center space-x-6 text-slate-600 font-medium">
                    <a href="https://www.linkedin.com/in/lodewyk-roux/" target="_blank" rel="noreferrer" className="hover:text-[#0e3d39] transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://github.com/LodewykRoux" target="_blank" rel="noreferrer" className="hover:text-[#0e3d39] transition-colors">
                        GitHub
                    </a>
                    <EmailCopyButton/>
                </div>
            </div>
        </footer>
    );
}