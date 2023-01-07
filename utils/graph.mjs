export default class Graph {
  constructor(v) {
    this.edges = new Array()
    this.V = v
  }

  // Function to add an edge into the graph
  addEdge(v1, v2) {
    this.edges.push([v1, v2])
  }

  getPopularVertex = (arr) =>
    ~~Object.entries(
      arr.flat().reduce((a, v) => {
        a[v] = a[v] ? a[v] + 1 : 1
        return a
      }, {}),
    ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0]
    
  getCoveredVertices() {
    let selectedVerts = new Array()
    for (let i = 0; i < this.V; i++) {
      if (this.edges.length == 0) break

      const vert = this.getPopularVertex(this.edges)
      this.edges = this.edges.filter((value, index, arr) => {
        return !value.includes(vert)
      })
      selectedVerts.push(vert)
    }
    return selectedVerts
  }
}
