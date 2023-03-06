const jokes = document.querySelector("#joke");
const jokesBtn = document.querySelector("#jokeBtn");

const generateJokes =async ()=>{

    try{
    const setHeaders={
        headers:{
           accept: "application/json"
        }
    }

const res =await fetch('https://icanhazdadjoke.com',setHeaders)
const data = await res.json();
jokes.innerHTML =data.joke;

    }catch(errr){
      console.log(errr);
    }
}

jokesBtn.addEventListener("click",generateJokes);
generateJokes();
