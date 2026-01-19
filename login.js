let show=document.querySelector('#show')
let eye=document.querySelector('#eye')
let password=document.querySelector('#password')
let id = document.querySelector('.username>input')
let pass = document.querySelector('.password>input')

show.addEventListener('click',()=>{
    if(eye.getAttribute('src')=='hidden.png'){
        eye.setAttribute('src','eye.png')
        password.setAttribute('type','text')
    }
    else {if(eye.getAttribute('src')=='eye.png'){
        eye.setAttribute('src','hidden.png')
        password.setAttribute('type','password')
    }
    }
})  
id.addEventListener('focus',()=>{(document.querySelector('.username>label')).setAttribute('style','left:-6rem;top:-3.5rem')})
pass.addEventListener('focus',()=>{console.log(pass)})
document.querySelector('#check').addEventListener('click',()=>{
    let email=id.value
    let password=pass.value
    console.log(email,password)
<<<<<<< HEAD
    fetch("https://harshgumarkar.pythonanywhere.com/")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log("Fetched data:", data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
=======
    fetch('http://127.0.0.1:8000/login/',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({id: id.value, password: pass.value})
    })  
    .then(response => response.json())
    .then(data => {
        if(data.length>0){
            alert('Login Successful')}
            else{
                alert('Login Failed')
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
>>>>>>> b613ca0d6913f08d8e8c5fcfa7c413b6fff61b4b
})