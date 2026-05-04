import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://68a330196da38a4c0fbd9a57b8b9b3e2@o4511266148909056.ingest.us.sentry.io/4511271672479744",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});