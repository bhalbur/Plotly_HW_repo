// Enter a speed between 0 and 180

function plotDial(washfreq){
var washfreq = washfreq

var level = 189 + 18 * washfreq;

// Trig to calc meter point
var degrees = 0 - level,
     radius = .5;
var radians = degrees * Math.PI / 180
0;
var x = radius * Math.cos(radians);
var y = radius * Math.sin(radians);

// Path: may have to change to create a better triangle
var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
     pathX = String(x),
     space = ' ',
     pathY = String(y),
     pathEnd = ' Z';
var path = mainPath.concat(pathX,space,pathY,pathEnd);

var data = [{ type: 'scatter',
   x: [0], y:[0],
    marker: {size: 28, color:'850000'},
    showlegend: false,
    name: 'speed',
    text: level,
    hoverinfo: 'text+name'},
  { values: [1,1,1,1,1,1,1,1,1,1,10],
  rotation: 90,
  text: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0',''],
  textinfo: 'text',
  textposition:'inside',
  colorscale: 'Jet',
  marker: {
    colors:['rgba(14, 127, 0, .5)', 'rgba(50, 135, 10, .5)', 'rgba(110, 154, 22, .5)',
             'rgba(140, 175, 32, .5)', 'rgba(170, 202, 42, .5)', 'rgba(186, 205, 68, .5)',
             'rgba(202, 209, 95, .5)','rgba(207, 208, 130, .5)','rgba(210, 206, 145, .5)', 
             'rgba(222, 216, 175, .5)','rgba(255, 255, 255, 0)']
           },
  labels: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', ''],
  hoverinfo: 'label',
  hole: .5,
  type: 'pie',
  showlegend: false
}];

var layout = {
  shapes:[{
      type: 'path',
      path: path,
      fillcolor: '850000',
      line: {
        color: '850000'
      }
    }],
  title: 'Gauge',
  Speed: 0-100,
  height: 500,
  width: 500,
  xaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]},
  yaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]}
};

Plotly.newPlot('gauge', data, layout);
};