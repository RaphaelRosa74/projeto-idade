function verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var form = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        if( form.value.length == 0 || form.value > ano){
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(form.value)
            var genero = ''
            var img = document.getElementById('foto')
            if(fsex[0].checked){
                genero = 'Homem'
                if (idade >= 0 &&  idade < 18){
                    //criança - jovem
                    img.setAttribute('src', 'imagens/boy.jpg')
                } else if(idade < 50){
                    // jovem adulto - adulto
                    img.setAttribute('src', 'imagens/man.jpg')
                } else{
                    //idoso
                    img.setAttribute('src', 'imagens/old-man.jpg')
                }
            } else if (fsex[1].checked){
                genero = 'Mulher'
                if (idade >= 0 &&  idade < 18){
                    //criança - jovem
                    img.setAttribute('src', 'imagens/girl.jpg')
                } else if(idade < 50){
                    // jovem adulto - adulto
                    img.setAttribute('src', 'imagens/woman.jpg')
                } else{
                    //idoso
                    img.setAttribute('src', 'imagens/old-woman.jpg')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Então você é ${genero} com ${idade} anos. Que legal!`
            res.appendChild(img)
        }
}