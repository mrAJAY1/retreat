interface Config {
  pwdRegex: RegExp;
  frontendOrigin: string;
  googleCallbackUrl: string;
  cookieDomain: string | undefined;
  secure?: boolean;
  sameSite?: "none" | "strict" | "lax";
  sessionCookieMaxAge: number;
}

type ConfigType = Record<string, Config>;

const defaultConfig: Config = {
  pwdRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  frontendOrigin: process.env.CLIENT_URL ?? "http://localhost:5173",
  googleCallbackUrl: `http://localhost:${process.env.PORT ?? 5100}/api/auth/google/callback`,
  cookieDomain: "localhost",
  sameSite: "none",
  sessionCookieMaxAge: 1000 * 60 * 5,
};

const configs: ConfigType = {
  development: {
    ...defaultConfig,
  },
  production: {
    ...defaultConfig,
    frontendOrigin: process.env.CLIENT_URL ?? "",
    googleCallbackUrl: `https://${process.env.DOMAIN}/api/auth/google/callback`,
    secure: true,
    cookieDomain: process.env.DOMAIN,
  },
  test: {
    ...defaultConfig,
    pwdRegex: /./,
  },
};

const env = process.env.NODE_ENV ?? "development";

if (!configs[env]) throw new Error(`Invalid NODE_ENV: ${env}`);

export default configs[env];
