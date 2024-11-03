import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider as OriginalRouterProvider,
} from "react-router-dom";
import AppLoading from "@/ui/app-loading";
import { ROUTE } from "@/routing";
// import Home from "@/pages/home";
import About from "@/pages/about";
import ContactUs from "@/pages/contactUs";
import Home from "@/pages/home";
import MainContent from "@/layouts/main-layout/main-content";

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

// Authenticated Router
const authenticatedRouter = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: withSuspense(<MainContent />),
    errorElement: withSuspense(<ErrorPage />),
    children: [
      {
        index: true,
        element: withSuspense(<Home />),
      },
      {
        path: ROUTE.ABOUT,
        element: withSuspense(<About />),
      },
      {
        path: ROUTE.CONTACT,
        element: withSuspense(<ContactUs />),
      },
      //   {
      //     path: ROUTE.HOME_V,
      //     element:
      //       //   <CanGo to={[PERMISSIONS.DASHBOARD]}>
      //       withSuspense(<OverViewPage />),
      //     //   </CanGo>
      //   },

      //   {
      //     path: ROUTE.USERS,
      //     children: [
      //       {
      //         index: true,
      //         element: (
      //           <CanGo to={[PERMISSIONS.USERS]}>
      //             {withSuspense(<UsersPage />)}
      //           </CanGo>
      //         ),
      //       },
      //       {
      //         path: USER_ROUTE.PROFILE,
      //         element: (
      //           <CanGo to={[PERMISSIONS.USERS_VIEW]}>
      //             {withSuspense(<UserProfilePage />)}
      //           </CanGo>
      //         ),
      //       },
      //       {
      //         path: USER_ROUTE.EDIT,
      //         element: (
      //           <CanGo to={[PERMISSIONS.USERS_EDIT]}>
      //             {withSuspense(<EditUserPage />)}
      //           </CanGo>
      //         ),
      //       },
      //       {
      //         path: USER_ROUTE.ADD,
      //         element: (
      //           <CanGo to={[PERMISSIONS.USERS_CREATE]}>
      //             {withSuspense(<AddUserPage />)}
      //           </CanGo>
      //         ),
      //       },
      //       {
      //         path: USER_ROUTE.CURRENT_PROFILE,
      //         element: withSuspense(<CurrentProfilePage />),
      //       },
      //       {
      //         path: USER_ROUTE.CHANGE_PASSWORD,
      //         element: withSuspense(<ChangePasswordForm />),
      //       },
      //     ],
      //   },
      //   {
      //     path: ROUTE.ROLES,
      //     children: [
      //       {
      //         index: true,
      //         element: (
      //           <CanGo to={[PERMISSIONS.ROLES]}>
      //             {withSuspense(<RolesPage />)}
      //           </CanGo>
      //         ),
      //       },
      //       {
      //         path: ROLE_ROUTE.DETAILS,
      //         element: (
      //           <CanGo to={[PERMISSIONS.ROLES_VIEW]}>
      //             {withSuspense(<RoleDetailsPage />)}
      //           </CanGo>
      //         ),
      //       },
      //       {
      //         path: ROLE_ROUTE.EDIT,
      //         element: (
      //           <CanGo to={[PERMISSIONS.ROLES_EDIT]}>
      //             {withSuspense(<EditRolePage />)}
      //           </CanGo>
      //         ),
      //       },
      //       {
      //         path: ROLE_ROUTE.ADD,
      //         element: (
      //           <CanGo to={[PERMISSIONS.ROLES_CREATE]}>
      //             {withSuspense(<AddRolePage />)}
      //           </CanGo>
      //         ),
      //       },
      //     ],
      //   },
    ],
  },

  //   {
  //     path: ROUTE.ERRORS,
  //     element: withSuspense(<ErrorPage />),
  //   },
  //   {
  //     path: ROUTE.page404,
  //     element: withSuspense(<ErrorPage type="404" />),
  //   },
  {
    path: "*",
    element: <Navigate to={"/" + ROUTE.WELCOME} />,
  },
]);

export default function RouterProvider() {
  // const [token, setToken] = useLocalStorage(TOKEN_KEY, "");
  // const [expiredAtDate] = useLocalStorage(TOKEN_EXPIRES_AT_DATE_KEY, "");

  // const isTokenExpired = expiredAtDate
  //   ? isAfter(new Date(), new Date(expiredAtDate))
  //   : false;

  // const isAuthenticated = !!token && !isTokenExpired;

  // useEffect(() => {
  //   if (isTokenExpired && token) {
  //     setToken("");
  //   }
  // }, [setToken, isTokenExpired, token]);

  // return isAuthenticated ? <AuthenticatedRouter /> : <UnauthenticatedRouter />;
  return <AuthenticatedRouter />;
}

function AuthenticatedRouterWrapper() {
  //   useCurrentUser();
  //   useGetAllConfigurationsQuery();

  return <OriginalRouterProvider router={authenticatedRouter} />;
}

function AuthenticatedRouter() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <AuthenticatedRouterWrapper />
    </Suspense>
  );
}
