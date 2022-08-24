// let prices=200;
// let product='motorola';
// let discount =true
// document.write(product)

alert("Stay Alert");

let petb='dog',
    petName='Tom ',
    age=1,
    place='salem';
document.write(petName)
document.write("<br>");

/*
//if we use var .it doesnt shows error sometimes
document.write(paint);
var paint="asian";
code block issues
*/

/*
const price=49,
    discount=true;
    // price= price-5;
    
document.write(price)
*/

// operator precedence
//    3+2*4==20-multipy first
//    (3+2)*2== parentheses first

let prices=50,
    discount=true;
    if (discount==true)
    {
        document.write(--prices);
        document.write("<br>");
    }
    else{
        document.write("discount not available")
    };

// ------------

//strings
 let Name=`sachin`;
     Lastname=` ${Name} tendulkar \n`
     document.write(Lastname)
     document.write("<br>");
     
//parsefloat
let country='IN';   
let Cartax=(country=='IN')?'Due to GST The Car tax is 10,000rupes for import':' For other countries Car tax is not required';
document.write(Cartax );
document.write("<br>");

//---------------------
// let i = 10;
// while ( i < 0 ){
//     console.log(i);
//     i--;   
// }
//------------------

function messageshow(show){
    document.getElementById('header').textContent=show;
}
messageshow('Js')
let num=3;// its use variable from outside
let msgs=function(value)
{
    let code=4*value*num;//document.write(4*value)
    return code;     //return 
}
document.write(msgs(4));
//-------------------------------

// const button=document.getElementById('btn');
// button.addEventListener('click',function()
// {
//  const show=document.getElementById('pop');
//  if(show.classList.contains('d-none'))
//                show.classList.remove('d-none')
// else
//               show.classList.add('d-none')
// })

// const values=[ 'a','b','p','l','u','r']
// nvalues=values.slice(1,5)
// values.splice(1,1,"hello")
// document.write(values);
// document.write("<br>");
// document.write(nvalues);
   
//----------------------------------------


const values=[ 'a','b','c','d'];
const greater=values.filter(function(moto){
    console.log('moto:',moto)
   return moto > 'b';
})
document.write(greater)