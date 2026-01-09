let attendance_detail=document.querySelectorAll('.attendancedetail')
let reset=document.querySelector('.Reset')
let submit=document.querySelector('.submit')
let names=['harshad','mayur','ankit','santosh','viki','sachin','ketan','rahul','jawwad','harshal']
let list=[]

attendance_detail.forEach((Data)=>{
    for(detain in names){
        let newstudent=document.createElement("div")
        newstudent.classList.add("detail"); 
        newstudent.innerHTML=`<p class="name" id="${names[detain]}">${names[detain]}</p><div class="status"><button class="absent" type="button" id="${names[detain]+'a'}"  >Absent</button><button class="present" type="button"   id="${names[detain]+'p'}">Present</button></div>`
        Data.append(newstudent)
    }
})
let statu=document.querySelectorAll('.status')
let numberp=document.querySelector('#presentstatus')
let numbera=document.querySelector('#absentstatus')
let absentinc=document.querySelectorAll('.absent')
let presentinc=document.querySelectorAll('.present')
reset.addEventListener('click',()=>{
    for(ids in names){
        let absent=document.querySelector(`#${names[ids]+'a'}`)
        let present=document.querySelector(`#${names[ids]+'p'}`)
        if(absent.getAttribute('style','background-color')!=null){
            absent.setAttribute('style',"background-color",'transparent')
        } 
        if(present.getAttribute('style','background-color')!=null){
        present.setAttribute('style',"background-color",'transparent')
        }
    }
    numbera.innerText=0
    numberp.innerText=0
})
submit.addEventListener('click',()=>{
let attendance=''
    for(ids in names){
        let absent=document.querySelector(`#${names[ids]+'a'}`)
        let present=document.querySelector(`#${names[ids]+'p'}`)
        if(absent.getAttribute('style','background-color')==null && present.getAttribute('style','background-color')==null){
            attendance=attendance+'0'
        }
        else{
            if(absent.getAttribute('style','background-color')!=null && absent.getAttribute('style','background-color').split(" ")[1]=='red;'){
                attendance=attendance+'0'
            }
            else{
                if(present.getAttribute('style','background-color')!=null && present.getAttribute('style','background-color').split(" ")[1]=='green;'){
                    attendance=attendance+'1'
                }
            }
        }
    }
    if(names.length!=attendance.length ){
        let temp=names.length-attendance.length
        let temp1=''
        for(let i=0;i<temp;i++){
            temp1=temp1+'0'
        }
        attendance=attendance+temp1
    }
    console.log(attendance)
})
absentinc.forEach((a)=>{
    a.addEventListener('click',(event)=>{
        let temp=String(event.target.id)
        let len=temp.length
        let present=document.getElementById(`${temp.slice(0,len-1)}`+'p')
        event.target.style.backgroundColor = 'red'
        numbera.innerText=Number(numbera.innerText)+1
        if(present.style.backgroundColor=='green'){
            numberp.innerText=Number(numberp.innerText)-1
            present.style.backgroundColor='transparent'
        }
    })
})
presentinc.forEach((p)=>{
    p.addEventListener('click',(event)=>{
        let temp=String(event.target.id)
        let len=temp.length
        let absent=document.getElementById(`${temp.slice(0,len-1)}`+'a')
        event.target.style.backgroundColor = 'green'
            numberp.innerText=Number(numberp.innerText)+1
            if(absent.style.backgroundColor=='red'){
                numbera.innerText=Number(numbera.innerText)-1
                absent.style.backgroundColor='transparent   '
            }
    })
})