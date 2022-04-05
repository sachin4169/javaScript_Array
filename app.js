
var companyinfo =[];
function add(){
    
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
    display();
};
  var table = `<table>
        <tr>
            <th>Company</th>
            <th>Model</th>
            <th>Memory</th>
            <th>Price</th>
        </tr>`
    var tfooter = "</table>"

function display(){
    var row = ""
    companyinfo.forEach(element => {
        row +=`  <tr>
                <td>${element.Name}</td>
                <td>${element.Model}</td>
                <td>${element.Memory}</td>
                <td>${element.Rs}</td>
            </tr>`
    });        
    document.getElementById("table").innerHTML=table+row+tfooter;
};

function search() {
    var select = document.getElementById("selectfield").value;
    console.log(select);
    var item = document.getElementById("item").value;
    console.log(item);
    var row = "";
    companyinfo.forEach(element => {
        console.log(element["Name"])
         if (element[`${select}`] == item){
                row +=`  <tr>
                    <td>${element.Name}</td>
                    <td>${element.Model}</td>
                    <td>${element.Memory}</td>
                    <td>${element.Rs}</td>
                </tr>`
            }
            else{
                console.log("not valid")
                
                display();
            }
    });
    document.getElementById("table").innerHTML=table+row+tfooter;  
}