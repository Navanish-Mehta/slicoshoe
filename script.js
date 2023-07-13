
let shoe=document.querySelectorAll('.shoe');
 let index=0;


function next()
{
  shoe[index].classList.remove('active');
  index=(index + 1) % shoe.length;
  shoe[index].classList.add('active');
}  
function prev()
{
  shoe[index].classList.remove('active');
  index=(index - 1 +shoe.length) % shoe.length;
  shoe[index].classList.add('active');
}


function myFunction() {
  alert("You are being redirecting to our page");
}