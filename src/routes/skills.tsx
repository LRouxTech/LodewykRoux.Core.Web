import { createFileRoute } from '@tanstack/react-router';
import {SkillsPage} from "../components/SkillsPage.tsx";

export const Route = createFileRoute('/skills')({
    component: SkillsPage,
});