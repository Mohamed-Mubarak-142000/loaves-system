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
  OVERVIEW = "/overview",
  AUTH = "auth",
  page404 = "/404",
  FORGET = "reset-password",
  CONFIRM_PASSWORD = "confirm-password",
  ERRORS = "errors",
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
