import { createFileRoute } from '@tanstack/react-router'
import {ProjectsPage} from "../components/ProjectsPage.tsx";

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
});