import Graph from './utils/graph.mjs'
import { graph1, graph2, graph3} from './data/testData.js'

const edges2 = graph1;
const vertexCount = (Math.max(...edges2.flat()))+1;

let g = new Graph()

edges2.forEach((element) => {
  g.addEdge(element[0], element[1])
})

const result = g.getCoveredVertices()
console.log(result)

//////////////////////////////////////

var graph = Viva.Graph.graph()

edges2.forEach((element) => {
  graph.addLink(element[0], element[1])
})

for (let i = 0; i < vertexCount; i++) {
  graph.addNode(i, result.includes(i)
   ? {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6EQXchLKVnLnfe_INl9Qeog1NgkIiyhVpnO6hR4a7YE7f7JRh59AelxQy6D1IXhVsuM&usqp=CAU"} 
   : {url:"https://emojipedia-us.s3.amazonaws.com/source/skype/289/large-blue-square_1f7e6.png"})
}

var graphics = Viva.Graph.View.svgGraphics()
graphics.node(function (node) {
  return Viva.Graph.svg('image')
    .attr('width', 24)
    .attr('height', 24)
    .link(node.data.url)
})

var layout = Viva.Graph.Layout.forceDirected(graph, {
  springLength: 50,
  springCoeff: 0.0001,
  dragCoeff: 0.002,
  gravity: -0.5,
})

var renderer = Viva.Graph.View.renderer(graph, {
  container: document.querySelector('.graph-container'),
  layout: layout,
  graphics: graphics,
})
renderer.run()
