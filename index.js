import * as Sentry from "@sentry/node";
import Config from "./config";
import Main from "./main";
import "./TerminalColors";
import "@sentry/tracing";

Sentry.init({
  dsn: Config.SentryDNS,
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "backend",
  name: "sporty",
});

setTimeout(() => {
  try {
    Main();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);
