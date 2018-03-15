module.exports = function count(s, pairs) {
  var N = 1;
  var result = 0;
  var test = "";
  for (var i = 0; i < pairs.length; i++) {
    N *= Math.pow(pairs[i][0], pairs[i][1]);
    if (N > 100000000) return 0;
  }
  for (var k = 0; k < N; k++) {
    for (var j = 0; j < s.length; j++) {
      if (nod(k + j, N) == 1) {
        test +=  "1";
      } else {
        test +=  "0";
      }
    }
  }
  var pos = 0;
  while (pos < test.length) {
    var foundPos = test.indexOf(s, pos);
    if (foundPos == -1) {
      break;
    } else {
      result++;
    }
    pos = foundPos + 1;
  }
  return result % 1000000007;
}

function nod(a, b) {
  if (b == 0) return a;
  return nod(b, a % b);
}