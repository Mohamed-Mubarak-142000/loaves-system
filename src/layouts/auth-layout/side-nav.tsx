// import { buttonVariants } from "@/components/ui/button";
// import IsSomeFeaturesGranted from "@/domains/feature-management/components/is-some-feature-granted";
// import { FEATURES } from "@/domains/feature-management/features";

// import CanOr from "@/domains/identity-management/roles/components/can.or.component";
// import { PERMISSIONS } from "@/domains/identity-management/roles/permissions";
// import { cn } from "@/lib/utils";
// import { LucideIcon } from "lucide-react";
// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { NavLink } from "react-router-dom";

// interface Link {
//   title: string;
//   label?: string;
//   icon: LucideIcon;
//   to: string;
//   //   permissions?: PERMISSIONS[];
//   //   features?: FEATURES[];
//   children?: Link[];
// }
// interface NavProps {
//   links: Link[];
// }
// function FeaturedSideNavLink() {
// { link }: { link: Link }
//   if (link.features) {
//     return (
//       <IsSomeFeaturesGranted features={link.features}>
//         <SideNavLink link={link} />
//       </IsSomeFeaturesGranted>
//     );
//   } else {
//     return <SideNavLink link={link} />;
//   }
// }

export default function SideNav() {
  // { links }: NavProps
  //   const { t } = useTranslation("common");

  return (
    <div className=" group w-full flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {/* <CanOr do={[PERMISSIONS.DASHBOARD]}> */}
        <h2 className="pb-2 font-bold capitalize text-md ">
          {/* {t("sidebar.home_section_label")} */}
          Sidebar Links
        </h2>
        {/* </CanOr> */}
        {/* {links.slice(0, 1).map((link) =>
          link.permissions ? (
            <CanOr key={link.to} do={link.permissions}>
              <FeaturedSideNavLink link={link} />
            </CanOr>
          ) : (
            <FeaturedSideNavLink key={link.to} link={link} />
          )
        )}
        <CanOr
          do={[
            PERMISSIONS.DEVICES,
            PERMISSIONS.TRANSACTIONS,
            PERMISSIONS.LAYOUTS,
            PERMISSIONS.PROJECTS,
            PERMISSIONS.CONFIGURATIONS,
            PERMISSIONS.BUILDING_CONFIGURATION,
            PERMISSIONS.AUDIT_LOGS,
          ]}
        >
          <h2 className="pb-1 mt-4 text-sm font-bold capitalize">
            {t("sidebar.app_section_label")}
          </h2>
        </CanOr> */}
        {/* {links.slice(1, links.length - 2).map((link) =>
          link.permissions ? (
            <CanOr key={link.to} do={link.permissions}>
              <FeaturedSideNavLink link={link} />
            </CanOr>
          ) : (
            <FeaturedSideNavLink key={link.to} link={link} />
          )
        )}
        <CanOr do={[PERMISSIONS.USERS, PERMISSIONS.ROLES]}>
          <h2 className="pb-1 mt-4 text-sm font-bold capitalize">
            {t("sidebar.users_managment_section_label")}
          </h2>
        </CanOr>
        {links.slice(links.length - 2).map((link) =>
          link.permissions ? (
            <CanOr key={link.to} do={link.permissions}>
              <FeaturedSideNavLink link={link} />
            </CanOr>
          ) : (
            <FeaturedSideNavLink key={link.to} link={link} />
          )
        )} */}
      </nav>
    </div>
  );
}

// function SideNavLink({ link }: { link: Link }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const hasChildren = link.children ? link.children.length > 0 : false;

//   const getLinkStyles = (isActive: boolean) => {
//     const variant = isActive ? "default" : "ghost";
//     return cn(
//       buttonVariants({
//         variant,
//         size: "sm",
//       }),

//       "justify-start  py-3 px-4 h-11 mb-[1px] text-md font-normal rounded-md",
//       !isActive && "hover:bg-primary-8"
//     );
//   };

//   const getLinkContent = ({
//     isActive,
//     hasChildren = false,
//     content,
//   }: {
//     isActive: boolean;
//     hasChildren: boolean;
//     content: Link;
//   }) => {
//     return (
//       <>
//         <content.icon className="w-4 h-4 me-2 " />
//         {content.title}
//         {content.label && (
//           <span className={cn("ms-auto", isActive && "text-basic-white ")}>
//             {content.label}
//           </span>
//         )}
//         {hasChildren && (
//           <span className={cn("ms-auto")}>
//             <div
//               className={cn(
//                 buttonVariants({
//                   variant: "ghost",
//                   size: "icon",
//                 }),
//                 "hover:text-inherit"
//               )}
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <ChevronDown
//                 className={cn(
//                   "h-4 w-4 transform transition-transform duration-300 rotate-0",
//                   isOpen && "rotate-180"
//                 )}
//               />
//             </div>
//           </span>
//         )}
//       </>
//     );
//   };

//   const renderSideNavLinkItem = (hasChildren: boolean) =>
//     hasChildren ? (
//       <>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className={getLinkStyles(false)}
//         >
//           {getLinkContent({
//             isActive: false,
//             hasChildren: true,
//             content: link,
//           })}
//         </button>
//         {isOpen && (
//           <div className={cn("flex flex-col gap-1 ps-4 py-2")}>
//             {link.children?.map((child) =>
//               child.permissions ? (
//                 <CanOr key={child.to} do={child.permissions}>
//                   <FeaturedSideNavLink link={child} />
//                 </CanOr>
//               ) : (
//                 <FeaturedSideNavLink key={child.to} link={child} />
//               )
//             )}
//           </div>
//         )}
//       </>
//     ) : (
//       <NavLink
//         key={link.to}
//         to={link.to}
//         className={(props) => {
//           const isActive = props.isActive;
//           return getLinkStyles(isActive);
//         }}
//       >
//         {({ isActive }) => {
//           return getLinkContent({
//             isActive,
//             hasChildren: false,
//             content: link,
//           });
//         }}
//       </NavLink>
//     );

//   return renderSideNavLinkItem(hasChildren);
// }
