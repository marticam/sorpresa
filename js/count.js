// var button = document.getElementById("clickme");
// var para = document.getElementById("prueba");
// count = 0;
// button.onclick = function() {
//   // var x = Math.floor((Math.random() * 10) + 1);
//   count += 1;
//   para.innerHTML = "Votos hasta el momento " + count;
// };

function on() {
  document.getElementById("reveal").style.display = "block";
  setTimeout(function(){
    window.location.href = '/src/positive.html';
 }, 5000);
}

