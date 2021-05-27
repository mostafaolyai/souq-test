module.exports = {
    HOST: "192.168.1.2",
    USER: "mostafa",
    PASSWORD: "olyai8082",
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };