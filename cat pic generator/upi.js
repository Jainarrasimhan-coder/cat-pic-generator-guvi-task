let generate_btn = document.querySelector(".generate_btn");
// console.log(generate_btn)
generate_btn.addEventListener("click", fetchpics);
let catsimgE1 = document.createElement("img")
catsimgE1.setAttribute('src', `https://tse4.mm.bing.net/th?id=OIP.RGO2_JeImrSM658MPIASrwHaEo&pid=Api&P=0&w=254&h=160`)
catsimgE1.classList.add("catsimgdiv")
let catsimgdiv = document.querySelector(".catsimgdiv");
catsimgdiv.appendChild(catsimgE1)


function fetchpics() {
    let counter = document.querySelector(".catsimgdiv");
    counter.innerHTML = ''

    fetch(`https://api.thecatapi.com/v1/images/search`)
        .then(response => response.json())
        .then((data) => {
            let catsimgurl = data[0].url
            let catsimgE1 = document.createElement("img")
            catsimgE1.setAttribute('src', `${catsimgurl}`)
            catsimgE1.classList.add("catsimgdiv")
            let catsimgdiv = document.querySelector(".catsimgdiv");
            catsimgdiv.appendChild(catsimgE1)



        })
        .catch(err => console.log(err))
}