var jsonTxt = '{ "estudiantes":[' +
               '{"codigo":"0001","nombre":"Pepe","nota":"8.6"},' +
               '{"codigo":"0002","nombre":"Pepe","nota":"8.5"},' +
               '{"codigo":"0003","nombre":"Pepe","nota":"9.4"},' +
               '{"codigo":"0004","nombre":"Pepe","nota":"9.2"},' +
               '{"codigo":"0005","nombre":"Pepe","nota":"7.3"},' +
               '{"codigo":"0006","nombre":"Pepe","nota":"7.7"},' +
               '{"codigo":"0007","nombre":"Pepe","nota":"8.6"},' +
               '{"codigo":"0008","nombre":"Pepe","nota":"7.1"},' +
               '{"codigo":"0009","nombre":"Pepe","nota":"9.1"},' +
               '{"codigo":"0010","nombre":"Pepe","nota":"8.5"}' +
                ']}';

var jsonObj = JSON.parse(jsonTxt)

function btn1() {
  var txt = "<-----Lista-----><br/>";

  for(var i=0;i<jsonObj.estudiantes.length;i++){
    txt += "Código: "+jsonObj.estudiantes[i].codigo+" - Nombre: "+jsonObj.estudiantes[i].nombre+" - Nota: "+Number(jsonObj.estudiantes[i].nota)+"<br/>";
  }
  document.getElementById("text1").innerHTML = txt;
}

function btn2() {
  var nmbrs = 0;
  for(var i=0;i<jsonObj.estudiantes.length;i++){
    nmbrs += Number(jsonObj.estudiantes[i].nota);
  }
  var txt = "El promedio de notas es: " + (nmbrs / jsonObj.estudiantes.length);
  document.getElementById("text2").innerHTML = txt;
}

function btn3() {
  var max = 0;
  for(var i=0;i<jsonObj.estudiantes.length;i++){
    var nmbr = Number(jsonObj.estudiantes[i].nota);
    if(nmbr > max){
      max = nmbr;
    }
  }
  var txt = "La nota más alta es: " + max;
  document.getElementById("text3").innerHTML = txt;
}

function btn4() {
  var min = Infinity;
  for(var i=0;i<jsonObj.estudiantes.length;i++){
    var nmbr = Number(jsonObj.estudiantes[i].nota);
    if(nmbr < min){
      min = nmbr;
    }
  }
  var txt = "La nota más baja es: " + min;
  document.getElementById("text4").innerHTML = txt;
}
