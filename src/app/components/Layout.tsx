import { Outlet } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
}