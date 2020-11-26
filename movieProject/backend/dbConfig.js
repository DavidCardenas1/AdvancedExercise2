module.exports = {
  user          : process.env.NODE_ORACLEDB_USER,
  password      : process.env.NODE_ORACLEDB_PASSWORD,
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING,
  poolMax: 2,
  poolMin: 2,
  poolIncrement: 0
};
// export NODE_ORACLEDB_USER=NotMyRealUser
// export NODE_ORACLEDB_PASSWORD=NotMyRealPassword
// export NODE_ORACLEDB_CONNECTIONSTRING=192.168.0.44:1521/NotMyRealServiceName