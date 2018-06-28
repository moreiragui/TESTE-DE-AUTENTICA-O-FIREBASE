function RetornarDespesa(){
    
    var lista = db.database().ref("minhasdespesas").on("value",function(res){
        var conteudoTabela = '';    
        var soma = 0;
        var i = 0;
        res.forEach(function(item){
           
            conteudoTabela +=`<tr>            
            <td class="tb">`+item.val().description+`</td>
            <td class="tb">`+item.val().amount+`</td>
            <td class="tb">`+item.val().dateAdd+`</td>
            <td class="tb action"><a href="confirm.html?id=`+item.key+`"><button type="submit"  class="btn btn-danger excluir" >Excluir<img src="https://png.icons8.com/color/25/000000/trash.png"></button></a>
            <a href="confirmedite.html?id=`+item.key+`"><button type="submit" id="editar" class="btn btn-warning">Editar<img src="https://png.icons8.com/color/25/000000/pencil.png"></button></a></td>
            </tr>`;
                    
            //Verifica se pode ser tranformando em float
            if(!isNaN(parseFloat(item.val().amount))){
                soma = soma + parseFloat(item.val().amount);
            }
        });
        conteudoTabela += " <td class='tbtotal'><img class='cal' src='https://png.icons8.com/color/30/000000/estimate.png'><b>Valor Total</b></td><td class='tbtotal'></td><td class='tbtotal'></td><td class='tbtotal'><b>R$ "+ soma+"</b><img class='dinheiro' src='https://png.icons8.com/color/30/000000/cash-.png'></td>"; 
        
        //local que vai ser colocado o conteudo do tbody    
        
        $("tbody").append(conteudoTabela);
    }); 
}
function excluir(){
    var url = window.location.href;
    url = url.split("=");
    db.database().ref('minhasdespesas/'+url[1]).remove();
 }


