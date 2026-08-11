import {createRouter, RouterProvider} from '@tanstack/react-router';
import {routeTree} from './routeTree.gen.ts';
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./QueryClient.tsx";

const router = createRouter({
  routeTree,
});


export default function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider
            router={router}
        />
      </QueryClientProvider>
  );
}