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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/URLs.js":
/*!****************************!*\
  !*** ./src/config/URLs.js ***!
  \****************************/
/*! exports provided: gatewayBaseURL, humidityMeansurePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatewayBaseURL", function() { return gatewayBaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humidityMeansurePath", function() { return humidityMeansurePath; });
const gatewayBaseURL = "http://192.168.0.10:8000";
const humidityMeansurePath = "/sensors/humidity";


/***/ }),

/***/ "./src/config/config.json":
/*!********************************!*\
  !*** ./src/config/config.json ***!
  \********************************/
/*! exports provided: development, test, production, default */
/***/ (function(module) {

module.exports = {"development":{"username":"postgres","password":"postgres","database":"awsdb_dev","host":"127.0.0.1","dialect":"postgres"},"test":{"username":"postgres","password":"postgres","database":"awsdb_test","host":"127.0.0.1","dialect":"postgres"},"production":{"username":"postgres","password":"postgres","database":"awsdb_production","host":"127.0.0.1","dialect":"postgres"}};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes_sensors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/sensors */ "./src/routes/sensors.js");
/* harmony import */ var _routes_measurements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/measurements */ "./src/routes/measurements.js");
/* harmony import */ var _routes_plants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/plants */ "./src/routes/plants.js");
/* harmony import */ var _routes_waterings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/waterings */ "./src/routes/waterings.js");
let express = __webpack_require__(/*! express */ "express");





let server = express();

server.use("/sensors", _routes_sensors__WEBPACK_IMPORTED_MODULE_0__["default"]);
server.use("/measurements", _routes_measurements__WEBPACK_IMPORTED_MODULE_1__["default"]);
server.use("/plants", _routes_plants__WEBPACK_IMPORTED_MODULE_2__["default"]);
server.use("/waterings", _routes_waterings__WEBPACK_IMPORTED_MODULE_3__["default"]);

server.use("/", (req, res) => {
  console.log("Hello from test");
  res.json({ status: "success" });
});
server.listen(8000, () => {
  console.log("server running on port 8000");
});


/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);



const env = "development" || "development";
const config = __webpack_require__(/*! ./src/models/../config/config.json */ "./src/config/config.json")[env];

let models = {};

function getModels(config, force = false) {
  if (Object.keys(models).length && !force) {
    return models;
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

  // Initialize models
  modules.forEach(module => {
    const model = module(sequelize, sequelize__WEBPACK_IMPORTED_MODULE_0___default.a, config);
    models[model.name] = model;
  });

  // Apply associations
  Object.keys(models).forEach(key => {
    if ("associate" in models[key]) {
      models[key].associate(models);
    }
  });

  models.sequelize = sequelize;
  models.Sequelize = sequelize__WEBPACK_IMPORTED_MODULE_0___default.a;

  return models;
}

getModels(config, false);
/* harmony default export */ __webpack_exports__["default"] = (models);


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

/***/ "./src/routes/measurements.js":
/*!************************************!*\
  !*** ./src/routes/measurements.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/index */ "./src/models/index.js");


const router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();

router.get("/:plantID", (req, res, next) => {
  _models_index__WEBPACK_IMPORTED_MODULE_1__["default"].measurements
    .measurements(req.params.plantID)
    .then(values => {
      res.json(values);
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

router.get("/last/:plantID", (req, res, next) => {
  _models_index__WEBPACK_IMPORTED_MODULE_1__["default"].measurements
    .measurements(req.params.plantID, true)
    .then(values => {
      res.json(values);
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./src/routes/plants.js":
/*!******************************!*\
  !*** ./src/routes/plants.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/index */ "./src/models/index.js");


const router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();

router.get("/", (req, res, next) => {
  console.log(_models_index__WEBPACK_IMPORTED_MODULE_1__["default"].plants);
  _models_index__WEBPACK_IMPORTED_MODULE_1__["default"].plants
    .all()
    .then(values => {
      res.json(values);
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./src/routes/sensors.js":
/*!*******************************!*\
  !*** ./src/routes/sensors.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/index */ "./src/models/index.js");
/* harmony import */ var _utils_pi_gateway_calls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/pi_gateway_calls */ "./src/utils/pi_gateway_calls.js");



const router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();

router.get("/humidity", (req, res, next) => {
  console.log("request recieved humidity");
  // let measuredValue = Math.random();
  // console.log(measuredValue);
  let sensorID = 1;
  let plantID = 1;
  Object(_utils_pi_gateway_calls__WEBPACK_IMPORTED_MODULE_2__["humidityMeasurement"])(plantID, sensorID)
    .then(measurement => res.json(measurement))
    .catch(err => {
      res.status(500).send({ error: err });
    });
});

// router.get("/all")

router.get("/db", (req, res, next) => {
  Promise.all([
    _models_index__WEBPACK_IMPORTED_MODULE_1__["default"].plants.findOne({ where: { name: "Basil" } }),
    _models_index__WEBPACK_IMPORTED_MODULE_1__["default"].measurements.findAll({
      include: [{ model: _models_index__WEBPACK_IMPORTED_MODULE_1__["default"].plants, where: { name: "Maskros" } }]
    }),
    _models_index__WEBPACK_IMPORTED_MODULE_1__["default"].measurements.scope("lastMeasurement").findAll()
  ])
    .then(queryRes => {
      res.json({
        status: "success",
        plant: JSON.stringify(queryRes[0]),
        measurement: JSON.stringify(queryRes[1]),
        scope: JSON.stringify(queryRes[2])
      });
    })
    .catch(err => console.log(err));
});

/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./src/routes/waterings.js":
/*!*********************************!*\
  !*** ./src/routes/waterings.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/index */ "./src/models/index.js");
/* harmony import */ var _utils_pi_gateway_calls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/pi_gateway_calls */ "./src/utils/pi_gateway_calls.js");



const router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();

router.post("/:plant_id", (req, res, next) => {
  let plant_id = req.params.plant_id;
  _models_index__WEBPACK_IMPORTED_MODULE_1__["default"].plants
    .findOne({ where: { id: plant_id } })
    .then(plant => {
      if (plant !== null) {
        Object(_utils_pi_gateway_calls__WEBPACK_IMPORTED_MODULE_2__["applyWater"])(plant_id)
          .then(values => {
            res.json(values);
          })
          .catch(err => {
            res.status(500).json({ err: err });
          });
      } else {
        res.status(404).json({ err: "could not find plant" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(405).json({ err: "could not find plant" });
    });
});

/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./src/utils/pi_gateway_calls.js":
/*!***************************************!*\
  !*** ./src/utils/pi_gateway_calls.js ***!
  \***************************************/
/*! exports provided: humidityMeasurement, applyWater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humidityMeasurement", function() { return humidityMeasurement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyWater", function() { return applyWater; });
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/index */ "./src/models/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_URLs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/URLs */ "./src/config/URLs.js");




const humidityMeasurement = (plantID, sensorID) => {
  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a
      // .get(routes.gatewayBaseURL + routes.humidityMeansurePath)
      .get(
        "https://1b6a59c8-b449-4360-a30c-d0d6220dfb77.mock.pstmn.io" +
          _config_URLs__WEBPACK_IMPORTED_MODULE_2__["humidityMeansurePath"]
      )
      .then(sensorRes => {
        _models_index__WEBPACK_IMPORTED_MODULE_0__["default"].measurements
          .create({
            plant_id: plantID,
            sensor_id: sensorID,
            value: sensorRes.data.toFixed(3)
          })
          .then(measurement => {
            wateringJudge(measurement.value, plantID);
            console.log("forsätter...");
            resolve(JSON.stringify(measurement));
          })
          .catch(err => {
            console.log("couldn't save measurement to db", err);
            reject("couldn't save measurement to db");
          });
      })
      .catch(err => {
        console.log("Error with pi humidity request", err);
        reject("Error with pi humidity request");
      });
  });
};

const wateringJudge = (measurement, plantID) => {
  let dryThreshold = 0.5;
  if (measurement < dryThreshold) applyWater(plantID);
  console.log("wateringJudge returning");
  return;
};

const applyWater = plantID => {
  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a
      .get(
        "https://1b6a59c8-b449-4360-a30c-d0d6220dfb77.mock.pstmn.io" +
          routes.humidityMeansurePath
      )
      .then(res => {
        console.log("water was applied");
        _models_index__WEBPACK_IMPORTED_MODULE_0__["default"].waterings
          .create({ plant_id: plantID })
          .then(values => {
            resolve(JSON.stringify(values));
          })
          .catch(err => {
            console.log(err);
            reject({ err });
          });
      })
      .catch(err => {
        console.log("error from apply water", err);
        reject(err);
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