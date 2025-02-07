const arr=[12, 11, 0, 7, 54, 63, 81, 19, 5, 2];
const evenFilter= (arr) => {
    let arrFilter;
    arrFilter= arr.filter(item => item%2===1)
    console.log(arrFilter);
}
evenFilter(arr)

let container= document.querySelector(".container");
const jokeRandom= async () => {
    let content=[];
    // while(!content.length) {
    //     container.textContent= "Loading"
    // }
    container.textContent="";
    const URL= "https://api.chucknorris.io/jokes/random"
    const response= await fetch(URL, {
        method:"GET"
    });
    content= await response.json();
    console.log(content)
}
jokeRandom();


const array=[12, 6, 84, 32, 9, 45];
const sortFunction= (arr) => {
    arr.sort((a, b) => (a-b));
    console.log(arr)
}
sortFunction(array)


const changeColorBG= document.querySelector("#changeColorBtn");
changeColorBG.addEventListener("click", () => {
    document.body.style.backgroundColor ="rgb(228, 180, 217)";
})

