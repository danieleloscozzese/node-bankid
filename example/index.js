"use strict";

// Note that this example code was designed to be run directly from this
// folder, some values may have to be changed if you copy and paste this
// code into your own project.

const path = require("path");
const bankid = require("../lib/index");

function handleError(err) {
  console.log(err);
}

const options = {
  pfx: path.resolve(__dirname + "/" + "../certs/FPTestcert5_20240610.p12"),
  passphrase: "qwerty123",
  env: "test",
};

// This example shows how to use the bankid module to create a new service instance that
// can be used to then access the BankID API-endpoints.
bankid(options, (err, service) => {
  if (err) return handleError(err);

  service.authenticate({ endUserIp: "127.0.0.1" }, (err, response) => {
    if (err) return handleError(err);
    console.log(response);
  });
});
