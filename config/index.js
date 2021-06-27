import Dotenv from "dotenv";

Dotenv.config();

export default Object.freeze({
  Port: process.env.PORT * 1,

  SentryDNS: process.env.SENTRY_DNS,

  Database: {
    Host: process.env.DATABASE_HOST,
    Port: process.env.DATABASE_PORT * 1,
    Name: process.env.DATABASE_NAME,
    Username: process.env.DATABASE_USERNAME,
    Password: process.env.DATABASE_PASSWORD,

    Dialect: "postgres",
    Pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },

  JwtSecret: process.env.JWT_SECRET,
  JwtLifeTime: process.env.JWT_LIFE_TIME,

  CloudBucketURL: process.env.CLOUD_BUCKET_URL,

  Twilio: {
    AccountSID: process.env.TWILIO_ACCOUNT_SID,
    AuthToken: process.env.TWILIO_AUTH_TOKEN,
    ServiceID: process.env.TWILIO_SERVICE_ID,
  },

  // App: {
  //   Name: process.env.APP_NAME,
  //   Logo: process.env.APP_LOGO,
  //   Website: process.env.APP_WEBSITE,
  //   Mail: process.env.APP_MAIL,
  // },
});
