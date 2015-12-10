Ref:
===
https://github.com/RenderTeam/angular-d3-collapsible-tree




https://github.com/mbostock/d3/wiki
http://runnable.com/VLW7ma0rFCBJ3YIf/collapsible-tree-labeled-for-d3-js-and-javascript
https://github.com/mbostock/d3/wiki/Tree-Layout

d3 + tree diagram for dashboard
===============================

tooltip
http://stackoverflow.com/questions/21746350/unable-to-get-click-event-between-the-path-link-using-collapse-graph

image
http://stackoverflow.com/questions/7306250/does-force-directed-layout-of-d3-js-support-image-as-node?lq=1

externaldata
http://stackoverflow.com/questions/20940854/how-to-load-data-from-an-internal-json-array-rather-than-from-an-external-resoure
http://jsfiddle.net/LGvha/
http://stackoverflow.com/questions/24360847/i-want-to-add-text-on-the-link-in-d3-js-tree-graph?rq=1
http://stackoverflow.com/questions/19752516/renaming-object-keys-recursively?rq=1 [imp]

http://codepen.io/augbog/pen/LEXZKK

angular collapsed tree
======================
https://github.com/RenderTeam/angular-d3-collapsible-tree

external data
==============
http://stackoverflow.com/questions/20940854/how-to-load-data-from-an-internal-json-array-rather-than-from-an-external-resoure
http://jsfiddle.net/BeSad/
http://stackoverflow.com/questions/21148419/efficiently-rename-re-map-javascript-json-object-keys-within-structured-array
http://stackoverflow.com/questions/29006999/rename-object-key-in-an-array-using-javascript
http://stackoverflow.com/questions/10819863/rename-the-property-names-and-change-the-values-of-multiple-json-objects [imp]

Tooltip
=======

http://jsfiddle.net/6FkBd/259/

.hover classs


var nodeEnter = node.enter().append("svg:g")
   .attr("class", "node")
   .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
   .on("click", function(d) { toggle(d); update(d); })
   .on("mouseover", mouseover)
   .on("mouseout", mouseout);


function mouseover(d) {
    d3.select(this).append("text")
              .attr("class", "hover")
              .attr('transform', function(d){ 
                  return 'translate(5, -10)';
              })
              .text(d.name + ": " );

}


tree with images
================
http://bl.ocks.org/d3noob/9662ab6d5ac823c0e444
http://stackoverflow.com/questions/14951392/add-hyperlink-to-node-text-on-a-collapsible-tree

pass the icon as attribute in  the json

  nodeEnter.append("image")
      .attr("xlink:href", function(d) { return d.icon; })
      .attr("x", "-12px")
      .attr("y", "-12px")
      .attr("width", "24px")
      .attr("height", "24px");


centering the text
====================
http://stackoverflow.com/questions/11857615/placing-labels-at-the-center-of-nodes-in-d3-js

node.append("text")
    .attr("x", 0)
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .text(function(d) { return d.name; });


To print object in alert
=======================
alert(d.toSource());

zooming
=========
http://jsfiddle.net/6kEpp/2/
http://stackoverflow.com/questions/20420383/d3-collapse-tree-semantic-zoom-and-pan-example-problems
http://bl.ocks.org/robschmuecker/7880033
http://kalkanotel.com/d3-collapsible-tree-only-drag-without-zoom-and-jump-and-scroll-i209447.htm

To add any element to d3 tree graph (Redirection)
==================================================
nodeEnter.append("a")
    .attr("xlink:href", function (d) { return "http://www.google.com"; })
    .append("rect")
        .attr("class", "clickable")
        .attr("y", -6)
        .attr("x", function (d) { return d.children || d._children ? -60 : 10; })
        .attr("width", 50) //2*4.5)
        .attr("height", 12)
        .style("fill", "lightsteelblue")
        .style("fill-opacity", .3)     

More Info
==========
http://wenda.baba.io/questions/3408922/add-iframe-to-each-node-on-a-d3-collapsible-tree-plugin.html

https://gist.github.com/PBrockmann/0f22818096428b12ea23
http://stackoverflow.com/questions/19763852/add-iframe-to-each-node-on-a-d3-collapsible-tree-plugin
http://stackoverflow.com/questions/23995202/add-custom-html-to-nodes-in-d3-js-tree
http://stackoverflow.com/questions/18230133/d3-tree-graph-with-links?rq=1
http://bl.ocks.org/d3noob/9692795
http://www.robschmuecker.com/d3-js-drag-and-drop-zoomable-tree/

search
======
http://bl.ocks.org/PBrockmann/0f22818096428b12ea23

videos
=========
https://www.youtube.com/watch?v=x8dwXoWODZ4


