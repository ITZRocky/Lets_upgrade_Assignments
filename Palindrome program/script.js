s="madam is walking at noon with dad"
s=s+" "
word=""
rev=""
for(t of s){
  if(t!=" "){
    word=word+t 
    rev=t+rev
  }
  else {
    if(word==rev){
      console.log(word)
    }
    word=""
    rev=""
  }
}