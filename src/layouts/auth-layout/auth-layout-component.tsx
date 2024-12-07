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
import SideNav from "./side-nav";
import { LayoutDashboardIcon, X } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";
import { ModeToggle } from "@/ui/mode-toggle";
import { useWindowSize } from "usehooks-ts";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createPath, ROUTE } from "@/routing";
import { AcmeLogo } from "../main-layout/AcmeLogo";
import { isArabic } from "@/lib/i18next/i18n";

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

const AuthLayout = () => {
  const [screenHeight, setScreenHeight] = useState(window?.innerHeight);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isAppInitiallyRendered, setIsAppInitiallyRendered] = useState(false);
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const sidebarRef = useRef<ImperativePanelHandle>(null);

  const { t } = useTranslation("common");

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width < 1400) {
      if (sidebarRef.current && !isCollapsed && !isAppInitiallyRendered) {
        sidebarRef.current.collapse();
        setIsCollapsed(true);
        setIsAppInitiallyRendered(true);
      }
    }
  }, [isCollapsed, sidebarRef, isAppInitiallyRendered, width]);

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
                "min-w-[50px] hidden transition-all duration-300 ease-in-out",
              "bg-basic-white",

              width < 1400 ? "absolute z-[80] h-full w-[300px]" : null
            )}
          >
            <div className="flex flex-col w-full gap-4 p-2 py-4 ">
              <div className="flex justify-between p-2">
                <div className="flex items-center">
                  <AcmeLogo />
                  <p className="font-bold text-2xl text-[#C4841D]">
                    {t("nav_bar.logo")}
                  </p>
                </div>
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
                <SideNav
                  links={[
                    {
                      permissions: [""],
                      title: t("sidebar_nav.overview"),
                      label: "",
                      icon: LayoutDashboardIcon,
                      to: createPath({
                        path: ROUTE.OVERVIEW,
                      }),
                    },
                    {
                      permissions: [""],
                      title: t("sidebar_nav.cards"),
                      label: "",
                      icon: LayoutDashboardIcon,
                      to: createPath({
                        path: ROUTE.CARDS,
                      }),
                      children: [
                        {
                          permissions: [""],
                          title: t("sidebar_nav.cards"),
                          label: "",
                          icon: LayoutDashboardIcon,
                          to: createPath({
                            path: ROUTE.CARDS,
                          }),
                        },
                        {
                          permissions: [""],
                          title: t("sidebar_nav.add_card"),
                          label: "",
                          icon: LayoutDashboardIcon,
                          to: createPath({
                            path: ROUTE.ADDCARD,
                          }),
                        },
                      ],
                    },

                    {
                      permissions: [""],
                      title: t("sidebar_nav.history_title"),
                      label: "",
                      icon: LayoutDashboardIcon,
                      to: createPath({
                        path: ROUTE.HISTORYCARD,
                      }),
                      children: [
                        {
                          permissions: [""],
                          title: t("sidebar_nav.history_card"),
                          label: "",
                          icon: LayoutDashboardIcon,
                          to: createPath({
                            path: ROUTE.HISTORYCARD,
                          }),
                        },
                        {
                          permissions: [""],
                          title: t("sidebar_nav.history_user"),
                          label: "",
                          icon: LayoutDashboardIcon,
                          to: createPath({
                            path: ROUTE.HISTORYUSER,
                          }),
                        },
                      ],
                    },

                    {
                      permissions: [""],
                      title: t("sidebar_nav.roles_title"),
                      label: "",
                      icon: LayoutDashboardIcon,
                      to: createPath({
                        path: ROUTE.ROLE,
                      }),
                      children: [
                        {
                          permissions: [""],
                          title: t("sidebar_nav.roles"),
                          label: "",
                          icon: LayoutDashboardIcon,
                          to: createPath({
                            path: ROUTE.ROLE,
                          }),
                        },
                        {
                          permissions: [""],
                          title: t("sidebar_nav.add_role"),
                          label: "",
                          icon: LayoutDashboardIcon,
                          to: createPath({
                            path: ROUTE.ADDROLE,
                          }),
                        },
                      ],
                    },

                    {
                      permissions: [""],
                      title: t("sidebar_nav.logout"),
                      label: "",
                      icon: LayoutDashboardIcon,
                      to: createPath({
                        path: ROUTE.LOGIN,
                      }),
                    },
                  ]}
                />
              </ScrollArea>
            </div>
          </ResizablePanel>

          <ResizablePanel defaultSize={82}>
            <div
              className={cn(
                "flex flex-col flex-1 overflow-hidden ",
                isArabic ? "mr-2" : "ml-2"
              )}
            >
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

              <main className="flex-1 h-[100vh] overflow-auto ">
                {/* Here goes the page content */}
                {width < 1400 && !isCollapsed && (
                  <div
                    onClick={() => sidebarRef.current?.collapse()}
                    className={cn(
                      " bg-gray-600 z-[49]  w-full h-[calc(100%-64px)] border-2 border-red-600 absolute  top-[64px] ",
                      !isCollapsed && "opacity-45 border-2 border-red-600"
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
