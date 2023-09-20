#!/usr/bin/env node

const { bearSay } = require('./index');

const message = process.argv[2];

console.log(bearSay(message));