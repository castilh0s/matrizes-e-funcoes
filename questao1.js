var xa = 2
var xb = 3
var ya = 3
var yb = 2

function matrizA(x, y) {
  for (var i = 1; i <= x; i++) {
    for (var j = 1; j <= y; j++) {
      console.log(i + "," + j + " = " + funcaoA(i, j))
    }
  }
}

function matrizB(x, y) {

}

function funcaoA(i, j) {
  if (i < j)      return ((2 * i) + (3 * Math.pow(j, 2)))
  else if (i > j) return ((3 * (Math.pow(i, 2))) - (2 * j))
  else            return -3
}

matrizA(xa, ya)