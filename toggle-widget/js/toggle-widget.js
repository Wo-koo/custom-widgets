var toggle = document.querySelector('.toggle');
var taggleBtn = document.querySelector('toggle-btn');

toggle.addEventListener('click',function(){
  if(toggle.attributes.class.contains('on')){
    toggle.attributes.class.removeChild('on');
    toggle.attributes.class.appendChild('off');
  }else	{
    toggle.attributes.class.removeChild('off');
    toggle.attributes.class.appendChild('on');
  }
});


