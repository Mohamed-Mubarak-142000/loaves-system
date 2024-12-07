export enum ROUTE {
  HOME = "/",
  ABOUT = "/about",
  CONTACT = "/contact",
  FAQ = "/faq",
  LOGIN = "/login",
  SIGNUP = "/signup",
  PROFILE = "/profile",
  NOT_FOUND = "*",
  WELCOME = "/welcome",
  AUTH = "auth",
  page404 = "/404",
  FORGET = "reset-password",
  CONFIRM_PASSWORD = "confirm-password",
  ERRORS = "errors",

  OVERVIEW = "/overview",

  CARDS = "/cards",
  ADDCARD = "/add-card",
  EDITCARD = "/edit-card",

  ADDUSER = "/add-user",
  EDITUSER = "/edit-user",
  USERS = "/users",

  HISTORYUSER = "/history-user",
  HISTORYCARD = "/history-card",

  ROLE = "/role",
  ADDROLE = "/add-role",
  EDITROLE = "/edit-role",
  ROLEUSER = "/role-user",
}

export enum AUTH_ROUTE {
  LOGIN = "login",
}

type TArgs =
  | { path: ROUTE.HOME }
  | { path: ROUTE.WELCOME }
  | { path: ROUTE.OVERVIEW }
  | { path: ROUTE.LOGIN }
  | { path: ROUTE.SIGNUP }
  | { path: ROUTE.PROFILE }
  | { path: ROUTE.ERRORS }
  | { path: ROUTE.NOT_FOUND }
  | { path: ROUTE.AUTH }
  | { path: ROUTE.page404 }
  | { path: AUTH_ROUTE.LOGIN }
  | { path: ROUTE.ABOUT }
  | { path: ROUTE.CONTACT }
  | { path: ROUTE.FAQ }
  | { path: ROUTE.CARDS }
  | { path: ROUTE.ADDCARD }
  | { path: ROUTE.EDITCARD }
  | { path: ROUTE.ROLE }
  | { path: ROUTE.ADDROLE }
  | { path: ROUTE.EDITROLE }
  | { path: ROUTE.ROLEUSER }
  | { path: ROUTE.ADDUSER }
  | { path: ROUTE.EDITUSER }
  | { path: ROUTE.USERS }
  | { path: ROUTE.HISTORYUSER }
  | { path: ROUTE.HISTORYCARD }
  | { path: ROUTE.PROFILE; params: { userId: string } };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TArgsWithParams = Extract<TArgs, { path: any; params: any }>;

export function createPath(args: TArgs) {
  // eslint-disable-next-line no-prototype-builtins
  if (args.hasOwnProperty("params") === false) {
    return args.path;
  }

  return Object.entries((args as TArgsWithParams).params).reduce(
    (previousValue: string, [param, value]) =>
      previousValue.replace(`:${param}`, "" + value),
    args.path
  );
}
