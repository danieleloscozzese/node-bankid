# BankID API Client

[![Build Status](https://travis-ci.org/oddhill/node-bankid.svg?branch=master)](https://travis-ci.org/oddhill/node-bankid)
[![Coverage Status](https://coveralls.io/repos/github/oddhill/node-bankid/badge.svg?branch=master)](https://coveralls.io/github/oddhill/node-bankid?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/oddhill/node-bankid.svg)](https://greenkeeper.io/)

This package will help you make requests to the BankID HTTP/JSON API.

## Requirements

- A pfx certificate issued by a certified Bank.
- The [request](https://www.npmjs.com/package/request) module needs to be installed as a dependency.

## Getting started

Run the following command in your terminal to install the module to your project.

### NPM

```
npm install @oddhill/bankid request
```

### Yarn

```
yarn add @oddhill/bankid request
```

## Example

Below is an example showing how to use the library when making a request to the Authenticate method on the BankID HTTP/JSON API.

```
const bankid = require('bankid);

const options = {
	pfx: './path-to-your-pfx-certificate.pfx',
	passphrase: 'certpassphrasse',
};

bankid(options, (err, service) => {
	if (err) console.log(err);

	const args = {
		personalNumber: '199801011234',
    endUserIp: '192.168.0.1',
	};

	service.authenticate(args, (err, response) => {
		console.log(response);
	});
});
```
