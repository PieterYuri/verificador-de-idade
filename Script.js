function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[erro] tente novamente')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       //res.innerHTML = (`Sua idade e ${idade}`);
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
           gênero = 'homem'
           if (idade >= 0 && idade < 12){
               //criança
               img.setAttribute('src', 'foto-bebe-m.png')
           }else if (idade < 21 ){
               //Jovem
               img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade < 50 ){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
       }
       if(fsex[1].checked){
        gênero = 'mulher'
        if (idade >= 0 && idade < 12){
            //criança
            img.setAttribute('src', 'foto-bebe-f.png')
        }else if (idade < 21 ){
            //Jovem
            img.setAttribute('src', 'foto-jovem-f.png')
         }else if (idade < 50 ){
             //Adulto
             img.setAttribute('src', 'foto-adulto-f.png')
         }else {
             //idoso
             img.setAttribute('src', 'foto-idoso-f.png')
        }
        }
        res.style.textAlign ='center'
        res.innerHTML = (`você e um ${gênero} com ${idade} anos`);
        res.appendChild(img)
    }
}

