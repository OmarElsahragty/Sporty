import { error, success } from "consola";
import * as Sentry from "@sentry/node";
import "@sentry/tracing";
import Config from "./config";
import Main from "./main";

console.success = (message) =>
  success({
    badge: true,
    message,
  });

console.error = (message) =>
  error({
    badge: true,
    message,
  });

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
