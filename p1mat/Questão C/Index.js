function changeColor(newColor) {
    const elem = document.getElementById('js');
    elem.style.color = newColor;
  }

  function btntog() {
    var x = document.getElementById("js");
    if (x.innerHTML === "Hello") {
      x.innerHTML = "Texto modificado";
    } else {
      x.innerHTML = "Texto modificado";
    }
  } 

  function show() {

      document.getElementById('image')
              .style.display = "block";

      document.getElementById('btnID')
              .style.display = "none";
  }
  function mostra() {

      document.getElementById('imagelua')
              .style.display = "block";

      document.getElementById('IDdois')
              .style.display = "none";
  }

  function ToggleIm() {
    let x = document.getElementById("image");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
      document.getElementById("image").src = "lua-vermelha-chamou-atencao-na-noite-de-ontem-o-que-aconteceu-282251-1_768.webp"
      x.style.display = "block";
    }
    var y = document.get

  }