const express = require("express");
const Route = express.Router();
const formidable = require("express-formidable");
const { BlogCreate, ShowAllBlogs } = require("../Controller/BlogController");

//Blog Routes
Route.post("/blog", formidable(), BlogCreate);
Route.get("/blog", ShowAllBlogs);

module.exports = Route;
