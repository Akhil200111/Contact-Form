

const name1 = document.querySelector('.name');
const phNo = document.querySelector('.phone_no');
const saveBtn = document.getElementById('save');


const userDetails = document.querySelector(".user_details");




saveBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    const name2 = name1.value.trim(); 
    const phno1 = phNo.value.trim();
   if(name2 && phno1){
  const li =  document.createElement("li");
  li.textContent = name2 + " " + phno1;

  console.log(li);
  userDetails.appendChild(li);
   }
})


