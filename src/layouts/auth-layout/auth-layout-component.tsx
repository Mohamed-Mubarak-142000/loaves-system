import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import LanguageSwitcher from "@/ui/langauge-switcher";
import { useEffect, useRef, useState } from "react";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { cn } from "@/lib/utils";
import { ImperativePanelHandle } from "react-resizable-panels";
import TopNav from "./top-nav";
import SidebarToggle from "./sidebar-toggle";
import UserNav from "./user-nav";
// import SideNav from "./side-nav";
// import {
//   ArrowLeftRight,
//   LayoutDashboardIcon,
//   Paintbrush,
//   Shield,
//   Tv2Icon,
//   Users,
//   File,
//   Settings,
//   DotIcon,
//   ChevronRightSquare,
//   Building,
//   Image,
//   X,
//   ShieldCheck,
//   LayoutDashboard,
//   Calendar,
// } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
// import { useTranslation } from "react-i18next";
import Logo from "@/ui/Logo";
import { Outlet, useNavigate } from "react-router-dom";
// import { ROUTE, createPath } from "@/routing";
import { ModeToggle } from "@/ui/mode-toggle";
// import { PERMISSIONS } from "@/domains/identity-management/roles/permissions";
// import AppLoading from "@/ui/app-loading";
// import { useCurrentUser } from "@/domains/identity-management/auth/api/current-user";
import { useWindowSize } from "usehooks-ts";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
// import { FEATURES } from "@/domains/feature-management/features";

const layouts = [
  {
    defaultSize: 18,
    maxSize: 18,
    minSize: 18,
    collapsedSize: 5,
    isCollapsed: true,
  },
  {
    defaultSize: 82,
  },
];
/*
   "sidebar": {
    "home_section_label": "HOME",
    "nav_overview": "Overview",
    "app_section_label": "APP",
    "nav_devices": "Devices",
    "nav_transactions": "Transactions",
    "nav_layouts": "Layouts",
    "nav_projects": "Projects",
    "nav_configurations": "Configurations",
    "nav_locations": "Locations",
    "nav_locations_cities": "Cities",
    "nav_locations_areas": "Areas",
    "nav_locations_buildings": "Buildings",
    "nav_locations_building_categories": "Building Categories",
    "users_managment_section_label": "USERS MANAGEMENT",
    "nav_users": "Users",
    "nav_roles": "Roles"
  },
*/

const AuthLayout = () => {
  const [screenHeight, setScreenHeight] = useState(window?.innerHeight);
  //   const { isCurrentUserLoading } = useCurrentUser();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isAppInitiallyRendered, setIsAppInitiallyRendered] = useState(false);
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const sidebarRef = useRef<ImperativePanelHandle>(null);

  //   const { t } = useTranslation("common");

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const handleBodyClick = useCallback(
  //   (event: MouseEvent) => {
  //     const sidebarId = sidebarRef.current?.getId();
  //     const clickedElement = event.target as HTMLElement;
  //     const sidebarElement = document.querySelector("[data-panel-id='" + sidebarId + "']");

  //     const isInsideSidebar =
  //       sidebarElement && (sidebarElement === clickedElement || sidebarElement.contains(clickedElement));

  //     if (!isInsideSidebar  ) {
  //       sidebarRef.current?.resize(layouts[0].defaultSize)
  //     } else {
  //      sidebarRef.current?.collapse()
  //     }
  //   },
  //   [ sidebarRef, ]
  // );

  // useEffect(() => {
  //   document.body.addEventListener("click", handleBodyClick);

  //   return () => {
  //     document.body.removeEventListener("click", handleBodyClick);
  //   };
  // }, [handleBodyClick]);

  useEffect(() => {
    if (width < 1400) {
      if (sidebarRef.current && !isCollapsed && !isAppInitiallyRendered) {
        sidebarRef.current.collapse();
        setIsCollapsed(true);
        setIsAppInitiallyRendered(true);
      }
    }
  }, [isCollapsed, sidebarRef, isAppInitiallyRendered, width]);

  // floating button
  // const [isCardOpen, setIsCardOpen] = useState(false);

  // const toggleCard = () => {
  //   setIsCardOpen((prev) => !prev);
  // };
  const closeSidebar = () => {
    sidebarRef.current?.collapse();
  };

  useEffect(() => {
    if (width < 1400) {
      sidebarRef.current?.collapse();
      setIsCollapsed(true);
    } else {
      sidebarRef.current?.resize(layouts[0].defaultSize);
      setIsCollapsed(false);
    }
  }, [width]);

  //   if (isCurrentUserLoading) {
  //     return <AppLoading />;
  //   }

  const redirectTo = localStorage.getItem("redirectTo");
  if (redirectTo) {
    localStorage.removeItem("redirectTo");
    navigate(redirectTo);
  }

  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          className={cn(
            "h-full max-h-screen min-h-screen overflow-hidden max-w-screen min-w-screen"
          )}
        >
          {/* Sidebar */}
          <ResizablePanel
            ref={sidebarRef}
            defaultSize={layouts[0].defaultSize}
            maxSize={layouts[0].maxSize}
            minSize={layouts[0].minSize}
            collapsedSize={layouts[0].collapsedSize}
            collapsible={true}
            onCollapse={() => {
              setIsCollapsed(true);
            }}
            onExpand={() => {
              setIsCollapsed(false);
            }}
            className={cn(
              isCollapsed &&
                "min-w-[50px]  hidden transition-all duration-300 ease-in-out",
              "bg-basic-white  border-e border-neutral-4",

              width < 1400 ? "absolute z-[80] h-full w-[300px]" : null
              // isCollapsed && "hidden"
              //   `bg-basic-white h-auto z-[99] w-[300px] lg:w-1/6 flex     ${width < 1024 && " absolute  h-full  left-[-60%]"} shadow-card-sheet `,
              //  width < 1024 && isCollapsed ?
              //     " transition-all   w-[211px] duration-300 ease-in-out bg-basic-white px-2  border-e border-neutral-4": "w-[300px] left-[0%]",
              //     width > 1024 && "left-[0%]"

              // isOpen ? "left-0": "absolute  z-[99] left-[-60%]"
            )}
            // className={cn(
            //   isCollapsed &&
            //     "min-w-[50px] transition-all duration-300 ease-in-out",
            //   "bg-basic-white px-2  border-e border-neutral-4"
            // )}
          >
            <div className="flex flex-col w-full gap-4 p-2 py-4 ">
              <div className="flex justify-between p-2">
                <Logo withText={!isCollapsed} />
                {width > 1400 && (
                  <button onClick={closeSidebar}>
                    <X />
                  </button>
                )}
              </div>

              <ScrollArea
                className={cn("px-4")}
                style={{ height: `${screenHeight - 100}px` }}
              >
                {/* <SideNav
                  links={[
                    {
                      permissions: [PERMISSIONS.DASHBOARD],
                      title: t("sidebar.nav_overview"),
                      label: "",
                      icon: LayoutDashboardIcon,
                      to: createPath({
                        path: ROUTE.HOME_V,
                      }),
                    },

                    {
                      title: t("sidebar.nav_devices"),
                      label: "",
                      icon: Tv2Icon,
                      to: createPath({
                        path: ROUTE.DEVICES,
                      }),
                      permissions: [PERMISSIONS.DEVICES, PERMISSIONS.ALERTS],
                      children: [
                        {
                          title: t("sidebar.nav_devices_list"),
                          label: "",
                          icon: DotIcon,
                          to: createPath({
                            path: ROUTE.DEVICES,
                          }),
                          permissions: [PERMISSIONS.DEVICES],
                        },
                        {
                          title: t("sidebar.nav_devices_alerts"),
                          label: "",
                          icon: DotIcon,
                          to: createPath({
                            path: ROUTE.DEVICES_ALERTS,
                          }),
                          permissions: [PERMISSIONS.ALERTS],
                        },
                        // {
                        //   title: t("sidebar.nav_devices_performance"),
                        //   label: "",
                        //   icon: DotIcon,
                        //   to: createPath({
                        //     path: ROUTE.DEVICES_PERFORMANCE,
                        //   }),
                        //   permissions: [PERMISSIONS.DEVICES_PERFORMANCE],
                        // },
                      ],
                    },

                    {
                      title: t("sidebar.nav_transactions"),
                      label: "",
                      icon: ArrowLeftRight,
                      to: createPath({
                        path: ROUTE.TRANSACTIONS,
                      }),
                      permissions: [PERMISSIONS.TRANSACTIONS],
                    },
                    {
                      title: t("sidebar.nav_layouts"),
                      label: "",
                      icon: LayoutDashboard,
                      to: "",
                      permissions: [PERMISSIONS.LAYOUTS], // add permissions for scheduler and requests
                      children: [
                        {
                          title: t("sidebar.nav_layouts"),
                          label: "",
                          icon: Paintbrush,
                          to: createPath({
                            path: ROUTE.LAYOUTS,
                          }),
                          permissions: [PERMISSIONS.LAYOUTS],
                        },
                        {
                          title: t("sidebar.nav_instance_requests"),
                          label: "",
                          icon: ShieldCheck,
                          to: createPath({
                            path: ROUTE.REQUESTS,
                          }),
                          permissions: [PERMISSIONS.INSTANCES],
                        },
                        {
                          title: t("sidebar.instance-scheduler"),
                          label: "",
                          icon: Calendar,
                          to: createPath({
                            path: ROUTE.INSTANCES_SCHEDULER,
                          }),
                          permissions: [PERMISSIONS.INSTANCE_SCHEDULER],
                        },
                      ],
                    },
                    {
                      title: t("sidebar.nav_assets"),
                      label: "",
                      icon: Image,
                      to: createPath({
                        path: ROUTE.ASSETS,
                      }),
                      permissions: [PERMISSIONS.ASSETS],
                    },
                    {
                      title: t("sidebar.nav_projects_list"),
                      icon: File,
                      label: "",
                      to: "",
                      permissions: [
                        PERMISSIONS.PROJECTS,
                        PERMISSIONS.CAMPAIGNS,
                        PERMISSIONS.SPLASH_SCREENS,
                      ],
                      children: [
                        {
                          title: t("sidebar.nav_projects"),
                          label: "",
                          icon: DotIcon,
                          to: createPath({ path: ROUTE.PROJECTS }),
                          permissions: [PERMISSIONS.PROJECTS],
                        },
                        {
                          title: t("sidebar.nav_campaigns"),
                          label: "",
                          icon: DotIcon,
                          to: createPath({ path: ROUTE.CAMPAIGNS }),
                          features: [FEATURES.CampaignsFeature],
                          permissions: [PERMISSIONS.CAMPAIGNS],
                        },
                        {
                          title: "Splash Screens",
                          label: "",
                          icon: DotIcon,
                          to: createPath({ path: ROUTE.SPLASH_SCREEN }),
                          features: [FEATURES.SplashScreenFeature],
                          permissions: [PERMISSIONS.SPLASH_SCREENS],
                        },
                      ],
                    },
                    {
                      title: t("sidebar.nav_configurations"),
                      label: "",
                      icon: Settings,
                      to: createPath({
                        path: ROUTE.CONFIGURATIONS,
                      }),
                      permissions: [PERMISSIONS.CONFIGURATIONS],
                    },
                    {
                      title: t("sidebar.nav_locations"),
                      label: "",
                      icon: Building,
                      to: "",
                      permissions: [
                        PERMISSIONS.BUILDINGS,
                        PERMISSIONS.BUILDING_CATEGORY,
                        PERMISSIONS.CITIES,
                        PERMISSIONS.AREAS,
                        PERMISSIONS.PARTNERS,
                      ],
                      children: [
                        {
                          title: t("sidebar.nav_locations_cities"),
                          label: "",
                          icon: DotIcon,
                          to: createPath({
                            path: ROUTE.CITIES,
                          }),
                          permissions: [PERMISSIONS.CITIES],
                        },
                        {
                          title: t("sidebar.nav_locations_partners"),
                          label: "",
                          icon: DotIcon,
                          to: createPath({
                            path: ROUTE.PARTNERS,
                          }),
                          permissions: [PERMISSIONS.PARTNERS],
                        },
                        {
                          title: t("sidebar.nav_locations_areas"),
                          label: "",
                          icon: DotIcon,
                          to: createPath({
                            path: ROUTE.AREAS,
                          }),
                          permissions: [PERMISSIONS.AREAS],
                        },
                        {
                          title: t("sidebar.nav_locations_buildings"),

                          icon: DotIcon,
                          to: createPath({
                            path: ROUTE.BUILDINGS,
                          }),
                          permissions: [PERMISSIONS.BUILDINGS],
                        },

                        {
                          title: t("sidebar.nav_locations_building_categories"),
                          label: "",
                          icon: DotIcon,
                          to: createPath({
                            path: ROUTE.BUILDING_CATEGORIES,
                          }),
                          permissions: [PERMISSIONS.BUILDING_CATEGORY],
                        },
                      ],
                    },
                    {
                      title: t("sidebar.nav_audit_logs"),
                      permissions: [PERMISSIONS.AUDIT_LOGS],
                      label: "",
                      icon: ChevronRightSquare,
                      to: createPath({
                        path: ROUTE.AUDIT_LOGS,
                      }),
                    },
                    {
                      title: t("sidebar.nav_users"),
                      label: "",
                      icon: Users,
                      to: createPath({
                        path: ROUTE.USERS,
                      }),
                      permissions: [PERMISSIONS.USERS],
                    },
                    {
                      title: t("sidebar.nav_roles"),
                      label: "",
                      icon: Shield,
                      to: createPath({
                        path: ROUTE.ROLES,
                      }),
                      permissions: [PERMISSIONS.ROLES],
                    },
                    {
                      title: "Payments",
                      label: "",
                      icon: Shield,
                      to: createPath({
                        path: ROUTE.PAYMENTS,
                      }),
                      permissions: [PERMISSIONS.ROLES],
                    },
                  ]}
                /> */}
              </ScrollArea>
            </div>
          </ResizablePanel>
          {/* <ResizableHandle withHandle /> */}

          {/* Main content area */}
          <ResizablePanel defaultSize={82}>
            <div className="flex flex-col flex-1 overflow-hidden">
              {/* Navbar */}

              <header className="flex items-center h-16 px-6 lg:px-12 shadow-card-sheet xl:shadow-transparent">
                <div>
                  {(width < 1400 || isCollapsed) && (
                    <SidebarToggle
                      isCollapsed={isCollapsed}
                      setCollapsed={() => {
                        sidebarRef.current?.collapse();
                      }}
                      setExpanded={() => {
                        sidebarRef.current?.resize(layouts[0].defaultSize);
                      }}
                    />
                  )}
                </div>
                {/* <SearchBar /> */}
                <TopNav links={[]} />

                <div className="flex items-center gap-1 ms-auto">
                  {!isCollapsed && width < 1400 && (
                    <SidebarToggle
                      isCollapsed={isCollapsed}
                      setCollapsed={() => {
                        sidebarRef.current?.collapse();
                      }}
                      setExpanded={() => {
                        sidebarRef.current?.resize(layouts[0].defaultSize);
                      }}
                    />
                  )}
                  <ModeToggle />
                  <LanguageSwitcher />
                  <UserNav />
                </div>
              </header>

              {/* floating  setting button */}
              {/* <div
                className={`  ${
                  !isCardOpen ? "hidden" : ""
                } bg absolute inset-x-0 transition-all duration-700 ease-in-out		inset-y-0	bg-black/30  z-40`}
              ></div>

              <div
                className={`bg-white transition-all duration-700 ease-in-out	 z-50 ${
                  isCardOpen ? "w-[60%]" : "w-[0]"
                } fixed h-[50%] top-1/2 transform translate-x-1/2 -translate-y-1/2  right-0 size-72`}
              >
                <div className="relative h-[100%]">
                  <button
                    className={
                      "bg-white border-l border-t border-b b border-primary-1 transition-all absolute  duration-700 ease-in-out right-full	 z-50  p-3  top-1/2 transform  -translate-y-1/2 "
                    }
                    onClick={() => {
                      toggleCard();
                    }}
                  >
                    <Settings />
                  </button>
                </div>
              </div> */}
              {/* Dashboard Content */}

              <main className="flex-1 h-[100vh] overflow-auto">
                {/* Here goes the page content */}
                {width < 1400 && !isCollapsed && (
                  <div
                    onClick={() => sidebarRef.current?.collapse()}
                    className={cn(
                      " bg-gray-600 z-[49]  w-full h-[calc(100%-64px)]  absolute  top-[64px] ",
                      !isCollapsed && "opacity-45"
                    )}
                  ></div>
                )}
                <Outlet />
              </main>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </QueryParamProvider>
  );
};

export default AuthLayout;
