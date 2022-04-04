

var table = `<table>
<tr>
    <th>Company</th>
    <th>Model</th>
    <th>Memory</th>
    <th>Price</th>
</tr>`
var tfooter = "</table>"  

function add(){
    var companyinfo =[];
    var company =document.getElementById("company").value;
    var model =document.getElementById("model").value;
    var memory =document.getElementById("memory").value;
    var Rs =document.getElementById("price").value;

    var data ={
        "Name" : `${company}`,
        "Model" : `${model}` ,
        "Memory": `${memory}` ,
        "Rs": `${Rs}`,
    };
    companyinfo.push(data);

    companyinfo.forEach(element => {
        table +=`  <tr>
                <td>${element.Name}</td>
                <td>${element.Model}</td>
                <td>${element.Memory}</td>
                <td>${element.Rs}</td>
            </tr>`
    });        
    document.getElementById("table").innerHTML=table+tfooter;

}