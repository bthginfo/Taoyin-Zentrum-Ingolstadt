import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import TaoYin from "./pages/TaoYin";
import QiGong from "./pages/QiGong";
import ChiNeiTsang from "./pages/ChiNeiTsang";
import Psychotherapie from "./pages/Psychotherapie";
import Therapien from "./pages/Therapien";
import Behandlung from "./pages/Behandlung";
import About from "./pages/About";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";

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