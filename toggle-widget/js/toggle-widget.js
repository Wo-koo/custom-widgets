var toggle = document.querySelector('.toggle');
var toggleBtn = document.querySelector('.toggle-btn');

toggle.addEventListener('click',function(){
  if(toggle.classList.contains('on')){
    toggle.classList.add('off');
    toggle.classList.remove('on');
  }else	{
    toggle.classList.add('on');
    toggle.classList.remove('off');
  }
});

