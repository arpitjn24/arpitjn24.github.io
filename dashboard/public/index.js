/**
 * Created by arpit on 14/6/17.
 */

window.onload = function() {


    $.get('/get', function (data, status) {
         console.log(data);

        // var dat = data;
        //   console.log(dat);
        //})

        // const data = dat;
        console.log(data+'  '+typeof (data));
        const stats = data.split('\n').map(line=> {
            const [ip,verb,status] = line.split(' ')
            return {ip, status}
        });

    console.log(stats);

        var i =1;
         while (i < 12) {
            console.log(i);
             console.log(stats[i]);

           //  console.log(stats[i].status)

             if (stats[i].status == "not") {
                var el = document.getElementById(i);
                 console.log(el);
                el.style.backgroundColor = "grey";

            }
            i++;
        }
    })
}

//ashishsharmaashish97@gmail.com