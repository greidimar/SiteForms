
document.querySelector("#botao-cadastrar").addEventListener("click", (e) => {
    e.preventDefault()
    //console.log("cadastrar...")

   const form = document.querySelector("form")
   //json origem
   const tarefa = {
    id:"id" + new Date().getTime(),
    titulo: form.titulo.value,
    descricao: form.descricao.value,
    pontos: form.pontos.value
   }

   //console.log(form.titulo.value)


  salvar(tarefa)

})

function salvar(tarefa){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    window.location = "index.html"
}







