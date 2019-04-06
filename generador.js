$('document').ready(function(){
  var arrayUs = ['u','ū','ú','ǔ','ù','ŭ','û','ü','ů','ų','ũ','ű','ȕ','ṳ','ṵ','ṷ','ṹ','ṻ','ǖ','ǘ','ǚ','ǜ','ủ','ụ','ư','ừ','ử','ữ','ứ','ự'];
  console.log(nuevoUwu());
});
$('.btnGenerar').click(function(){
  $('.uwuContent').html(nuevoUwu());
});
function nuevoUwu(){
  var a, b, r, s;
  //1er componente
  r = parseInt(Math.random()*arrayUs.length);
  a = arrayUs[r];
  //2do componente
  r = parseInt(Math.random()*arrayUs.length);
  b = arrayUs[r];
  //concatenar componentes
  s = a + 'w' + b;
  return s;
}
