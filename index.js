var obj =
{
    first_name: "Vardan",
    last_name: "Hovsepyan",
    age: 13,
    tumo_student: true
}
var fs = require('fs');
function main() {
    var file = "fstests.js";
    var myJSON = JSON.stringify(obj);
    fs.appendFileSync(file, myJSON);
}
main();