const joke =  document.querySelector(".joke")
const btn = document.querySelector(".jokebtn")

async function generatejoke() { 
    try{

        joke.classList.add('fade');

        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        if(!response.ok){
            throw new Error("failed to fetch joke !!!");
        }

        const data = await response.json();

        const fulljoke = `${data.setup}\n\n${data.punchline}😂`

        setTimeout(()=>{
            joke.textContent = fulljoke;
            joke.classList.remove('fade');
        },200)
    }catch (error) {
        jokeText.textContent = "Oops! Couldn't fetch a joke right now. 😅";
        console.error(error);
    }
    
}

btn.addEventListener("click",generatejoke);
