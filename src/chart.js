
var x = d3.scaleBand()
    .domain(xz)
    .rangeRound([0, width])
    .padding(0.08);

var y = d3.scaleLinear()
    .domain([0, y1Max])
    .range([height, 0]);

var color = d3.scaleOrdinal()
    .domain(d3.range(n))
    .range(d3.schemeCategory20c);

var series = g.selectAll(".series")
  .data(y01z)
  .enter().append("g")
    .attr("fill", function(d, i) { return color(i); });



var svg = d3.select('svg');
var margin = {top: 40, right: 10, bottom: 20, left: 10};
var width = svg.attr('width') - margin.left - margin.right;
var height = svg.attr('height') - margin.left - margin.bottom;
var g = svg.append('g').atr('transform', 'translate('+margin.left+','+margin.top+')');

var x = d3.sclaeBand().domain(d3.range(5)).rangeRound([0, width]).padding(0.88);