module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  mysql: {
    host: process.env.MYSQL_HOST || "178.128.146.252",
    user: process.env.MYSQL_USER || "admin_sigmauser",
    password: process.env.MYSQL_PASS || "pfaDKIJyPF",
    database: process.env.MYSQL_DB || "admin_sigmatest",
  },
};
