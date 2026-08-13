export function IntegrationTestingIcon({ className = "w-10 h-10" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            {/* Connecting lines */}
            <path
                d="M8 8L16 16M16 8L8 16"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeDasharray="2 2"
            />
            {/* Node Circles */}
            <circle cx="6" cy="6" r="3" fill="#0e3d39" />
            <circle cx="18" cy="6" r="3" fill="#0e3d39" />
            <circle cx="6" cy="18" r="3" fill="#0e3d39" />
            <circle cx="18" cy="18" r="3" fill="#d99b26" />
            {/* Connecting Box */}
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="3"
                stroke="#0e3d39"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}