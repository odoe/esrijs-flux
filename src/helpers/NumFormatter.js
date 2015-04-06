define([
  'dojox/lang/functional/curry'
], function(
  curry
) {
  return curry(function(i, n) {
    if (n === undefined) {
      return 0;
    }
    return n.toFixed(i);
  });
});
