function buildMetadata(results) {
  console.log(results)
  output = ''

  Object.entries(results).forEach(([x,y]) => {
    output += `${x}: ${y}<br>`
  })

  d3.select('#metadata').html(output)
  plotDial(results['WFREQ'])
}

function buildCharts(results) {
  pieData = [{
    labels: results.otu_ids.slice(0,10),
    values: results.sample_values.slice(0,10),
    type: 'pie'
  }]


  bubbleData = [{
    x: results.otu_ids,
    y: results.sample_values,
    text: results.otu_labels,
    hoverinfo: 'x+y+text',
    type: 'scatter',
    mode: 'markers',
    marker: {
      size: results.sample_values,
      sizeref: 2,
      colorscale: 'Jet',
      color: results.otu_ids,
    }
  }]

  Plotly.newPlot('pieplot', pieData)
  Plotly.newPlot('bubbleplot', bubbleData)

}


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    optionChanged(firstSample)
  });
}

function optionChanged(dropdown_value) {
  d3.json(`/samples/${dropdown_value}`).then(buildCharts);  
  d3.json(`/metadata/${dropdown_value}`).then(buildMetadata);  
}

// Initialize the dashboard
init();
