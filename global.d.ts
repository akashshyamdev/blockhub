namespace NodeJS {
  interface ProcessEnv {
    PORT?: number;

    DB_URL: string;
    DB_USER: string;
    DB_PASSWORD: string;

    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;

    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;

    FACEBOOK_CLIENT_ID: string;
    FACEBOOK_CLIENT_SECRET: string;
  }
}
