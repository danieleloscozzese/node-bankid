"use strict";

// Note that this example code was designed to be run directly from this
// folder, some values may have to be changed if you copy and paste this
// code into your own project.

import path from "node:path";
import bankid from "../lib/index.cts";

const options = {
  pfx: path.resolve(import.meta.dirname + "/" + "../certs/FPTestcert5_20240610.p12"),
  passphrase: "qwerty123",
  env: "test",
};

// This example shows how to use the bankid module to create a new service instance that
// can be used to then access the BankID API-endpoints.
bankid(options, (err, service) => {
  if (err) {
    console.error(err);
    return;
  } else {
    service.authenticate({ endUserIp: "127.0.0.1" }, (err, response) => {
      if (err) {
        console.error(err);
      } else {
        console.log(response);
      }
    });
  }
});
