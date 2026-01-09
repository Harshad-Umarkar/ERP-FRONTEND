const dateSet=document.querySelector('.date')
const timeSet=document.querySelector('.time')
setInterval(() => {
    let main=new Date()
    let date = main.getDate() + "-" + main.getMonth() + "-" + main.getFullYear();
    let time= (main.getHours()<10?'0'+main.getHours():main.getHours())+':'+(main.getMinutes()<10?'0'+main.getMinutes():main.getMinutes())+':'+(main.getUTCSeconds()<10?'0'+main.getUTCSeconds():main.getUTCSeconds())
    dateSet.innerHTML=date
    timeSet.innerHTML=time
    // console.log(time)
},1000)