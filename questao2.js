var x = 2
var y = 3

function matriz (x, y) {
  for (var i = 1; i <= x; i++) {
    for (var j = 1; j <= y; j++) {
      console.log(i + "," + j + " = " + funcao(i, j))
    }
  }
}

function funcao (i, j) {
  if (i > j)      return Math.pow(i, j)
  else if (i < j) return Math.pow(j, i)
  else            return 0
}

matriz(x, y)