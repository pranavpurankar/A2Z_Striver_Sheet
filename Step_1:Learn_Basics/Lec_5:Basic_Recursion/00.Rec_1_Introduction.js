let count = 0;

function recur(){
    if(count === 3) return;
    console.log(count);
    count++;
    recur();
}
recur();