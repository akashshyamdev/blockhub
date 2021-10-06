namespace NodeJS {
  interface ProcessEnv {
    PORT?: number;

    DB_URL: string;
    DB_USER: string;
    DB_PASSWORD: string;

    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
  }
}
