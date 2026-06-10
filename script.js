function carregar(){
    //alert("bem vindo ao JavaScript")
    var msg = window.document.getElementByld('msg')
    var img = window.document.getElementByld('imagem')

    var data = new Date()
    var hora = data getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minutos}Am`
}
