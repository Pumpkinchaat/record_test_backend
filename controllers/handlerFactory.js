const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

const { generateJWT } = require("./jwt");

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {});

exports.authorizeUser = (Model) =>
  catchAsync(async (req, res, next) => {});

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {});

exports.createOne = (Model, returnJWT = false) =>
  catchAsync(async (req, res, next) => {});

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {});

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {});
