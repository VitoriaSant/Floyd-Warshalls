matriz = new Array();

function criandoArray() {
  for (var i = 0; i <= 3; i++) {
    var array = new Array();
    for (var j = 0; j <= 3; j++) {
      var input = document.getElementById("ary" + i + j);
      array[j] = input.value;
    }
    matriz[i] = array;
  }
  calcmatriz();
}

function calcmatriz() {
  for (var k = 0; k <= 3; k++) {
    for (var i = 0; i <= 3; i++) {
      for (var j = 0; j <= 3; j++) {
        var a = parseInt(matriz[i][k]);
        var b = parseInt(matriz[k][j]);
        var soma = a + b;
        if (soma < parseInt(matriz[i][j])) {
          matriz[i][j] = soma;
        }
      }
    }
  }
  resultado();
}

function resultado() {
  for (var i = 0; i <= 3; i++) {
    var linha = "";
    var p = document.getElementById("linha" + i);
    for (var j = 0; j <= 3; j++) {
      linha = linha + "        " + matriz[i][j];
    }
    p.appendChild(document.createTextNode(linha));
  }
}
