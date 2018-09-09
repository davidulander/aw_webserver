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

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/config/URLs.js":
/*!****************************!*\
  !*** ./src/config/URLs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  gatewayBaseURL: "http://192.168.0.10:8000",
  humidityMeansurePath: "/sensors/humidity"
};


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let express = __webpack_require__(/*! express */ "express");
const sensors = __webpack_require__(/*! ./routes/sensors */ "./src/routes/sensors.js");
const measurements = __webpack_require__(/*! ./routes/measurements */ "./src/routes/measurements.js");
const plants = __webpack_require__(/*! ./routes/plants */ "./src/routes/plants.js");
const waterings = __webpack_require__(/*! ./routes/waterings */ "./src/routes/waterings.js");

let server = express();

server.use("/sensors", sensors);
server.use("/measurements", measurements);
server.use("/plants", plants);
server.use("/waterings", waterings);

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename, __dirname) {

const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const Sequelize = __webpack_require__(/*! sequelize */ "sequelize");
const basename = path.basename(__filename);
const env = "development" || "development";
const config = __webpack_require__(/*! ./src/models/../config/config.json */ "./src/config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

/* WEBPACK VAR INJECTION */}.call(this, "/index.js", "/"))

/***/ }),

/***/ "./src/routes/measurements.js":
/*!************************************!*\
  !*** ./src/routes/measurements.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");
const router = express.Router();
const db = __webpack_require__(/*! ../models/index */ "./src/models/index.js");

router.get("/:plantID", (req, res, next) => {
  db.measurements
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
  db.measurements
    .measurements(req.params.plantID, true)
    .then(values => {
      res.json(values);
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

module.exports = router;


/***/ }),

/***/ "./src/routes/plants.js":
/*!******************************!*\
  !*** ./src/routes/plants.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/index */ "./src/models/index.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_index__WEBPACK_IMPORTED_MODULE_0__);
const express = __webpack_require__(/*! express */ "express");
const router = express.Router();


router.get("/", (req, res, next) => {
  console.log(_models_index__WEBPACK_IMPORTED_MODULE_0___default.a);
  _models_index__WEBPACK_IMPORTED_MODULE_0___default.a.plants
    .all()
    .then(values => {
      res.json(values);
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

module.exports = router;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/routes/sensors.js":
/*!*******************************!*\
  !*** ./src/routes/sensors.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");
const router = express.Router();
const { humidityMeasurement } = __webpack_require__(/*! ../utils/pi_gateway_calls */ "./src/utils/pi_gateway_calls.js");

router.get("/humidity", (req, res, next) => {
  console.log("request recieved humidity");
  // let measuredValue = Math.random();
  // console.log(measuredValue);
  let sensorID = 1;
  let plantID = 1;
  humidityMeasurement(plantID, sensorID)
    .then(measurement => res.json(measurement))
    .catch(err => {
      res.status(500).send({ error: err });
    });
});

// router.get("/all")

router.get("/db", (req, res, next) => {
  Promise.all([
    db.plants.findOne({ where: { name: "Basil" } }),
    db.measurements.findAll({
      include: [{ model: db.plants, where: { name: "Maskros" } }]
    }),
    db.measurements.scope("lastMeasurement").findAll()
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
module.exports = router;


/***/ }),

/***/ "./src/routes/waterings.js":
/*!*********************************!*\
  !*** ./src/routes/waterings.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");
const router = express.Router();
const db = __webpack_require__(/*! ../models/index */ "./src/models/index.js");
const piGateway = __webpack_require__(/*! ../utils/pi_gateway_calls */ "./src/utils/pi_gateway_calls.js");

router.post("/:plant_id", (req, res, next) => {
  let plant_id = req.params.plant_id;
  db.plants
    .findOne({ where: { id: plant_id } })
    .then(plant => {
      if (plant !== null) {
        piGateway
          .applyWater(plant_id)
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

module.exports = router;


/***/ }),

/***/ "./src/utils/pi_gateway_calls.js":
/*!***************************************!*\
  !*** ./src/utils/pi_gateway_calls.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(/*! axios */ "axios");
const routes = __webpack_require__(/*! ../config/URLs */ "./src/config/URLs.js");
let db = __webpack_require__(/*! ../models/ */ "./src/models/index.js");

const humidityMeasurement = (plantID, sensorID) => {
  return new Promise((resolve, reject) => {
    axios
      // .get(routes.gatewayBaseURL + routes.humidityMeansurePath)
      .get(
        "https://1b6a59c8-b449-4360-a30c-d0d6220dfb77.mock.pstmn.io" +
          routes.humidityMeansurePath
      )
      .then(sensorRes => {
        db.measurements
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
    axios
      .get(
        "https://1b6a59c8-b449-4360-a30c-d0d6220dfb77.mock.pstmn.io" +
          routes.humidityMeansurePath
      )
      .then(res => {
        console.log("water was applied");
        db.waterings
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

module.exports = {
  humidityMeasurement: humidityMeasurement,
  applyWater: applyWater
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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

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