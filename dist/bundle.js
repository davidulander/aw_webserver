/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/URLs.ts":
/*!****************************!*\
  !*** ./src/config/URLs.ts ***!
  \****************************/
/*! exports provided: gatewayBaseURL, humidityMeansurePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatewayBaseURL", function() { return gatewayBaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humidityMeansurePath", function() { return humidityMeansurePath; });
var gatewayBaseURL = "http://192.168.0.10:8000";
var humidityMeansurePath = "/sensors/humidity";


/***/ }),

/***/ "./src/config/config.json":
/*!********************************!*\
  !*** ./src/config/config.json ***!
  \********************************/
/*! exports provided: development, test, production, default */
/***/ (function(module) {

module.exports = {"development":{"username":"postgres","password":"postgres","database":"awsdb_dev","host":"127.0.0.1","dialect":"postgres"},"test":{"username":"postgres","password":"postgres","database":"awsdb_test","host":"127.0.0.1","dialect":"postgres"},"production":{"username":"postgres","password":"postgres","database":"awsdb_production","host":"127.0.0.1","dialect":"postgres"}};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_sensors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/sensors */ "./src/routes/sensors.ts");
/* harmony import */ var _routes_measurements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/measurements */ "./src/routes/measurements.ts");
/* harmony import */ var _routes_plants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/plants */ "./src/routes/plants.ts");
/* harmony import */ var _routes_waterings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/waterings */ "./src/routes/waterings.ts");





var server = express__WEBPACK_IMPORTED_MODULE_0__();
server.use("/sensors", _routes_sensors__WEBPACK_IMPORTED_MODULE_1__["default"]);
server.use("/measurements", _routes_measurements__WEBPACK_IMPORTED_MODULE_2__["default"]);
server.use("/plants", _routes_plants__WEBPACK_IMPORTED_MODULE_3__["default"]);
server.use("/waterings", _routes_waterings__WEBPACK_IMPORTED_MODULE_4__["default"]);
server.use("/", function (req, res) {
    console.log("Hello from baseURL");
    res.json({ status: "Hello from baseURL" });
});
server.listen(8000, function () {
    console.log("server running on port 8000");
});


/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);



const env = "development" || "development";
const config = __webpack_require__(/*! ./src/models/../config/config.json */ "./src/config/config.json")[env];

let db = {};

function getModels(config, force = false) {
  if (Object.keys(db).length && !force) {
    return db;
  }

  const sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0___default.a(
    config.database,
    config.username,
    config.password,
    config
  );

  let modules = [
    __webpack_require__(/*! ./measurements.js */ "./src/models/measurements.js"),
    __webpack_require__(/*! ./plants.js */ "./src/models/plants.js"),
    __webpack_require__(/*! ./sensors.js */ "./src/models/sensors.js"),
    __webpack_require__(/*! ./waterings.js */ "./src/models/waterings.js")
  ];

  // Initialize db
  modules.forEach(module => {
    const model = module(sequelize, sequelize__WEBPACK_IMPORTED_MODULE_0___default.a, config);
    db[model.name] = model;
  });

  // Apply associations
  Object.keys(db).forEach(key => {
    if ("associate" in db[key]) {
      db[key].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = sequelize__WEBPACK_IMPORTED_MODULE_0___default.a;

  return db;
}

getModels(config, false);


/***/ }),

/***/ "./src/models/measurements.js":
/*!************************************!*\
  !*** ./src/models/measurements.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op;
  const measurements = sequelize.define(
    "measurements",
    {
      sensor_id: DataTypes.INTEGER,
      plant_id: DataTypes.INTEGER,
      value: DataTypes.DOUBLE
    },
    {
      scopes: {
        lastMeasurement: {
          order: [["createdAt", "DESC"]]
        }
      }
    }
  );
  measurements.associate = models => {
    measurements.belongsTo(models.plants, { foreignKey: "plant_id" });
    measurements.belongsTo(models.sensors, { foreignKey: "sensor_id" });
  };

  measurements.measurements = (plantID, onlyLast) => {
    return new Promise((resolve, reject) => {
      let query;
      if (onlyLast) {
        query = measurements.findAll({
          where: {
            plant_id: { [Op.eq]: plantID }
          },
          limit: 1
        });
      } else {
        query = measurements.findAll({
          where: {
            plant_id: { [Op.eq]: plantID }
          }
        });
      }
      query
        .then(values => {
          resolve(JSON.stringify(values));
        })
        .catch(() => {
          reject("can't get measurements");
        });
    });
  };
  return measurements;
};


/***/ }),

/***/ "./src/models/plants.js":
/*!******************************!*\
  !*** ./src/models/plants.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (sequelize, DataTypes) => {
  const plants = sequelize.define(
    "plants",
    {
      name: DataTypes.STRING
    },
    {}
  );
  plants.associate = function(models) {
    plants.hasMany(models.measurements, { foreignKey: "plant_id" });
    plants.hasMany(models.waterings, { foreignKey: "plant_id" });
  };

  plants.all = () => {
    return new Promise((resolve, reject) => {
      plants
        .findAll({ attributes: ["id", "name"] })
        .then(res => resolve(JSON.stringify(res)))
        .catch(err => reject("error with findAll plants ", err));
    });
  };

  return plants;
};


/***/ }),

/***/ "./src/models/sensors.js":
/*!*******************************!*\
  !*** ./src/models/sensors.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (sequelize, DataTypes) => {
  const sensors = sequelize.define(
    "sensors",
    {
      name: DataTypes.STRING
    },
    {}
  );
  sensors.associate = function(models) {
    sensors.hasMany(models.measurements, { foreignKey: "sensor_id" });
  };
  return sensors;
};


/***/ }),

/***/ "./src/models/waterings.js":
/*!*********************************!*\
  !*** ./src/models/waterings.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (sequelize, DataTypes) => {
  const waterings = sequelize.define(
    "waterings",
    {
      plant_id: DataTypes.INTEGER
    },
    {}
  );
  waterings.associate = function(models) {
    waterings.belongsTo(models.plants, { foreignKey: "plant_id" });
  };

  return waterings;
};


/***/ }),

/***/ "./src/routes/measurements.ts":
/*!************************************!*\
  !*** ./src/routes/measurements.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/index */ "./src/models/index.js");


var router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
router.get("/:plantID", function (req, res, next) {
    _models_index__WEBPACK_IMPORTED_MODULE_1__["db"].measurements
        .measurements(req.params.plantID)
        .then(function (values) {
        res.json(values);
    })
        .catch(function (err) {
        console.log(err);
        res.json({ err: err });
    });
});
router.get("/last/:plantID", function (req, res, next) {
    _models_index__WEBPACK_IMPORTED_MODULE_1__["db"].measurements
        .measurements(req.params.plantID, true)
        .then(function (values) {
        res.json(values);
    })
        .catch(function (err) {
        console.log(err);
        res.json({ err: err });
    });
});
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./src/routes/plants.ts":
/*!******************************!*\
  !*** ./src/routes/plants.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/index */ "./src/models/index.js");


var router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
router.get("/", function (req, res, next) {
    console.log(_models_index__WEBPACK_IMPORTED_MODULE_1__["db"].plants);
    _models_index__WEBPACK_IMPORTED_MODULE_1__["db"].plants
        .all()
        .then(function (values) {
        res.json(values);
    })
        .catch(function (err) {
        console.log(err);
        res.json({ err: err });
    });
});
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./src/routes/sensors.ts":
/*!*******************************!*\
  !*** ./src/routes/sensors.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/index */ "./src/models/index.js");
/* harmony import */ var _utils_pi_gateway_calls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/pi_gateway_calls */ "./src/utils/pi_gateway_calls.ts");



var router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
router.get("/humidity", function (req, res, next) {
    console.log("request recieved humidity");
    var sensorID = 1;
    var plantID = 1;
    Object(_utils_pi_gateway_calls__WEBPACK_IMPORTED_MODULE_2__["humidityMeasurement"])(plantID, sensorID)
        .then(function (measurement) { return res.json(measurement); })
        .catch(function (err) {
        res.status(500).send({ error: err });
    });
});
router.get("/db", function (req, res, next) {
    Promise.all([
        _models_index__WEBPACK_IMPORTED_MODULE_1__["db"].plants.findOne({ where: { name: "Basil" } }),
        _models_index__WEBPACK_IMPORTED_MODULE_1__["db"].measurements.findAll({
            include: [{ model: _models_index__WEBPACK_IMPORTED_MODULE_1__["db"].plants, where: { name: "Maskros" } }]
        }),
        _models_index__WEBPACK_IMPORTED_MODULE_1__["db"].measurements.scope("lastMeasurement").findAll()
    ])
        .then(function (queryRes) {
        res.json({
            status: "success",
            plant: JSON.stringify(queryRes[0]),
            measurement: JSON.stringify(queryRes[1]),
            scope: JSON.stringify(queryRes[2])
        });
    })
        .catch(function (err) { return console.log(err); });
});
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./src/routes/waterings.ts":
/*!*********************************!*\
  !*** ./src/routes/waterings.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/index */ "./src/models/index.js");
/* harmony import */ var _utils_pi_gateway_calls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/pi_gateway_calls */ "./src/utils/pi_gateway_calls.ts");



var router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
router.post("/:plant_id", function (req, res, next) {
    var plant_id = req.params.plant_id;
    _models_index__WEBPACK_IMPORTED_MODULE_1__["db"].plants
        .findOne({ where: { id: plant_id } })
        .then(function (plant) {
        if (plant !== null) {
            Object(_utils_pi_gateway_calls__WEBPACK_IMPORTED_MODULE_2__["applyWater"])(plant_id)
                .then(function (values) {
                res.json(values);
            })
                .catch(function (err) {
                res.status(500).json({ err: err });
            });
        }
        else {
            res.status(404).json({ err: "could not find plant" });
        }
    })
        .catch(function (err) {
        console.log(err);
        res.status(405).json({ err: "could not find plant" });
    });
});
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./src/utils/pi_gateway_calls.ts":
/*!***************************************!*\
  !*** ./src/utils/pi_gateway_calls.ts ***!
  \***************************************/
/*! exports provided: humidityMeasurement, applyWater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humidityMeasurement", function() { return humidityMeasurement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyWater", function() { return applyWater; });
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/index */ "./src/models/index.js");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_URLs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/URLs */ "./src/config/URLs.ts");


var axios = __webpack_require__(/*! axios */ "axios");

var humidityMeasurement = function (plantID, sensorID) {
    return new Promise(function (resolve, reject) {
        axios
            // .get(routes.gatewayBaseURL + routes.humidityMeansurePath)
            .get("https://1b6a59c8-b449-4360-a30c-d0d6220dfb77.mock.pstmn.io" +
            _config_URLs__WEBPACK_IMPORTED_MODULE_2__["humidityMeansurePath"])
            .then(function (sensorRes) {
            _models_index__WEBPACK_IMPORTED_MODULE_0__["db"].measurements
                .create({
                plant_id: plantID,
                sensor_id: sensorID,
                value: sensorRes.data.toFixed(3)
            })
                .then(function (measurement) {
                wateringJudge(measurement.value, plantID);
                console.log("forsätter...");
                resolve(JSON.stringify(measurement));
            })
                .catch(function (err) {
                console.log("couldn't save measurement to db", err);
                reject("couldn't save measurement to db");
            });
        })
            .catch(function (err) {
            console.log("Error with pi humidity request", err);
            reject("Error with pi humidity request");
        });
    });
};
var wateringJudge = function (measurement, plantID) {
    var dryThreshold = 0.5;
    if (measurement < dryThreshold)
        applyWater(plantID)
            .then(function () { return console.log("watering created"); })
            .catch(function (err) { return console.log("error when creating waterings"); });
    console.log("wateringJudge returning");
    return;
};
var applyWater = function (plantID) {
    return new Promise(function (resolve, reject) {
        axios
            .get("https://1b6a59c8-b449-4360-a30c-d0d6220dfb77.mock.pstmn.io" +
            _config_URLs__WEBPACK_IMPORTED_MODULE_2__["humidityMeansurePath"])
            .then(function (res) {
            console.log("water was applied");
            _models_index__WEBPACK_IMPORTED_MODULE_0__["db"].waterings
                .create({ plant_id: plantID })
                .then(function (values) {
                resolve(JSON.stringify(values));
            })
                .catch(function (err) {
                console.log("error when creating waterings");
                console.log(err);
                reject(err);
            });
        })
            .catch(function (err) {
            console.log("error from apply water");
            reject("error from apply water");
        });
    });
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map