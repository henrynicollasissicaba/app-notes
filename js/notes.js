// variável global do localstorage
// salvar notas no localstorage
export let notes = JSON.parse(localStorage.getItem("notes") || "[]") 