//Procurar o botão

var buttonAdd = document.querySelector("#add-time");
//condições
var imgElement;
var i = 0;
var segunda = false;
var retirar;
listaRetirar = [];

buttonAdd.onclick = function clicar() {
        
    var day = document.getElementById('weekday')
    var temp = document.getElementById('tempoI')
    var temp2 = document.getElementById('tempoF')
    
    if (day.value != '' & temp.value != '' & temp2.value != '') {
    
        cloneField()
        
    } else {
        window.alert('Preencha todos os campos primeiro')
    }
    
}


    
    //buttonAdd.addEventListener("click", cloneField)
    //Quando clica no botão
    
    //Executar uma ação
    //verificar se todos campos estão preenchidos
    
    function cloneField() {
        
    
    //Duplicar o campo. Que campos?
    const newField = document.querySelector(".schedule-item").cloneNode(true)//O true faz com que pegue todos os filhos de .schedule-item
    newField.id= `schedule-item${i}`;

    if (segunda == true) {
        
        var arquivoNovo = document.getElementById(`schedule-item${i - 1}`);
        
        
        var resTemp = arquivoNovo.querySelectorAll('input');
        
        var tempI = resTemp[0].value;
        var tempF = resTemp[1].value;
        var respDay = arquivoNovo.querySelectorAll('select')[0].value;
        

        i++

        //campo do dia da semana 
        
    }
   
   //limpar os campos. Que campos?
   var fields = newField.querySelectorAll("input");
   
   
    fields.forEach(function(field) {
       field.value = ""
    })
    
    // */Colocar na página. Onde?
    
    if (segunda == false) {
        segunda = true
        i++   
        //var inserirImg = document.querySelectorAll('div.input-block')[5]
          
        imgElement = document.createElement('img')
        imgElement.src = '/images/images/remover.png'
        imgElement.id = 'imagem-remover'
        newField.appendChild(imgElement)
        retirar = newField
        listaRetirar.push(retirar)
        document.querySelector('#schedule-items').appendChild(newField)
        

        
    } else if (segunda == true) {
        if (tempI != '' & tempF != '' & respDay != '') {
            console.log(`inicio ${tempI} fim ${tempF} no dia ${respDay}`) 
            //var inserirImg = document.querySelectorAll('div.input-block')[5]
             
            imgElement = document.createElement('img')
            imgElement.src = '/images/images/remover.png'
            imgElement.id = 'imagem-remover'
            newField.appendChild(imgElement)
            retirar = newField
            listaRetirar.push(retirar)
            console.log(listaRetirar)
            document.querySelector('#schedule-items').appendChild(newField)

        } else {
            window.alert('Preencha todos os campos')
            i--
              
        }
    }
    
    imgElement.onclick = function () {
        var pai = document.getElementById('schedule-items')
        segunda = false
        var tamanhoLista = listaRetirar.length
        console.log(tamanhoLista)
        pai.removeChild(listaRetirar[tamanhoLista - 1])
        listaRetirar.pop()
    }
}






