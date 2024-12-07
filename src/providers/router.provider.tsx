import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider as OriginalRouterProvider,
} from "react-router-dom";
import AppLoading from "@/ui/app-loading";
import { ROUTE } from "@/routing";
import About from "@/pages/about";
import ContactUs from "@/pages/contactUs";
import Home from "@/pages/home";
import MainContent from "@/layouts/main-layout/main-content";
import Dashboard from "@/pages/admin";
import AuthLayout from "@/layouts/auth-layout/auth-layout-component";
import CardsPage from "@/pages/cards";
import AddPage from "@/pages/cards/add";
import RolePage from "@/pages/role";
import UserPage from "@/pages/user";
import AddUser from "@/pages/user/add";
import HistoryCard from "@/pages/histories/card";
import HistoryUser from "./../pages/histories/user";
import WelcomePage from "@/pages/welcome";
import AddRolePage from "@/pages/role/add";

const ErrorPage = lazy(() => import("../error-page"));

// Loading Indicator
function LoadingIndicator() {
  return (
    <div className="w-full h-full">
      <AppLoading />
    </div>
  );
}

// Helper function to wrap elements with Suspense
function withSuspense(element: React.ReactElement) {
  return <Suspense fallback={<LoadingIndicator />}>{element}</Suspense>;
}

// Unauthenticated Router
const unauthenticatedRouter = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: withSuspense(<MainContent />),
    errorElement: withSuspense(<ErrorPage />),
    children: [
      { index: true, element: withSuspense(<Home />) },
      { path: ROUTE.ABOUT, element: withSuspense(<About />) },
      { path: ROUTE.CONTACT, element: withSuspense(<ContactUs />) },
      {
        path: ROUTE.OVERVIEW,
        element: withSuspense(<Dashboard />),
      },
    ],
  },
  { path: ROUTE.ERRORS, element: withSuspense(<ErrorPage />) },
  { path: ROUTE.page404, element: withSuspense(<ErrorPage type="404" />) },
  { path: "*", element: <Navigate to={"/" + ROUTE.WELCOME} /> },
]);

// Authenticated Router
const authenticatedRouter = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: withSuspense(<AuthLayout />),
    errorElement: withSuspense(<ErrorPage />),
    children: [
      { index: true, element: withSuspense(<WelcomePage />) },
      {
        path: ROUTE.CARDS,
        element: withSuspense(<CardsPage />),
      },
      {
        path: ROUTE.OVERVIEW,
        element: withSuspense(<Dashboard />),
      },
      {
        path: ROUTE.ADDCARD,
        element: withSuspense(<AddPage />),
      },

      {
        path: ROUTE.ROLE,
        element: withSuspense(<RolePage />),
      },

      {
        path: ROUTE.ADDROLE,
        element: withSuspense(<AddRolePage />),
      },

      {
        path: ROUTE.USERS,
        element: withSuspense(<UserPage />),
      },

      {
        path: ROUTE.ADDUSER,
        element: withSuspense(<AddUser />),
      },

      {
        path: ROUTE.HISTORYCARD,
        element: withSuspense(<HistoryCard />),
      },
      {
        path: ROUTE.HISTORYUSER,
        element: withSuspense(<HistoryUser />),
      },
    ],
  },
  { path: ROUTE.ERRORS, element: withSuspense(<ErrorPage />) },
  { path: ROUTE.page404, element: withSuspense(<ErrorPage type="404" />) },
  { path: "*", element: <Navigate to={"/" + ROUTE.WELCOME} /> },
]);

// Main RouterProvider Component
export default function RouterProvider() {
  const isAuthenticated = true; // Set the authentication condition here

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <OriginalRouterProvider
        router={isAuthenticated ? authenticatedRouter : unauthenticatedRouter}
      />
    </Suspense>
  );
}
