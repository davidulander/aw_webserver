// scripts/db/migrate.js
const { spawn } = require("child-process-promise");
const spawnOptions = { stdio: "inherit" };
(async () => {
  // Our database URL
  const urlDev = "postgres://postgres:postgres@localhost:5432/awsdb_dev";
  const urlTest = "postgres://postgres:postgres@localhost:5432/awsdb_test";
  try {
    // Migrate the DB
    await spawn(
      "./node_modules/.bin/sequelize",
      ["db:migrate", `--url=${urlDev}`],
      spawnOptions
    );

    await spawn(
      "./node_modules/.bin/sequelize",
      ["db:seed:undo:all", `--url=${urlDev}`],
      spawnOptions
    );
    await spawn(
      "./node_modules/.bin/sequelize",
      ["db:seed:all", `--url=${urlDev}`],
      spawnOptions
    );

    await spawn(
      "./node_modules/.bin/sequelize",
      ["db:migrate", `--url=${urlTest}`],
      spawnOptions
    );
    console.log("*************************");
    console.log("Migration successful");
  } catch (err) {
    // Oh no!
    console.log("*************************");
    console.log("Migration failed. Error:", err.message);
    process.exit(1);
  }
  process.exit(0);
})();
