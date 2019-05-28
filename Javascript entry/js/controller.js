
window.addEventListener("load",bindEvents);
function bindEvents(){
	
	

	document.getElementById("submit").addEventListener("click",addRecord);
    document.getElementById("sort").addEventListener("click",sort);
    document.getElementById("search").addEventListener("click",search);
}

var addRecord=function()
{
   var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var salary = document.getElementById("salary").value;
   
    empOperations.addRecord(name,id,salary);
    
    printRecords(empOperations.arr[(empOperations.arr.length)-1]);
    
    
    
    /*To redo the css*/
    var tr=document.getElementsByTagName("TR");
    tr.className="";
    
}

var printRecords=function(addEmployee)
{
    var tbody=document.getElementById("tbody");
    var tr=tbody.insertRow();
    tr.setAttribute("id",addEmployee.id);
    tr.id=addEmployee.id;
    var index=0;
    
    for(i in addEmployee)
        
        {
           
            tr.insertCell(index).innerHTML=addEmployee[i];
            index++;
        }
    var button=buttonForDelete(addEmployee);
    tr.insertCell(index).appendChild(button);
    
    index++;
    
    
           var buttonEdit=buttonForEdit(addEmployee);
           tr.insertCell(index).appendChild(buttonEdit);
    
}





var buttonForDelete=function(addEmployee)
{
  var button=document.createElement("button");
    button.innerHTML="To delete a record";
    button.id=addEmployee.id;
    button.setAttribute("emp",addEmployee);
    deleteRecords(button);
    
    
    
    //button.addEventListener("click",delete1.bind(button));
    button.addEventListener("click",function()
                           {
       
        var index=empOperations.arr.indexOf(addEmployee);
      
        empOperations.arr.splice(index,1);
        reprintRecords();
    })
    return button;
}


var reprintRecords=function()
{
    var tbody=document.getElementById("tbody");
    tbody.innerHTML="";
                   
   for(var i=0;i<empOperations.arr.length;i++)
       {
           var tr=tbody.insertRow();
            var index=0;
           for(key in empOperations.arr[i])
               {
                   var employee=empOperations.arr[i];
                   console.log("In reprint records "+employee[key]);
                   
                   
    
                   tr.insertCell(index).innerHTML=employee[key];
  
               //    var tr=tbody.insertRow();
                 //   tr.insertCell(index).innerHTML=employee[key];
    
                   index++;
                   
                   
                  
                  }
            var button= buttonForDelete(empOperations.arr[i]);
                    tr.insertCell(index).appendChild(button);
           index++;
            var buttonEdit= buttonForEdit(empOperations.arr[i]);
                    tr.insertCell(index).appendChild(buttonEdit);
           
          
       }
    
}

var deleteRecords=function(button)
{

    
    delete1(button);
    
    
    //empOperations.deleteRecord(employee);
    
}
var delete1=function()
{
   //s this.getAttribute("emp");
   // console.log("attribute is "+this.getAttribute("emp"));
    
    
    
}



/*works fine in top*/


var buttonForEdit=function(employee)

{
    var buttonEdit=document.createElement("button");
    buttonEdit.innerHTML="Click to edit";
     var name=document.getElementById("name");
        var id=document.getElementById("id");
        var salary=document.getElementById("salary");
        
    buttonEdit.addEventListener("click",function(){
        
        buttonEdit.innerHTML="Edit";
        if(buttonEdit.innerHTML=="Click to edit")
            {
       
        name.value="";
        id.value="";
        salary.value="";
            }
        if(buttonEdit.innerHTML=="Edit")
            {
               
                buttonEdit.addEventListener("click",function()
                                           {
                    
                    editRecord(employee);
                    
                });
            }
        
        
        
     //  empOperations.editRecord(employee); 
    });
    return buttonEdit;
    
}




var editRecord=function(employee)
{
    
    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var salary = document.getElementById("salary").value;
    
   // var empObject=new addEmployee("Satsk kima","5689","58969");
     var empObject=new addEmployee(name,id,salary);
    empOperations.editRecord(employee,empObject);
    
    reprintRecords();
    
}



var sort=function()
{
 empOperations.sortRecord();
    reprintRecords();
}




var search=function()
{
    var name=document.getElementById("name");
    var id=document.getElementById("id").value;
    var salary=document.getElementById("salary");
    
   var searchindex= empOperations.searchRecord(id);
    
    var tr=document.getElementById(searchindex);
    tr.className="found";
    
    
    
    alert("found at "+searchindex);
    
}