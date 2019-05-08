// const add=(x,y)=>{
//     result=x+y
//     return result //bắn result ra bên ngoài, nếu ko có hứng sẽ bị huỷ 
// }   //pure function 
//     //x,y:arguments/parameters
//     //{}:scope 
// result=add(3,5)
// console.log(result)

// const helloworld=()=>{
//     for(i=0;i<3;i++) {
//         text("Hello World")
//         penup()
//         fd(40)
//         pendown()
//     }
// }
// helloworld()
// clear()

// const sum=(x,y)=>{
// text(x+y)
// }

// sum(3,4)

// const drawSquare=(length,color1)=>{
//     for(i=0;i<4;i++){
//         color(color1)
//         fd(length)
//         rt(90)
//     }
//     }
//     drawSquare(100,"red")
//     clear()

//     rt(18)
//     const drawStar=(length)=>{
//         for(i=0;i<5;i++){
//             fd(length)
//             rt(144)
//         }
//     }
//     drawStar(100)
//     clear()

// const remove_dollar_sign=(s)=>{
//     for(i=0;i<s.length;i++){
//     s = s.replace('$','')
//     }
//     return s
// }  
// test=remove_dollar_sign("ádjaodjoajd$$$$$$$$$áda$")
// console.log(test)

// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
// if (string_with_no_dollars == "80% percent of life is to show up"){
//     console.log("Your function is correct")}
// else{
//     console.log("Oops, there's a bug")}

// const get_even_list=(l)=>{
// for(i=0;i< l.length;i++){
//     if(l[i]%2==0){}
//     else{l.splice(i,1)
//     i=i-1}
// }
// return l
// }
// even_list = get_even_list([1, 2, 5, 9, -10, 6])
// console.log(even_list)
// if (even_list == [2, -10, 6]){
//     console.log("Your function is correct")};

// is_inside=([X,Y],[x,y,w,h])=>{
//     result=0
//     if(x+w>=X && X>=x){
//         if(y+h>=Y && Y>=y){
//             result="True"
//         }
//         else{result="False"}

//     }
//     else{result="False"}
//     return result
// }
// test= is_inside([20, 120], [140, 60, 100, 200])
// console.log(test)


