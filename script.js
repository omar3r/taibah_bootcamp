const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        sub = form.querySelector('submit'),
        allInput = form.querySelectorAll(".first input");
const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber1');
const forIdea = document.getElementById('textforidea') ; 
const eductionQ = document.getElementById('edu1');
const Ideapath2 = document.getElementById('path2') ;
const birthDate = document.getElementById('birthDate');
const checkedID = document.getElementById('checkedID');





var eduction = document.getElementsByName('entry.906977649') ; 
var Ideapath = document.getElementsByName('entry.1130702391') ;
var checkpath = document.getElementsByName('entry.1602705367');
const pathName = 'entry.1130702391' ;
const checkpathName = 'entry.1602705367' ;




const edName = 'entry.906977649' ;





var isNext1 = false ;
var isNext2 = false ; 
var isNext3 = false ;
var isNext4 = false ;
var isNext5 = false ;


var isValid1= false ;
var isValid2= false ; 




var radioValid = false;
var radioValid2 = false;
var radioValid3 = false;

// console.log(eduction.length);



function validateradio2(m , valid) {
    var radio = document.getElementsByName(m);
    
    

    var i = 0;
    while (!valid && i < radio.length) {
        if (radio[i].checked) valid = true;
       
        i++;        
    }


    
    return valid;


   
    

  

  
}

function validateChecklist(m ,valid ) {
    var checkboxes = document.getElementsByName(m);
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            valid = true;
            break;
        }
    }
    
    return valid;
}




function validateMyForm()
{
   if(isValid1 == false || isValid2 == false )
  { 
    

    validateInputs2();
   
    Submetted=false
    
    return false;
  } 

  

  form.submit();
  Submetted=true

  return true;
}
    








    

    

nextBtn.addEventListener("click", ()=> {
  
           
            validateInputs();
            
     
   
})


form.addEventListener('submit',  ()=> {
   

    
    
    


    validateMyForm() ;

    
    /*


     if(isValid1 == true && isValid2 == true){
            form.submit();
            Submetted=true
        } else {
            Submetted=false
        }
        
     if(isValid1 && isValid2 ){
        
       Submetted=true

      }

      */
   
    
});










backBtn.addEventListener("click", () => form.classList.remove('secActive'));


nextBtn.addEventListener( "click", () => document.getElementById('43').scrollIntoView()) ;
backBtn.addEventListener( "click", () => document.getElementById('43').scrollIntoView()) ;




const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};










const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());


}

const validatePhoneNumber = phoneNumber => {
    var re1 = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re1.test(phoneNumber);
  }



const validateInputs = () => {
    
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim() ; 
    const birthDateValue = birthDate.value.trim();
    var number = parseInt(birthDate.value.trim())
    
    

    if(usernameValue === '') {
        setError(username, 'يجب كتابة الإسم');
        form.classList.remove('secActive');
    } else {
        setSuccess(username);
        isNext1=true ;
    } 

    if(emailValue === '') {
        setError(email, 'يجب كتابة عنوانك الإلكتروني');
        form.classList.remove('secActive');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'الإيميل غير صحيح');
        form.classList.remove('secActive');
    } else {
        setSuccess(email);
        isNext2=true ;
       

    }

    if(!validatePhoneNumber(phoneNumberValue)) {
       
        setError(phoneNumber, 'رقم الجوال خاطئ');
        form.classList.remove('secActive');
   
    }
     else {
       
       
        setSuccess(phoneNumber);
        isNext3 = true ;
    }


    if(!validateradio2(edName , radioValid)) {
        setError(eductionQ, 'الرجاء الاختيار');
        form.classList.remove('secActive');
    } else {
        
        setSuccess(eductionQ);
        isNext4 = true ;
        
        // 2015 and 2007
        
    }

    if(number  <= 2007 || number >= 2015 ) {
        setError(birthDate, 'التاريخ خاطئ');
        form.classList.remove('secActive');
    } else if(birthDateValue === ''){

        setError(birthDate, 'التاريخ خاطئ');
        form.classList.remove('secActive');
    }
    else {
        setSuccess(birthDate);
        isNext5=true ;
    } 


    if(isNext1 && isNext2 && isNext3 && isNext4 && isNext5 ){
        form.classList.add('secActive');

        

        

    }





 
      

   


    }


    const validateInputs2 = ()=> {

       //  const forIdeaValue = forIdea.value.trim();

         

        

      


        if(!validateradio2(pathName , radioValid2)  ) {
            form.classList.add('secActive')
            setError(Ideapath2, 'يجب تحديد فئة الاشتراك');
            
        } else {
            setSuccess(Ideapath2);
            isValid1= true ;
            
        }

        if(!validateChecklist(checkpathName , radioValid3)  ) {
            form.classList.add('secActive')
            setError(checkedID, 'يجب إختيار مسار واحد على الأقل');
          //  console.log('wrong');
            
        } else {
            setSuccess(checkedID);
            isValid2= true ;
            
        }

      


      /*  if(forIdeaValue === '' ) {
           
           
            setError(forIdea, 'يجب كتابة شرح مختصر عن فكرتك');
           
           
            
        } else {
            setSuccess(forIdea);
            isValid2 = true ;

           

            
           
        } */

       

       


    


    }

    
