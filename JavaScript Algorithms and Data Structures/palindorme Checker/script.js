const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');
button.addEventListener("click", function(){
    const check = input.value.toLowerCase();
    console.log(check);
    const array = check.split('');
    console.log(array);
    array.reverse();
    console.log(array);
    const join = array.join('');
    console.log(join);
    console.log(check===join);
    if(input.value===join){
        result.innerText = `${input.value} is a Palindrome`;
    }else{
        result.innerText = `${input.value} is not a Palindrome`;
    }
  });
