function contarAlunosAprovados() {
    var n = Math.trunc(Math.random() * 10);
    var nota;
    var cont = 0;
    var i = 0;
  
    while (i < n) {
      nota = Math.trunc(Math.random() * 10);
  
      if (nota >= 50) {
        cont = cont + 1;
      }
  
      i = i + 1;
    }
  
    return cont;
  }
  
  
  module.exports = contarAlunosAprovados