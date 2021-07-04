import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home"));
const BidderProfile = lazy(() => import("../Pages/BidderProfile"));

const routes = [
  {
    path: "/dashboard",
    component: Home,
  },
  {
    path: "/dashboard/:username/:userId",
    component: BidderProfile,
  },
];

export default routes;
