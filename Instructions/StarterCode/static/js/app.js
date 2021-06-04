// from data.js
var tableData = data;

// YOUR CODE HERE!
//table reference
var tbody = d3.select("tbody");
function buildtable(data) {

    tbody.html("");
    // loop through data
    data.foreach((datarow) => {
        var row = tbody.append("tr");

        Object.values(datarow).foreach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    });
}
// build table 
buildtable(tableData);