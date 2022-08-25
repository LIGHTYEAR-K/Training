
// const timer = () => {
//   console.log('every 5 Seconds');
// };
// setTimeout(timer,5*1000);
// setTimeout(timer,8*1000);

const { clearInterval } = require("timers");

// const fans= who=>{
//     console.log(who+'fans');
// };
// setTimeout(fans,2*1000,'totally 2')
// setTimeout(fans,4*1000,'totally 4')


let Number=0
 const timer =setInterval(() => {
    console.log('print once')
    Number+=1


if (Number===5)
{
    console.log('done');
    clearInterval(timer)
}
},1000);


