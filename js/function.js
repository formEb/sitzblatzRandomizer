var seets = document.getElementsByClassName("table");

function main() {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', "/students.json", true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        var yobj = new XMLHttpRequest();
            yobj.overrideMimeType("application/json");
            yobj.open('GET', "/assignment.json", true); // Replace 'my_data' with the path to your file
            yobj.onreadystatechange = function () {
                if (yobj.readyState == 4 && yobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                    var students = JSON.parse(xobj.responseText).students;
                    var assignment = JSON.parse(yobj.responseText).seats;
                    console.log(yobj)
                    for (let i = 0; i<seets.length; i++) {
                        seets[i].innerHTML = students[assignment[i]];
                    }
                }
            };
        yobj.send(null); 



      }
    };
    xobj.send(null); 
 }

 main();
