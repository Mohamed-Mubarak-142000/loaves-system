import { buttonVariants } from "@/components/ui/button";
// import Can from "@/domains/identity-management/roles/components/can.component";
// import { PERMISSIONS } from "@/domains/identity-management/roles/permissions";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

interface Link {
  title: string;
  to: string;
  external?: boolean;
}
interface NavProps {
  links: Link[];
}
export default function TopNav({ links }: NavProps) {
  return (
    <nav className={cn("flex items-center space-x-2 lg:space-x-2")}>
      {links?.map((link) => (
        <TopNavLink key={link.to} link={link} />
      ))}
    </nav>
  );
}

function ExternalLink({ link }: { link: Link }) {
  return (
    <a
      key={link.to}
      href={link.to}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant: "link", size: "sm" }))}
    >
      {link.title} <ExternalLinkIcon className="h-4 w-4 ms-1" />
    </a>
  );
}

function InternalLink({ link }: { link: Link }) {
  return (
    <NavLink
      key={link.to}
      className={(props) =>
        cn(
          buttonVariants({ variant: "link", size: "lg" }),
          props.isActive && "underline",
          "text-accent-foreground hover:text-primary font-bold"
        )
      }
      to={link.to}
    >
      {link.title}
    </NavLink>
  );
}

function TopNavLink({ link }: { link: Link }) {
  return link.external ? (
    <ExternalLink link={link} />
  ) : (
    <InternalLink link={link} />
  );
}
