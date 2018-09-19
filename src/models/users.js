const bcrypt = require("bcrypt");
("use strict");
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
  };

  users.beforeCreate((user, options) => {
    return cryptPassword(user.password)
      .then(success => {
        console.log("password: ", success);
        user.password = success;
      })
      .catch(err => {
        if (err) console.error(err);
      });
  });

  cryptPassword = password => {
    console.log("cryptPassword: " + password);
    return new Promise(function(resolve, reject) {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) return reject(err);
        return resolve(hash);
      });
    });
  };

  users.prototype.validatePass = (plaintextPassword, password) => {
    return new Promise(function(resolve, reject) {
      bcrypt.compare(plaintextPassword, password).then(success => {
        resolve(success);
      });
    });
  };

  return users;
};
