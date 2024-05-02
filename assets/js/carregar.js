

const tarefas = JSON.parse(localStorage.getItem("tarefas"))


tarefas.forEach( tarefa =>  
//console.log(tarefa)
card(tarefa)

)

function card(tarefa)
{
    //template literals
const content = `<div class="nes-container with-title is-centered">
<p class="title">${tarefa.titulo}</p>
<p> ${tarefa.descricao}</p>
<a href="#" class="nes-badge is-icon">
    <span class="is-sucess"> ${tarefa.pontos}</span>
    <span class="is-primary">+150</span>
</a>

<progress class="nes-progress is-sucess" value="10" max="100"> </progress>

<button type="button" class="nes-btn is-primary">-</button>
<button onclick="apagar('${tarefa.id}')" type="button" class="nes-btn is-error">Apagar</button>
<button type="button" class="nes-btn is-primary">+</button>
</div>`

const card = document.createElement("div")
card.id = tarefa.id
card.innerHTML = content

document.querySelector("#lista-de-tarefas").appendChild(card)

}
    
