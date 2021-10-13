import express, { response } from "express"

const app = express()

/**
 * @module api
 */

/**
 * Index route
 * @name index
 * @path {GET} /
 */
app.get("/", (req, res) => response.send("JsDoc example"))

/**
 * Products route
 * @name users
 * @path {POST} /users
 */
app.post("/users", (req, res) => response.send("JsDoc example"))

/**
 * Products route
 * @name products
 * @path {DELETE} /products
 */
app.delete("/products", (req, res) => response.send("JsDoc example"))

/**
 * Signin route
 * @name signin
 * @path {POST} /signin
 */
app.post("/signin", (req, res) => response.send("JsDoc example"))
