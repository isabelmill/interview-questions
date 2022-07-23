class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
    addVertex(v) {
        this.AdjList.set(v, []);
    }
    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }
    printGraph() {
        var get_keys = this.AdjList.keys();
        for (var i of get_keys) {
            var get_values = this.AdjList.get(i);
            var conc = "";
            for (var j of get_values)
                conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }
}


// function BFS(node) {
//     // Create a Queue and add our initial node in it
//     let q = new Queue(this.nodes.length);
//     let explored = new Set();
//     q.enqueue(node);

//     // Mark the first node as explored explored.
//     add(node);

//     // We'll continue till our queue gets empty
//     while (!q.isEmpty()) {
//         let t = q.dequeue();

//         // Log every element that comes out of the Queue
//         console.log(t);

//         // 1. In the edges object, we search for nodes this node is directly connected to.
//         // 2. We filter out the nodes that have already been explored.
//         // 3. Then we mark each unexplored node as explored and add it to the queue.
//         this.edges[t]
//             .filter(n => !explored.has(n))
//             .forEach(n => {
//                 explored.add(n);
//                 q.enqueue(n);
//             });
//     }
// }

let g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');


g.printGraph();
