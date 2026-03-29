import { RouterProvider } from "react-router";
import { router } from "./routes";
import { StoryblokProvider } from "../contexts/StoryblokContext";

export default function App() {
  return (
    <StoryblokProvider>
      <RouterProvider router={router} />
    </StoryblokProvider>
  );
}
