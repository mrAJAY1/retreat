type ConfigType = {
  [key: string]: {
    pwdRegex: RegExp;
  };
};

const configs: ConfigType = {
  development: {
    pwdRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    // Explanation of the regular expression:
    // - /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // - /^(?=.*[a-z])   - The password must contain at least one lowercase letter
    // - (?=.*[A-Z])     - The password must contain at least one uppercase letter
    // - (?=.*\d)        - The password must contain at least one digit
    // - [a-zA-Z\d]{8,}  - The password must be at least 8 characters long and can contain letters (both lowercase and uppercase) and digits
    // - $/              - End of the regular expression
  },
  production: {
    pwdRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  },
  test: {
    pwdRegex: /./,
  },
};

export default configs[process.env.NODE_ENV || "development"];
