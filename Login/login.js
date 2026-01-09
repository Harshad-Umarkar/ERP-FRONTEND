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
})