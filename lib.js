const $arg = require("arg");
const paramCase = require("param-case").paramCase;

module.exports = arg

function arg(args = {}) {
  const $args = $arg(args);
  const $paramCase = (prop) => `--${paramCase(prop)}`;
  return new Proxy($args, {
    get(target, prop) {
      return target[$paramCase(prop)];
    },
    set(target, prop, value) {
      try {
        target[$paramCase(prop)] = value;
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    }
  });
}
