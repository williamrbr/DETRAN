function clicar(){
  let vel2 = document.querySelector("input#vel")
  let soma = document.querySelector("div#res")
  let vel3 = Number(vel2.value)
  soma.innerHTML = `${vel3} km/h `
  if(vel3 > 60){
    soma.innerHTML += "Você está <strong>MULTADO!</strong>"
  }
  else if (vel3 <= 60) {
    soma.innerHTML += "Dirija com cuidado e use cinto de segurança"
  }
}
