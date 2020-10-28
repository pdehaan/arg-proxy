const arg = require("./lib");

const args = arg({
  "--name": String,
  "--flat": Boolean,
  "--include-betas": Boolean,
  "--min-version": Number,
});

console.log({
  flat: args.flat,
  includeBetas: args.includeBetas,
  minVersion: args.minVersion,
  name: args.name,
});
