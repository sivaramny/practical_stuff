###nvd3 Configuration Options

Ref: https://cmaurer.github.io/angularjs-nvd3-directives

- ID : Identifier for the chart. Utilized heavily by d3.js and nvd3.js when creating and updating charts.

- Width : Controls the display width of the chart. Datatype: Number

- Height : Controls the display height of the chart. Datatype: Number
 
- Margin : Controls the external margin of the chart.
  Datatype: Object, Number: {left:0,top:0,bottom:0,right:0}

- Show X Axis : Toggles visibility of the x axis Datatype: Boolean

- Show Y Axis : Toggles visibility of the y axis Datatype: boolean - (true/false)

- Color : Controls the colors of the chart elements. Datatype: Function

- Is Area : Enables (true) or Disables (false) rendering of the area for all chart series. Datatype: boolean - (true/false)

- Show Legend : Enables (true) or Disables (false) rendering of the Chart Legend. Datatype: boolean - (true/false)

- No Data : Defines the message displayed when data is not available. Datatype: String

- X : Function that allows nvd3.js and d3.js to access x values from the ‘data’. Datatype: Function

- Y : Function that allows nvd3 and d3 to access y values from the ‘data’.

- Force X : List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). The numbers tell the d3.js the values to use in the scale, rather than d3.js determining the values. Datatype: Array of Numbers (i.e. [0, 50])

- Force Y : List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). The numbers tell the d3.js the values to use in the scale, rather than d3.js determining the values. Datatype: Array of Numbers (i.e. [0, 50]

- Interactive : Enables (true) or Disables (false) interactivity for a chart. Interactivity includes tooltips, click events, etc.  Datatype: boolean - (true/false)

- Use Interactive Guideline : Enables (true) or Disables (false) interactive Guide Line. Datatype: boolean - (true/false)

- Tooltips : Enables (true) or Disables (false) rendering of the tooltips. The Interactive attribute must be included and set to true before tooltips will be rendered. Datatype: boolean - (true/false)

- Tooltip Content : Controls how the tooltips are displayed. Datatype: Function


