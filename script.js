(function () {
  // 1.1
  var button = document.getElementById("ex1_button");
  button.onclick = function() {
    var values = []
    for(var i=0;i<=9;i++) {
      values.push(i);
    }
    var content = document.getElementById("ex1_content");
    content.innerHTML = values.toString();
  }
  // 1.2 /*
  ////var text = document.getElementById("ex2_text");
  //text.oninput = function() {
  //  var field = text.innerHTML.toString();

  //  var content = document.getElementById("ex2_content");
  //  if(field.length()!=9) {

  //  }
  //}*/


})();