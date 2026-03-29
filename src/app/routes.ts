import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { Layout } from "./components/Layout";

// Eagerly load Home (above the fold)
import Home from "./pages/Home";

// Lazy load all other pages for code splitting
const TaoYin = lazy(() => import("./pages/TaoYin"));
const QiGong = lazy(() => import("./pages/QiGong"));
const ChiNeiTsang = lazy(() => import("./pages/ChiNeiTsang"));
const Psychotherapie = lazy(() => import("./pages/Psychotherapie"));
const Therapien = lazy(() => import("./pages/Therapien"));
const Behandlung = lazy(() => import("./pages/Behandlung"));
const About = lazy(() => import("./pages/About"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Impressum = lazy(() => import("./pages/Impressum"));
const NotFound = lazy(() => import("./pages/NotFound"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));

const pageRoutes = [
  { index: true, Component: Home },
  { path: "taoyin", Component: TaoYin },
  { path: "qi-gong", Component: QiGong },
  { path: "chi-nei-tsang", Component: ChiNeiTsang },
  { path: "psychotherapie", Component: Psychotherapie },
  { path: "psychotherapie/ziele", Component: Behandlung },
  { path: "therapien", Component: Therapien },
  { path: "about", Component: About },
  { path: "kontakt", Component: Kontakt },
  { path: "impressum", Component: Impressum },
  { path: "news/:slug", Component: NewsDetail },
];

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      ...pageRoutes,
      // Language-prefixed routes: /de/*, /en/*, /es/*
      {
        path: ":lang",
        children: pageRoutes,
      },
      { path: "*", Component: NotFound },
    ],
  },
]);