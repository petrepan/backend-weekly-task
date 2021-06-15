function truncateString (str, num) {
    let response ="";
    if (str.length>num){
        if(num>3){
            response=str.slice(0,num)+"...";
   }else{
       response=str.slice(0, num)+"...";
   }
   return response;
   }
   return str;
}
//A friend showed me this code it is shorter but i dont understand it
//const truncateString = (str, num)=>str.length>num?
//str.substr(0,num)+"...":str;

truncateString("A-tisket a-tasket A green and yellow basket", 8) // => A-tisket...
truncateString("Absolutely Longer", 2) // => Ab....
let nextline = "\r\n"
let result2 = truncateString("A-tisket a-tasket A green and yellow basket", 8)
result2 += nextline
result2 += truncateString("Absolutely Longer", 2)
alert(result2);