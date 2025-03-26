"use strict";

class BankIDError extends Error {
  #code: string;

  name = "BankIDError";

  get code() {
    return this.#code;
  }

  constructor(message: string, code: string) {
    super(message);

    Error.captureStackTrace(this, this.constructor);

    this.message = message;
    this.#code = code;
  }
}

module.exports = BankIDError;
