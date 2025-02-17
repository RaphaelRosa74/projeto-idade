function verificar(){
        var data = new Date()
        var ano = data.getFullYear
        var form = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        if( form.value.length == 0 || form.value > ano){
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } 
}