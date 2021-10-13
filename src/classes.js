/**
 * Class to create a Programmer
 * @example
 * const newProgrammer = new Programmer({ fullname: "anbreaker" }, "javascript")
 * newProgrammer.getInfo()
 * @see https://github.com/anbreaker/js-doc/tree/main/src
 * @todo Implement the rest of methods
 * @tutorial tutorial
 */
class Programmer {
  /**
   * @param {{fullname: string}} user User's information
   * @param {String} language A programming language
   */
  constructor(user, language) {
    this.fullname = user.fullname
    this.language = language
  }

  /**
   * Get Programmer Information
   * @returns {void}
   */
  getInfo() {
    console.log(
      `I am ${this.fullname} and my favourite programming languaje is ${this.language}`
    )
  }
}

/**
 * Know more in {@link Programmer}
 */
const programmer1 = new Programmer({ fullname: "anbreaker" }, "javascript")
const programmer2 = new Programmer({ fullname: "jeje" }, "pt")

programmer1.getInfo()
programmer2.getInfo()
