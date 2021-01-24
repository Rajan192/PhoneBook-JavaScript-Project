console.log("welcome to My program");
showNumber();

let saveButton=document.getElementById("saveButton");
saveButton.addEventListener("click",function(e)
{
    let name=document.getElementById("name");
    let phone=document.getElementById("phone");
    let email=document.getElementById("email");

    let nameList=localStorage.getItem("name");
    let phoneList=localStorage.getItem("phone");
    let emailList=localStorage.getItem("email");
    
    if(nameList==null)
    {
      nameObj=[];
      
    }
    else
    {
        nameObj=JSON.parse(nameList);
        
    }
    console.log(nameObj);
     if(name.value.length!=0)
     nameObj.push(name.value);
    
    localStorage.setItem("name",JSON.stringify(nameObj));
    name.value="";
   

    //for number



    if(phoneList==null)
    {
      phoneObj=[];
      
    }
    else
    {
        phoneObj=JSON.parse(phoneList);
        
    }
    console.log(phoneObj);
     if(phone.value.length!=0)
     phoneObj.push(phone.value);
    
    localStorage.setItem("phone",JSON.stringify(phoneObj));
    phone.value="";


    //for mail
  

    if(emailList==null)
    {
      emailObj=[];
      
    }
    else
    {
        emailObj=JSON.parse(emailList);
        
    }
    console.log(emailObj);
     if(email.value.length!=0)
     emailObj.push(email.value);
    
    localStorage.setItem("email",JSON.stringify(emailObj));
    email.value="";





    showNumber();
});

function showNumber()
{
   
    let nameList=localStorage.getItem("name");

    if(nameList==null)
    {
      nameObj=[];
    }
    else
    {
        nameObj=JSON.parse(nameList);
    }
    //for number
    let phoneList=localStorage.getItem("phone");

    if(phoneList==null)
    {
      phoneObj=[];
    }
    else
    {
        phoneObj=JSON.parse(phoneList);
    }

    //for mail

    let emailList=localStorage.getItem("email");

    if(emailList==null)
    {
      emailObj=[];
    }
    else
    {
        emailObj=JSON.parse(emailList);
    }

    let html="";
   
    for(let i=0;i<nameObj.length;i++)
    {
        html+= `
        <div id="saveDetailsDiv2">
        <table id="saveNumverTable"  class="displayDetailsDiv">
        <div id="show-row">
            <tr id="saveNumverRow">
                <td id="td1">${nameObj[i]}</td>
                <td id="td2" class="number">${phoneObj[i]}</td>
                <td id="td2" class="email">${emailObj[i]}</td>
                <td><button id="${i}" onclick="deleteNode(this.id)">Delete</button></td>
            </tr>
            </div>
        </table>
    </div>
    `;
        
    
        
    }   
    let nameEle=document.getElementById("saveDetailsDiv");
    //console.log(nameEle);
   // console.log(nameObj.length);
    if(nameObj.length!=0 || phoneObj.length!=0 || emailObj.length!=0  )
    {
        nameEle.innerHTML=html;
    }
    else
    {
        nameEle.innerHTML="enter somthing";
    }
        

}


// for deleting node

function deleteNode(index)
{
 // for name



   
 let nameList=localStorage.getItem("name");

 if(nameList==null)
 {
   nameObj=[];
 }
 else
 {
     nameObj=JSON.parse(nameList);
 }
  
 nameObj.splice(index,1);
 localStorage.setItem("name",JSON.stringify(nameObj));
 //showNumber();




    //for phone

let phoneList=localStorage.getItem("phone");

 if(phoneList==null)
 {
   phoneObj=[];
 }
 else
 {
     phoneObj=JSON.parse(phoneList);
 }
  
 phoneObj.splice(index,1);
 localStorage.setItem("phone",JSON.stringify(phoneObj));

 //for email


 let emailList=localStorage.getItem("email");

 if(emailList==null)
 {
   emailObj=[];
 }
 else
 {
     emailObj=JSON.parse(emailList);
 }
  
 emailObj.splice(index,1);
 localStorage.setItem("email",JSON.stringify(emailObj));

 showNumber();

}

let search=document.getElementById("search");
search.addEventListener("input",function()
{
    let searchValue=search.value;
    console.log(searchValue);

    let displayDetailsDiv=document.getElementsByClassName("displayDetailsDiv");
     
    //for each loop

    Array.from(displayDetailsDiv).forEach(function(element)
    {
      
      let name=element.getElementsByTagName("td")[0].innerText;
      console.log("it is name ",name);
   
     /// comapare with name
      if(name.includes(searchValue))
      {
        element.style.display="block";
      }
      else
      {
          element.style.display="none";
      }

     //comapare whith eamil

      let email=element.getElementsByTagName("td")[2].innerText;

      
      if(email.includes(searchValue))
      {
        element.style.display="block";
      }
      else
      {
          element.style.display="none";
      }



      console.log(name);
    })

})