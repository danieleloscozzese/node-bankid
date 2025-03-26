"use strict";

const BankID = require("./BankID.js");
const BankIDService = require("./BankIDService.js");

type bankIDServiceCallback = (
  err: Error | null,
  service?: typeof BankIDService
) => void;

/**
 * Configures the client and create the BankID service.
 *
 * @param options - An array of options to configure the soap client.
 * @param callback - Callback that is run when the client and service has been created.
 */
module.exports = (
  options: { env: string; pfx: string; passphrase: string },
  callback: bankIDServiceCallback
) => {
  const optionsError = BankID.validateOptions(options);

  if (optionsError instanceof Error) {
    return callback(optionsError);
  }

  const env = options.env ?? "test";

  BankID.loadCertificateAuthority(env, (err, ca) => {
    if (err) return callback(err);

    BankID.loadSSLCertificate(options.pfx, (err, cert) => {
      if (err) return callback(err);

      const serviceOptions = {
        env,
        ca: ca,
        pfx: cert,
        passphrase: options.passphrase,
      };

      callback(null, new BankIDService(serviceOptions));
    });
  });
};
