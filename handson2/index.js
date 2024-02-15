function display(event){
   
    event.preventDefault()
     var name = document.getElementById("sname").value;
     var department = document.getElementById("deptname").value;
     var hostel = document.querySelector('input[name="preferHostel"]:checked').value;
     var checkbox = document.getElementById("firstGraduate").checked;

     var adfees = 30000
     var tusfees
    
     var hstfees = 75000
     var total
     var data 
     console.log(hostel)
     
     if(hostel === "Yes"){
        
        if(department == ("EEE" || "CSE" || "IT")  ){
            tusfees = 45000 
            total = adfees + tusfees + hstfees

         }
         else if(department == "MECH"){
            tusfees = 55000
            total = adfees + tusfees + hstfees
         }
         else{
            tusfees = 50000
            total = adfees + tusfees + hstfees
         }
     }else{
        
        if(department == ("EEE" || "CSE" || "IT")  ){
            tusfees = 45000 
            total = adfees + tusfees 

         }
         else if(department == "MECH"){
            tusfees = 55000
            total = adfees + tusfees
         }
         else{
            tusfees = 50000
            total = adfees + tusfees
         }
     }
     
     let totalVal = checkbox === true ? total - 20000 : total;

     let hfees = hostel === "Yes" ? hstfees = 75000 : hstfees = 0

     data = `<ul>
        <li>haii ${name}</li>
        <li>Your Admission Fee is Rs${adfees}</li>
        <li>Tution Fee is Rs ${tusfees}</li>
        <li>Hostel Fee is Rs ${hfees}</li>
        <li>Total College fee is Rs ${totalVal}</li>
     </ul>`
     
     document.getElementById('result').innerHTML = data

      
     
     

    //  let fun = (name, department ,preferHostelValue,fgra )=>{
    //     console.log(name);
    //     console.log(department);
    //     console.log(preferHostelValue);
    //     console.log(fgra);
        
    //  }
        
       
      }
