import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// import { MailIcon } from "@/assets/icons";
// import { Separator } from "@/components/ui/separator";
// import { useCurrentUser } from "@/domains/identity-management/auth/api/current-user";
// import { useLogout } from "@/domains/identity-management/auth/api/logout";
// import { useNavigate } from "react-router-dom";
// import { ROUTE, USER_ROUTE, createPath } from "@/routing";
// import { useTranslation } from "react-i18next";
// import { useGetUserByIdQuery } from "@/domains/users-management/users/api/get-user";
import { Loader2 } from "lucide-react";

/*
   "profile_menu": {
    "user_profile_title": "Your Profile",
    "user_sign_out_button": "Sign Out"
  },
*/
export default function UserNav() {
  //   const { t } = useTranslation("common");
  //   const { currentUser } = useCurrentUser();

  //   const userByIdQuery = useGetUserByIdQuery(currentUser?.id);

  //   const navigate = useNavigate();
  //   const logout = useLogout();
  //   const fullUserProfilePath =
  //     "/" +
  //     createPath({
  //       path: ROUTE.USERS,
  //     }) +
  //     "/" +
  //     createPath({
  //       path: USER_ROUTE.CURRENT_PROFILE,
  //     });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative rounded-full">
          <Avatar className={"h-6 w-6"}>
            <AvatarImage
              src={
                // userByIdQuery?.data?.result?.avatar
                ""
              }
              alt="User Nav"
            />
            <AvatarFallback>
              <Loader2 className="w-4 h-4 animate-spin" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="rounded-lg w-fit max-w-fit shadow-card-sheet me-4 border-basic-white dark:border-neutral-12">
        <div className="flex flex-col pb-0">
          <div className="flex items-center ">
            <div className="flex flex-col ">
              <div className="p-3 border-b border-gray-200 text-neutral-100">
                <h3 className="font-semibold text-md text-neutral-100  bg-none !p-0">
                  {/* {currentUser?.name + " " + currentUser?.surname} */}{" "}
                  Mohamed Mubarak
                </h3>
                <h4 className="m-0 text-base text-black text-neutral-100">
                  {/* {currentUser?.emailAddress} */} Cairo
                </h4>
              </div>
              <div className="p-3 border-b border-gray-200">
                <h4 className="text-gray-900 text-md text-neutral-100">
                  <button
                  //   onClick={() => navigate(fullUserProfilePath)}
                  >
                    <a>
                      {/* {t("profile_menu.user_profile_title")} */}
                      Profile
                    </a>
                  </button>
                </h4>
              </div>
              <div className="z-10 p-3 border-b-white">
                <h4 className="text-gray-900 text-md">
                  <span
                    className="w-full mt-2 text-red-500 cursor-pointer"
                    // onClick={() => logout()}
                  >
                    LogOut
                    {/* {t("profile_menu.user_sign_out_button")} */}
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
