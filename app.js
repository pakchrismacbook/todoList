const ul = document.querySelector('ul');
const input = document.querySelector('input[type="text"]');

ul.addEventListener('click', function(e){
  if(e.target.tagName==='LI'){
    e.target.classList.toggle('crossed');
  } else if(e.target.tagName==='SPAN'){
    e.stopPropagation();
    e.target.parentNode.remove();
  } else if(e.target.tagName==='I'){
    e.stopPropagation();
    e.target.parentNode.parentNode.remove();
  }
});

input.addEventListener('keypress', function(e){
  if(e.keyCode===13){
    let inputValue = this.value;
    let li = document.createElement('li');
    li.innerHTML = '<span><i class="fa fa-trash"></i></span> ';
    li.appendChild(document.createTextNode(inputValue));
    ul.appendChild(li);
    input.value = '';
  }
});

document.querySelector('.fa-plus').addEventListener('click', function(){
  input.classList.toggle('input-toggle');
});
