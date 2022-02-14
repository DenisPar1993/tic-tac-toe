const arrCurrent =  document.querySelectorAll('.element');
const cross = document.querySelector('.cross');
const countWinX = document.querySelector('.countx');
const countWinO = document.querySelector('.counto');
const btnNew = document.querySelector('.newgame');
const btnStep = document.querySelector('.onestep');
let currenValue;
let winX = 0;
let win0 = 0
countWinO.textContent = 0;
countWinX.innerHTML = 0;
let order=true
let count=order?0:1;
const winStategy = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]



btnStep.addEventListener('click', ()=>{
    const ar=[]
   console.log('условие');
    arrCurrent.forEach(item=>{
        if(item.textContent){
            ar.push(item.textContent)
        }
     
    })
    if(ar.length){
      return
    }
    order=!order;
    order?count=0:count=1
    
})
btnNew.addEventListener('click', ()=>{
    countWinO.textContent = 0;
      countWinX.innerHTML = 0;
      count=order?0:1;
      for(i=0;i<arrCurrent.length;i++){
        arrCurrent[i].textContent='';
    }
})




cross.addEventListener('click',(event)=>{
if(event.target.textContent)return

currenValue= count%2==0 ?event.target.textContent='X':event.target.textContent='O';

for(i=0;i<winStategy.length;i++){
    
    for(k=0;k<winStategy[i].length;k++){
        
        if(arrCurrent[winStategy[i][0]].textContent== currenValue && arrCurrent[winStategy[i][1]].textContent===currenValue && arrCurrent[winStategy[i][2]].textContent===currenValue ){
            alert(currenValue+ ' win');
            count=order?0:1;
            if(currenValue==='X'){
                winX++;
                countWinX.innerHTML = winX;

            }else{
                win0++;
                countWinO.innerHTML=win0;
            }
            for(i=0;i<arrCurrent.length;i++){
                arrCurrent[i].textContent='';
            }
        }
    }
}
count++;
if((count==9&&order)||(count===10&&!order)){
    alert('ничья');
    for(i=0;i<arrCurrent.length;i++){
        arrCurrent[i].textContent='';
        count=order?0:1;
    }
}



}) 


