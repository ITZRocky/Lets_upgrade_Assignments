let div3=0
let div5=0

for (var i = 1; i <=100;i++){
  div3++
  div5++

  flag=false
  if(div3==3 && div5==5){
    console.log("FizzBuzz")
    div3=0
    div5=0 
    flag=true
  }
  else{
    if(div3==3){
      console.log("Fizz")
      div3=0
      flag=true
    }
    if(div5==5){
        console.log("Buzz")
        div5=0
        flag=true
    }
  }
  if(flag!=true){
      console.log(i)
  }
  console.log("")
}