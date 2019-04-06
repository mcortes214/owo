var arrayUs = ['u','ū','ú','ǔ','ù','ŭ','û','ü','ů','ų','ũ','ű','ȕ','ṳ','ṵ','ṷ','ṹ','ṻ','ǖ','ǘ','ǚ','ǜ','ủ','ụ','ư','ừ','ử','ữ','ứ','ự'];
//inicio
$('document').ready(function(){
  $('.uwuContent').html(nuevoUwu());
});
//evento de click
$('.btnGenerar').click(function(){
  console.log('click');
  $('.uwuContent').html(nuevoUwu());
});

//declaración de función
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
