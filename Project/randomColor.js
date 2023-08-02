const getColor=()=>{
    const randomNumber = Math.floor(Math.random() *16777215);
    const randomColor = "#" + randomNumber.toString(16)
    // console.log(randomNumber,randomColor)
    document.body.style.backgroundColor = randomColor;
    document.getElementById('colorChange').innerHTML = randomColor;
    navigator.clipboard.writeText(randomColor)
}


// event call
document.getElementById('btn').addEventListener('click',getColor);


// initial call
getColor();