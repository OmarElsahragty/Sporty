import LocaleKeys from "../locales";

export const appResponse = ({ err, data }) => {
  if (err) {
    return {
      err: {
        isAppError: typeof err === "string",
        error: err,
      },
      data: undefined,
    };
  } else if (!data || data.count === 0 || data.length === 0) {
    return {
      err: {
        isAppError: true,
        error: LocaleKeys.NO_DATA_404,
      },
      data: undefined,
    };
  }
  return { err, data };
};
