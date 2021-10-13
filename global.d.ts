namespace NodeJS {
  interface ProcessEnv {
    PORT?: number;

    DB_URL: string;
    DB_USER: string;
    DB_PASSWORD: string;

    NEXT_PUBLIC_SERVER_URL: string;

    JWT_SECRET: string;

    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;

    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;

    FACEBOOK_CLIENT_ID: string;
    FACEBOOK_CLIENT_SECRET: string;

    TWITTER_CLIENT_ID: string;
    TWITTER_CLIENT_SECRET: string;

    NEXT_PUBLIC_AWS_ACCESS_KEY: string;
    NEXT_PUBLIC_AWS_SECRET_KEY: string;

    NEXT_PUBLIC_AWS_S3_BUCKET_NAME: string;
    NEXT_PUBLIC_AWS_S3_BUCKET_REGION: string;
  }
}
