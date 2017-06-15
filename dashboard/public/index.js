/**
 * Created by arpit on 14/6/17.
 */

window.onload = function() {
    console.log('ds')


    console.log("aff")


    const data = `10.30.1.228 is available. 
10.30.1.32 is available. 
10.30.1.65 is available. 
10.30.1.69 is available. 
10.30.1.61 is not available. 
10.30.1.229 is available. 
10.30.1.63 is available. 
10.30.1.227 is available. 
10.30.1.230 is available. 
10.30.1.31 is available. 
203.176.113.41 is not available. 
203.176.113.42 is not available.`

    const stats = data.split('\n').map(line=> {
        const [ip,verb,status] = line.split(' ')
        return {ip, status}
    });

    console.log(stats);

    var i = 0;

    while (i < 10) {
        if (stats[i].status != "available.") {
            console.log(stats[i].status)
            var el = document.getElementById("#\30'"+i);
            console.log(el)
            el.backgroundColor("black");

        }
        i++;
    }
};
var p=document.getElementById("zero");
console.log(p);