import { useEffect, useRef } from 'react';
import { faro } from '@grafana/faro-web-sdk';

export function usePageTimer(pageName: string) {
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        startTimeRef.current = Date.now();

        faro.api.pushEvent('page_view_start', { page: pageName });

        const sendDurationEvent = () => {
            if (!startTimeRef.current) return;

            const timeSpentInSeconds = Math.round((Date.now() - startTimeRef.current) / 1000);

            if (timeSpentInSeconds > 0) {
                faro.api.pushEvent('page_view_duration', {
                    page: pageName,
                    duration_seconds: timeSpentInSeconds.toString(),
                });
            }
        };
        const handleBeforeUnload = () => sendDurationEvent();
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            sendDurationEvent();
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [pageName]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            const timeSpentInSeconds = Math.round((Date.now() - (startTimeRef?.current ?? Date.now())) / 1000);
            if (timeSpentInSeconds > 0) {
                faro.api.pushEvent('page_view_duration', {
                    page: pageName,
                    duration_seconds: timeSpentInSeconds.toString(),
                });
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [pageName]);
}