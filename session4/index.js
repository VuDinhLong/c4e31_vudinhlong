// // x=prompt("Nhập x")
// // y=prompt("Nhập y")
// // console.log("x+y=",Number(x)+Number(y))

// x=Number(prompt("Nhập x"))
// y=Number(prompt("Nhập y"))
// pheptinh=prompt("Nhập phép tính")
// ketqua=0
// if(pheptinh=="+"){
//     ketqua=x+y
// }
// if(pheptinh=="*"){
//     ketqua=x*y
// } 
// if(pheptinh=="/"){
//     ketqua=x/y
// }
// if(pheptinh=="-"){
//     ketqua=x-y
// }
// console.log(ketqua)

// refactor code: INPUT->LOGIC->OUTPUT

// x=Math.floor(Math.random() * 10) + 0  
// y=Math.floor(Math.random() * 10) + 0
// pheptinh=Math.floor(Math.random() * 4) + 1  
// ketqua=0
// result=0
// op=0                                                    //operator=[`+`,`-`,`*`,`/`]
// if(pheptinh=="1"){
//     ketqua=x+y
//     op="+"
// }
// if(pheptinh=="2"){
//     ketqua=x*y
//     op="*"
// } 
// if(pheptinh=="3"){
//     ketqua=x/y
//     op="/"
// }
// if(pheptinh=="4"){
//     ketqua=x-y
//     op="-"
// }
// ketqua1=ketqua-1                                         //errors=[-1,0,,0,0,1]
// ketqua2=ketqua+1                                         //error=errors[Math.floor(Math.random()*error.lenght)]
// console.log(ketqua1,ketqua2)                             //ketqua=ketqua + error 
// test=Math.floor(Math.random() * (ketqua2 - ketqua1+1)) + ketqua1      //*truoc 1 so 
// question=prompt(`${x} ${op} ${y} = ${test}
// "Y/N"`)
// console.log(test)

// if(ketqua==test){
//     if(question=="Y")
//     {result="Yay"}
//     else{result="You are wrong"}
// }
// else{
//     if(question=="N")
//     {result="Yay"}
//     else{result="You are wrong"}
// }
// console.log(result)
// window.onload=()=>{
//     let x=Math.floor(Math.random()*11);
//     let y=Math.floor(Math.random()*11);
//     let ops=['+','-','*','/'];
//     let op=ops[Math.floor(Math.random()*ops.length)];   
//     let result=calc(x,y,op);
//     let errors=[-1,0,0,0,0,1];
//     let error=errors[Math.floor(Math.random()*errors.length)];
//     let displayResult=result+error;
//     console.log(`${x} ${op} ${y}= ${displayResult}`);
//     let answer=prompt("Y/N").toLocaleLowerCase();
//     if(result===displayResult){//or ccó thể viết if(error===0)
//          if(answer==='y'){
//              console.log("Yay");
//          }else{
//              console.log("Wrong");
//          }
//     }else{
//          if(answer==='n'){
//              console.log("Yay");
//          }else{
//              console.log("Wrong");
//          }
//     }
    
// }
