/**
 * Created by arpit on 14/6/17.
 */

window.onload = function() {
    console.log('ds')

    // var id=document.getElementById("1");
    // id.addEventListener("click",function () {
    //     console.log("function");
    //     $.ajax({url: "http://aajtak.intoday.in/livetv.html", success: function(result){
    //
    //                 console.log("ajax");
    //
    //             }});
    // })

    // $("row").click(function(){
    //     console.log("button");
    //     // $.ajax({url: "google.co.in", success: function(result){
    //     //
    //     //     console.log("ajax");
    //     //
    //     // }});
    // });
    // $.get('/gets',function (data,status) {
    //     console.log(data);
//     // })
//         const data = `10.30.1.228 is available.
// 10.30.1.32 is available.
// 10.30.1.65 is not available.
// 10.30.1.69 is not  available.
// 10.30.1.61 is available.
// 10.30.1.229 is available.
// 10.30.1.63 is available.
// 10.30.1.227 is available.
// 10.30.1.230 is available.
// 10.30.1.31 is not available.
// 203.176.113.41 is not available.
// 203.176.113.42 is not available.`


    console.log("aff")
    var el = document.getElementById("1");


    $.get('/get', function (data, status) {
        //  console.log(data);

        // var dat = data;
        //   console.log(dat);
        //})

        // const data = dat;
        console.log(data+'  '+typeof (data));
        const stats = data.split('\n').map(line=> {
            const [ip,verb,status] = line.split(' ')
            return {ip, status}
        });

//    console.log(stats);

        var i =12;
         while (i < 10) {
            console.log(i);
            if (stats[i].status != "available.") {
                console.log(stats[i].status)
                var el = document.getElementById(i);
                el.style.backgroundColor = "blue";

            }
            i++;
        }
    })
}