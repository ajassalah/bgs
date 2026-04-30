module.exports = {
  apps: [
    {
      name: "british-graduate-school",
      cwd: __dirname,
      script: "server.js",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
