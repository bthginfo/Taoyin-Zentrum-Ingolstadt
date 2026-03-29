import { Outlet, useLocation } from "react-router";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { motion } from "motion/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { CookieBanner } from "./CookieBanner";

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[--primary]"></div>
    </div>
  );
}

export function Layout() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </motion.main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </div>
    </HelmetProvider>
  );
}