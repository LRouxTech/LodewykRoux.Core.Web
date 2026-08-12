import { useState } from 'react';

export function EmailCopyButton() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('lloderoux@pm.me');
            setCopied(true);

            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCopyEmail}
            className="hover:text-[#0e3d39] transition-colors cursor-pointer"
        >
            {copied ? 'Copied!' : 'Email'}
        </button>
    );
}