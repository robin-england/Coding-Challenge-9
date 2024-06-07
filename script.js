// 3. Implement the JavaScript:
// Write a function to initialize your page that creates div elements as data points and attaches interactive behaviors using D3.js.
// Attach event listeners for "mouseover" and "mouseout" to change the div elements' styles on hover and revert them when the mouse moves away.

function main() {

    d3.select("body").append("div")
    d3.select("body").append("div")
    d3.select("body").append("div")

    d3.selectAll("div")
        .on("mouseover", function(){
            d3.select(this)
                .style()
        })
        .on("mouseout", function(){
            d3.select(this)
                .style()
        })
}