import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, LucideIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface Link {
  title: string;
  label?: string;
  icon: LucideIcon;
  to: string;
  permissions: string[];
  children?: Link[];
}
interface NavProps {
  links: Link[];
}

function FeaturedSideNavLink({ link }: { link: Link }) {
  return <SideNavLink link={link} />;
}

export default function SideNav({ links }: NavProps) {
  const { t } = useTranslation("common");

  return (
    <div className=" group w-full flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        <h2 className="pb-2 font-bold capitalize text-md ">
          {t("sidebar_nav.overview_title")}
        </h2>
        {links
          .slice(0, 1)
          .map((link) =>
            link.permissions ? (
              <FeaturedSideNavLink link={link} />
            ) : (
              <FeaturedSideNavLink key={link.to} link={link} />
            )
          )}

        <h2 className="pb-1 mt-4 text-sm font-bold capitalize">
          {t("sidebar_nav.cards_title")}
        </h2>
        {links
          .slice(1, 2)
          .map((link) =>
            link.permissions ? (
              <FeaturedSideNavLink link={link} />
            ) : (
              <FeaturedSideNavLink key={link.to} link={link} />
            )
          )}

        {links
          .slice(2, 3)
          .map((link) =>
            link.permissions ? (
              <FeaturedSideNavLink link={link} />
            ) : (
              <FeaturedSideNavLink key={link.to} link={link} />
            )
          )}

        {links
          .slice(3, 4)
          .map((link) =>
            link.permissions ? (
              <FeaturedSideNavLink link={link} />
            ) : (
              <FeaturedSideNavLink key={link.to} link={link} />
            )
          )}

        {links
          .slice(links.length - 1)
          .map((link) =>
            link.permissions ? (
              <FeaturedSideNavLink link={link} />
            ) : (
              <FeaturedSideNavLink key={link.to} link={link} />
            )
          )}
      </nav>
    </div>
  );
}

function SideNavLink({ link }: { link: Link }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = link.children ? link.children.length > 0 : false;

  const getLinkStyles = (isActive: boolean) => {
    const variant = isActive ? "default" : "ghost";
    return cn(
      buttonVariants({
        variant,
        size: "sm",
      }),
      "justify-start py-3 px-4 h-11 mb-[1px] text-md font-normal rounded-md",
      isActive
        ? "bg-[#fbbf24] text-basic-white hover:bg-[#fbbf24] hover:text-basic-white"
        : "hover:bg-[#facd5ab4]"
    );
  };

  const getLinkContent = ({
    isActive,
    hasChildren = false,
    content,
  }: {
    isActive: boolean;
    hasChildren: boolean;
    content: Link;
  }) => {
    return (
      <>
        <content.icon className="w-4 h-4 me-2" />
        {content.title}
        {content.label && (
          <span
            className={cn(
              "ms-auto",
              isActive && "text-basic-white bg-[#fbbf24]"
            )}
          >
            {content.label}
          </span>
        )}
        {hasChildren && (
          <span className={cn("ms-auto")}>
            <button
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "icon",
                }),
                "hover:text-inherit"
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              <ChevronDown
                className={cn(
                  "h-4 w-4 transform transition-transform duration-300 rotate-0",
                  isOpen && "rotate-180"
                )}
              />
            </button>
          </span>
        )}
      </>
    );
  };

  const renderSideNavLinkItem = (hasChildren: boolean) =>
    hasChildren ? (
      <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={getLinkStyles(false)}
        >
          {getLinkContent({
            isActive: false,
            hasChildren: true,
            content: link,
          })}
        </button>
        {isOpen && (
          <div className={cn("flex flex-col gap-1 ps-4 py-2")}>
            {link.children?.map((child) => (
              <FeaturedSideNavLink key={child.to} link={child} />
            ))}
          </div>
        )}
      </>
    ) : (
      <NavLink
        to={link.to}
        className={({ isActive }) => getLinkStyles(isActive)}
      >
        {({ isActive }) =>
          getLinkContent({
            isActive,
            hasChildren: false,
            content: link,
          })
        }
      </NavLink>
    );

  return renderSideNavLinkItem(hasChildren);
}
