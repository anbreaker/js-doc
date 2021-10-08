/**
 * List
 * @type {Array}
 */
const ages = [19, 20, 30, {}, 35, true]

/**
 * Array of users scores
 * @type {Array<Number>}
 */
let scores = [10, 199.99, 251, 44]
// scores = [10, 199.99, 251, 44, true] --> error by jsdocs tscheck true...

/**
 * Array of Number strings
 * @type {Array<Number|string>}
 */
let scoresAndString = [19, "19", "30", 45]
// scoresAndString = [19, 15, true] --> error by jsdocs tscheck true...

/**
 * Array of names
 * @type {Array<string>}
 */
const names = ["Magalí", "anbreaker", "jeje"]
// names.push(15) --> error by jsdocs tscheck number
names.push("curro")
