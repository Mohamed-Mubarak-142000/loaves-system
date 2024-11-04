// // import { createPath, ROUTE } from "@/routing";
// // import TopNav from "../auth-layout/top-nav";
import ModeToggle from "@/components/mode-toggle";
import LanguageSwitcher from "@/ui/langauge-switcher";
import UserNav from "../auth-layout/user-nav";
// // import Logo from "@/ui/Logo";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
// } from "@nextui-org/react";

// const NavbarHome = () => {
//   return (
//     <Navbar shouldHideOnScroll>
//       <NavbarBrand>
//         <h1>logo</h1> <p className="font-bold text-inherit">ACME</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>

//         <div className="flex items-center gap-1 ms-auto">
//           <ModeToggle />
//           <LanguageSwitcher />
//           <UserNav />
//         </div>
//       </NavbarContent>
//     </Navbar>
//   );
// };
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { ROUTE } from "@/routing.js";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavbarHome() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation("common");

  const menuItems = [
    t("nav_bar.home"),
    t("nav_bar.about"),
    t("nav_bar.contact"),
    t("nav_bar.faq"),
    t("personal_info.profile_page"),
    t("nav_bar.login"),
    t("personal_info.logout"),
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#C4841D] "
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-24" justify="start">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">{t("nav_bar.logo")}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">{t("nav_bar.logo")}</p>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link as={RouterLink} to={ROUTE.HOME} aria-current="page">
            {t("nav_bar.home")}
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link as={RouterLink} color="foreground" to={ROUTE.ABOUT}>
            {t("nav_bar.about")}
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link as={RouterLink} color="foreground" to={ROUTE.CONTACT}>
            {t("nav_bar.contact")}
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link as={RouterLink} color="foreground" to={ROUTE.FAQ}>
            {t("nav_bar.faq")}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link as={RouterLink} to={ROUTE.LOGIN}>
            {t("nav_bar.login")}
          </Link>
        </NavbarItem>

        <NavbarItem>
          <div className="flex items-center gap-1 ms-auto">
            <ModeToggle />
            <LanguageSwitcher />
            <UserNav />
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
