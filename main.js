// function to display content


function display_content(content){
    result.value+=content
}

//clear input

function disp_clear(){
    result.value=""
}

//calculating result

function calc_output(){
    // console.log(result.value);
    result.value=eval(result.value)
}

//backspace

function removeLastDigit(){
    result.value=result.value.slice(0,-1)
}