// from data.js
var tableData = data;

// YOUR CODE HERE!
//table reference
var tbody = d3.select("tbody");
function buildTable(data) {

    tbody.html("");
    // loop through data
    data.forEach((datarow) => {
        var row = tbody.append("tr");

        Object.values(datarow).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    });
}
// build table 
buildTable(tableData);