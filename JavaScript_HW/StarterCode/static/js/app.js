
// from data.js
var tableData = data;

// YOUR CODE HERE!
// get table references

var tbody = d3.select("tbody");
   

function buildTable(data) {
    tbody.html("");  

    data.forEach(
        (datarow) => {
        
        
        //we created tr inside the html and we have a pointer to tr
        var row = tbody.append("tr")

        Object.values(datarow).forEach((val) => {
        var cell = row.append("td");
        //console.log(val);
        cell.text(val);
      }
    );

    });

}     


      

function handleClick() {

    // Prevent the form from refreshing the page
    d3.event.preventDefault();
   
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;


    if (date) {
  
      filteredData = filteredData.filter(row => row.datetime === date);
    }
   
    buildTable(filteredData);
   }
   
   // Attach an event to listen for the form button
   d3.selectAll("#filter-btn").on("click", handleClick);
   
   // Build the table when the page loads
   buildTable(tableData); 