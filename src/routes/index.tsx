import { createFileRoute } from '@tanstack/react-router';
import { PortfolioPage } from '../components/PortfolioPage.tsx'

export const Route = createFileRoute('/')({
    component: PortfolioPage,
});