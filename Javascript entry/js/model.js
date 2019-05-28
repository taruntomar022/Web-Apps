
function addEmployee(name,id,salary)
{
    this.name=name;
    this.id=id;
    this.salary=salary;
   
}

var empOperations={
    
     arr:[],
     addRecord:function(name,id,salary)
    {
        
    var Employee=new addEmployee(name,id,salary);
    this.arr.push(Employee);
    
},
    deleteRecord:function(employee)
    {
        this.arr.pop(employee);
        console.log("In model js the deleted element is "+employee);
    }
    ,
    editRecord:function(employee,employeeEdit)
    {
        var index=this.arr.indexOf(employee);
        this.arr[index]=employeeEdit;
    },
    
    sortRecord:function()
    {
       /* this.arr.sort(function(a,b){
            return a.id<b.id? a.id:b.id;
        });*/
        
        this.arr.sort(function(a,b)
                     {
            
            return a.id-b.id;
            
        });
    },
    
    searchRecord:function(refen)
    {
     /* this.arr.forEach(function(w){
          console.log("In model "+w.id);
          
      });*/
        
        
        
        /*this.arr.forEach(function(emp)
                        {
            if(emp.id==refen)
                {
                
                    var index=empOperations.arr.indexOf(emp);
                    return index;
                    
                }
        });*/
        
        
        for(var i=0;i<this.arr.length;i++)
            {
                if(this.arr[i].id==refen)
                    {
                        var index=this.arr.indexOf(this.arr[i]);
                       
                        
                        return refen;
                    }
            }
    
    }
    
}