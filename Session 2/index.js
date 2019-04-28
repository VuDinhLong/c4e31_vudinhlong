// for(u=1; u<=100; u++){
//     console.log(u)
// }
// for(i=100;i>=1;i--){
//     console.log(i)
// }
// i+=
// // i=i+2
// // let len=5
// // for(i=1;i<=100;i+=1)
// // { fd(len)
// // rt(21)
// // len+=10}
// // clear()

// let tổng=0
// let n=prompt("Nhập số n")
// for(i=1;i<=n;i++){
//  tổng+=i}
// console.log(tổng)

// CONDITIONAL / BRANCH 
// let age=prompt("Enter your age");
// if(age<10)
//     {console.log("Baby")} 
// else if(age<18)
//     {console.log("Teenager")}
// else if(age<25)
// //     {console.log("Trẻ trâu")}
// // else
// //     {console.log("Adult")} 

// for(i=1;i<=100;i++)
//     {if(i%2==0)
//     console.log("i")}

// === so sánh tuyệt đối(so cả kiểu dữ liệu)
// == so sánh 2 vế
// = gán giá trị vào biến

// max=100
// min=1
// n=Math.floor(Math.random()*100+1)
// if(n<=30)
//     {console.log("Sunny")}
// else if (n<=70) 
//     {console.log("Rainy")}
// else
//     {console.log("Cloudy")}
// console.log(n)
// // Math.floor : làm tròn

// TÌM NGHIỆM PHƯƠNG TRÌNH BẬC HAI
// a=prompt("Nhập a")
// b=prompt("Nhập b")
// c=prompt("Nhập c")
// delta=b**2-4*a*c
// if(delta>0)
//     {console.log("2 Nghiệm phân biệt")
//     console.log((-Number(b)-Math.sqrt(delta))/(2*a))
//     console.log((-Number(b)+Math.sqrt(delta))/(2*a))}
// else if(delta===0)
//     {console.log("1 Nghiệm kép")
//     console.log((-Number(b))/(2*a))}
// else    
//     {console.log("Vô nghiệm")}

// VẼ MŨI TÊN XANH ĐỎ
// color("red")
// rt(90)
// for(i=0;i<15;i++){
//   if(i%2==0){
//     color("red")}
 //   else{
//       color("blue")}
//       penup()
//       fd(10)
//       pendown()
//       fd(20)}
// clear()


// // // KIỂM TRA USERNAME VÀ PASSWORD 
// username=prompt("Nhập username")
// if(username=="C4E31"){
//     password=prompt("Nhập password")
//     if(password=="mindx"){
//         console.log("Welcome")}
//     else{
//         console.log("Wrong Password")
//     }
// }
// else{
//     console.log("Wrong Username")
// }

// BOOLEAN
// a=1
// b=9
// console.log(Boolean(a > b)) 

// boolean represent one of two values:true or false
//     Ex: 8>9 (false); haha (true); 0(false)

// A flow chart is a graphical or symbolic representation of a process. Each step in the process is represented by a different symbol and contains a short description of the process step. The flow chart symbols are linked together with arrows showing the process flow direction.



// // Nesting if/else statements helps to organize and isolate conditions in order to avoid testing the same condition twice or to minimize the number of times various tests need to be performed
//     // EX: compare a,b,c
//             if(a=b){
//                 if(a=c){console.log("all equal")}
//                 else{console.log("a=b only")}
//             }
//             else{
//                 if(b=c){console.log("b=c only")}
//                 else{console.log("all different")}
//             }

// for(i=1;i<=4;i++)
// {lt(35)
// fd(50)
// rt(70)
// fd(50)
// rt(110)
// fd(50)
// rt(70)
// fd(50)
// lt(125)}
// clear()


// lt(90) 
// for(i=6;i>=3;i--){
//     for(u=1;u<=i;u++){
//      rt(180-(180*(i-2)/i))
//      fd(100)
//     }
//  }
// clear()
// // works with any number of polygons 

// heightcm=prompt("INSERT HEIGHT in CM")
// heightm=heightcm/100
// weight=prompt("INSERT WEIGHT in KG")
// BMI = weight/(heightm*heightm)
// console.log(BMI)
// if(BMI<=16){
//     console.log("Severely Underweigh")
// }
// else if(BMI<=18.5){
//     console.log("Underweigh")
// }
// else if(BMI<=25){
//     console.log("Normal")
// }
// else if(BMI<=30){
//     console.log("Overweigh")
// }
// else{
//     console.log("Obese")
// }

// n=prompt("INSERT a Number")
// u=1
// for(i=1;i<=n;i++){
//     u=u*i
// }
// console.log(u)
