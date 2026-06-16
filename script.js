function carregar(){
    //alert("bem vindo ao JavaScript")
    var msg = window.document.getElementByld('msg')
    var img = window.document.getElementByld('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minutos}Am`
      if(hora >= 0 && hora<12){
        img.src = 'manha.png'
        document.body.style.background = '#ffb703'
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#00b4d8'
    }
    else{
        img.src = 'noite.png'
        document.body.style.background = '#000814'

}}
