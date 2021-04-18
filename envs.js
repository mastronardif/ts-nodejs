"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbName = exports.dbPassword = exports.dbUsername = exports.port = exports.appUrl = exports.isTest = exports.isDevelopment = exports.env = void 0;
require('dotenv').config();
// Node
var env = process.env.NODE_ENV || 'development';
exports.env = env;
var isDevelopment = env === 'development';
exports.isDevelopment = isDevelopment;
var isTest = env === 'test';
exports.isTest = isTest;
// Base
var appUrl = process.env.APP_URL || 'localhost';
exports.appUrl = appUrl;
var port = Number(process.env.PORT || '3000');
exports.port = port;
// Database
var dbUsername = process.env.DB_USERNAME || '';
exports.dbUsername = dbUsername;
var dbPassword = process.env.DB_PASSWORD || '';
exports.dbPassword = dbPassword;
var dbName = process.env.DB_NAME || '';
exports.dbName = dbName;
