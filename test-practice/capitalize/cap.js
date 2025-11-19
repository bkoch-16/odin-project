function capitalize(input) {
  const output = input.slice(0, 1).toUpperCase() + input.slice(1);
  return output;
}

module.exports = capitalize;
