var margin = {
    top: 30,
    right: 40,
    bottom: 30,
    left: 50,
};
var width = 600 - margin.left - margin.right;
var height = 270 - margin.top - margin.bottom;

var parseDate = d3.time.format('%d-%b-%y').parse;

var x = d3.time.scale().range([0, width]);
var y0 = d3.scale.linear().range([height, 0]);
var y1 = d3.scale.linear().range([height, 0]);

var xAis = d3.svg.axis().scale(x).orient("bottom").ticks(5);
var yAisLeft = d3.svg.axis().scale(y0).orient("left").ticks(5);
var yAisRight = d3.svg.axis().scale(y1).orient("right").ticks(5);

var valueline = d3.svg.line()
    .x(function(d){
        return x(d.date);
    })
    .y(function(d){
        return y0(d.close);
    });


var valueline = d3.svg.line()
    .x(function(d){
        return x(d.date);
    })
    .y(function(d){
        return y1(d.open);
    });

var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");