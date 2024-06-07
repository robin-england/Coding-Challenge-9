// U63166005
// Coding Challenge #9

function main() {

    d3.select("body").append("div") // Creates 3 div elements
    d3.select("body").append("div")
    d3.select("body").append("div")

    d3.selectAll("div")
        .on("mouseover", function(){
            d3.select(this)
                .style("background-color","burlywood")  // Changes color on mouseover
        })
        .on("mouseout", function(){
            d3.select(this)
                .style("background-color","bisque")     // Changes color back on mouseout
        })
}