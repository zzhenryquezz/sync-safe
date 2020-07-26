module.exports = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: require('path').resolve(__dirname, 'src', 'database', 'database.sqlite'),
  migrations: {
    extension: 'ts',
    directory: require('path').resolve(__dirname, 'src', 'database', 'migrations'),
    tableName: 'migrations'
  }
}
