
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
}