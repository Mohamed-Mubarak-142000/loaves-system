import { isAfter } from "date-fns";

export const TOKEN_KEY = "token";
export const TOKEN_EXPIRES_AT_DATE_KEY = "token_expires_at_date";
export const storage = {
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },

  getIsTokenExpired: () => {
    const expiresAt = localStorage.getItem(TOKEN_EXPIRES_AT_DATE_KEY);

    if (!expiresAt) {
      storage.removeToken();
      return true;
    }
    if (isNaN(new Date(expiresAt).getTime())) {
      storage.removeToken();
      return true;
    }
    const expiresAtDate = new Date(expiresAt);
    return isAfter(new Date(), expiresAtDate);
  },
  setToken: (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
  },
  removeToken: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
};
