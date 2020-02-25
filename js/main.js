let checkbox = document.querySelector('.toggle__checkbox')

checkbox.addEventListener('change', function() {
  if(!document.getElementById('rtl')) {
    var link = document.createElement('link');
    link.id = 'rtl';
    link.rel = 'stylesheet';
    link.href = "./css/rtl.css";
    document.head.appendChild(link);
  } else {
    document.head.removeChild(document.getElementById('rtl'))
  }
})