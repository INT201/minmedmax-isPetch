const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
    if (n1 < n2  < n3) {
    return Object = {min:n1,mid:n2,max:n3}
  }else if(n1 < n3 < n2){
    return Object = {min:n1,mid:n3,max:n2}
  }else if(n3 < n1 < n2){
    return Object= {min:n3,mid:n1,max:n2}
  }else if(n3 < n2 < n1){
    return Object = {min:n3,mid:n2,max:n1}
  }else if(n2 < n1 < n3){
    return Object = {min:n2,mid:n1,max:n3}
  }else if(n2 < n3 < n1){
    return Object = {min:n2,mid:n3,max:n1}
  }else if(n1 == n2 < n3){
     return Object = {min:n1,mid:n2,max:n3}
   }else if(n1 == n2  > n3){
     return Object = {min:n3,mid:n1,max:n2}
   }else if(n1 == n3  < n2){
     return Object = {min:n1,mid:n3,max:n2}
   }else if(n1 == n3  > n2){
     return Object = {min:n1,mid:n2,max:n3}
   }else if(n2 == n3  < n1){
     return Object = {min:n2,mid:n3,max:n1}
   }else if(n2 == n3  > n1){
     return Object = {min:n1,mid:n2,max:n3}   
   }else{
     return Object = {min:n1,mid:n2,max:n3}
   }
}
module.exports = minMedMax
