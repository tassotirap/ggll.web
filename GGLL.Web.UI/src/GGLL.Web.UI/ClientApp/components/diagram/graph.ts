import { Canvas } from "./canvas";
import { Node } from "./nodes/node";
import { NodeFactory, NodeType } from "./nodes/node-factory";

declare var GGLLClickCanvas: any;
declare var draw2d: any;

export class Graph {

    private canvas: Canvas;
    private nodes: Node[];
    private selectedType: NodeType;

    constructor(id: string) {
        this.canvas = new Canvas(id);
        this.nodes = [];
        this.selectedType = NodeType.None;
    }

    private add(type: NodeType, x: number, y: number) {
        var node = NodeFactory.Create(type);
        if (node != null) {
            this.canvas.add(node, x, y);
        }
    }

    public click(graph: Graph, x: any, y: any) {
        graph.add(graph.selectedType, x, y);
        graph.selectPolicy();
    }

    set Type(selectedType: NodeType) {
        this.selectedType = selectedType;
        if (this.selectedType != NodeType.None) {
            this.clickPolicy();
        }
        else {
            this.selectPolicy();
        }
    }

    private clickPolicy()
    {
        this.canvas.addPolicy(new GGLLClickCanvas(this, this.click));
    }

    private selectPolicy()
    {
        this.canvas.addPolicy(new draw2d.policy.canvas.BoundingboxSelectionPolicy);
    }

    get Type(): NodeType {
        return this.selectedType;
    }
}

