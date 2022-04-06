var companyinfo =[];
function add(){
    
    var company =document.getElementById("company").value;
    var model =document.getElementById("model").value;
    var memory =document.getElementById("memory").value;
    var Rs =document.getElementById("price").value;
    var quan = document.getElementById("quantity").value;
    console.log(quan);

    if(company ==""||model==""||memory==""||Rs==""){
        document.getElementById("error").innerHTML="please fill all the fields";
    }
    else{
        document.getElementById("error").innerHTML="";
    var data ={
        "Name" : `${company}`,
        "Model" : `${model}` ,
        "Memory": `${memory}` ,
        "Rs": `${Rs}`,
        "Quantity": `${quan}`,
    };
    companyinfo.push(data);
    display();
    var options = "<option>-Select Field-</option>"
    companyinfo.forEach((element,index) => {
        options += `<option value="${index}"> ${element.Name} ${element.Model}</option>` 
    });document.getElementById("product").innerHTML = options;
    document.getElementById("newproduct").innerHTML = options;
    }
};
  var table = `<table>
        <tr>
            <th>Company</th>
            <th>Model</th>
            <th>Memory</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
        </tr>`
    var tfooter = `<tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th><button onclick="del()">Delete</button></th>
     </tr></table>`

function display(){
    var row = ""
    companyinfo.forEach((element,index) => {
        row +=`  <tr>
                <td>${element.Name}</td>
                <td>${element.Model}</td>
                <td>${element.Memory}</td>
                <td>${element.Rs}</td>
                <td>${element.Quantity}</td>
                <td><input type="checkbox" class="chk" value="" onchange="check(${index})"></td>
            </tr>`
    });        
    document.getElementById("table").innerHTML=table+row+tfooter;
};

function search() {
    var select = document.getElementById("selectfield").value;
    var item = document.getElementById("item").value;
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


function sorting(){
    console.log("sorting function")
    var sort = document.getElementById("sort").value;
    console.log(sort);
    var sort_by = document.getElementById("sort_by").value;
    console.log(sort_by);
    // var x = companyinfo.sort((a, b) => b.Memory - a.Memory);
    // console.log(x)
    if(sort_by == "Name"){
        if(sort == "Asc"){
        companyinfo.sort((a, b) => {
            let fa = a.Name.toLowerCase();
                fb = b.Name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
     
        }else if(sort == "Desc"){
            companyinfo.sort((a, b) => {
                let fa = a.Name.toLowerCase();
                    fb = b.Name.toLowerCase();
            
                if (fb < fa) {
                    return -1;
                }
                if (fb > fa) {
                    return 1;
                }
                return 0;
            });
        }else{
            console.log("please select sort");
        }
    }

    else if(sort_by == "Model"){
        if(sort == "Asc"){
        companyinfo.sort((a, b) => {
            let fa = a.Model.toLowerCase();
                fb = b.Model.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
     
        }else if(sort == "Desc"){
            companyinfo.sort((a,b) => {
                let fa = a.Model.toLowerCase();
                    fb = b.Model.toLowerCase();
            
                if (fb < fa) {
                    return -1;
                }
                if (fb > fa) {
                    return 1;
                }
                return 0;
            });
        }
        else{
            console.log("please select sort");
        }

    }
    else if(sort_by == "Memory"){
        if(sort == "Asc"){
            companyinfo.sort((a, b) => a.Memory - b.Memory);
        }
        else if(sort == "Desc"){
            companyinfo.sort((a, b) => b.Memory - a.Memory);
        } else{
            console.log("please select sort");
        } 
        
    }
    else if(sort_by == "Rs"){
        if(sort == "Asc"){
            companyinfo.sort((a, b) => a.Rs - b.Rs);
        }
        else if(sort == "Desc"){
            companyinfo.sort((a, b) => b.Rs - a.Rs);
        }
        else{
            console.log("please select sort");
        } 
    }
    else{
        console.log("please select sort-by");
    }

    console.log(companyinfo);
    display();
};
var cart = [];
var totalcost = 0;
function addcart(){
    var index = document.getElementById("product").value;
    console.log(index);
    var quantity = document.getElementById("quantity").value;

    var data = companyinfo[index];
    console.log(data.Name);
    var total = (Number(data.Rs))*quantity;
    var data ={
        "Discription" : `${data.Name} ${data.Model}`,
        "Quantity" : `${quantity}` ,
        "Rs": `${data.Rs}`,
    };
    totalcost +=total;
    cart.push(data);
    
    console.log(totalcost);
    console.log(cart);
    
};
console.log(totalcost);

var billtable = `<table>
<tr>
    <th>Discription</th>
    <th>Quantity</th>
    <th>Price</th>
</tr>`;

function bill(){
    var row = ""
    cart.forEach(element => {
        row +=`  <tr>
                <td>${element.Discription}</td>
                <td>${element.Quantity}</td>
                <td>${element.Rs}</td>
            </tr>`
    });        
    document.getElementById("billtable").innerHTML=billtable+row+`<tr>
    <td>Total</td>
    <td></td>
    <td>${totalcost}</td>
    </tr></table>`;
};

function update(){
    var index = document.getElementById("newproduct").value;
    console.log(index);
    var quantity = document.getElementById("newquantity").value;
    console.log(quantity)
    var data = companyinfo[index];
    console.log("befor"+data.Quantity);
    data.Quantity = quantity;
    console.log("after"+data.Quantity);
    display()

}
//del function
// var delbox = [];
// function del(){
// let allCheckBox = document.querySelectorAll(".chk");
//     console.log(allCheckBox)
// allCheckBox.forEach((checkbox) => {
//     checkbox.addEventListener("change", (event) => {
//       if (event.target.checked) {
//         console.log(event.target.value);
//         delbox.push(event.target.value);
//         console.log(delbox);
//       } else {
//         console.log("unchecked" + event.target.value);
//         delbox.forEach((element,index) => {
//             if(event.target.value == element){
//                 console.log(element);
//                 console.log(index);
//                 delbox.splice(index, 1);
//             };

//         });
        
//         console.log(a);
//       }
//     });
//   });
    
// }

// var delbox = new Set();
// function check(index){
//     console.log(index)
//     delbox.add(index)
//     console.log(delbox);
//     delbox.forEach ((value) =>{
//         console.log(delbox)
//         if(value == index){
//             delbox.delete(index)
//         }
//     })
// }
