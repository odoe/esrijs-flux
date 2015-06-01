import curry from 'dojox/lang/functional/curry';

export default curry(function(i, n) {
  if (n === undefined) {
    return 0;
  }
  return n.toFixed(i);
});
