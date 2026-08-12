import axiosInstance from "../../../api/axiosInstance.ts";

const API_BASE_URL = '/api/files';

export const fileService = {
    downloadCv: async (): Promise<void> => {
        const response = await axiosInstance.get(`${API_BASE_URL}/cv`, {
            responseType: 'blob',
        });

        const blob = new Blob([response.data], { type: 'application/pdf' });

        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;

        link.setAttribute('download', 'LodewykRouxCV.pdf');

        document.body.appendChild(link);
        link.click();

        link.remove();
        window.URL.revokeObjectURL(downloadUrl);
    },
};