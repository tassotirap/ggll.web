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
        this.canvas.registerRemoveCallback(this.removeCallback.bind(this));
        this.nodes = [];
        this.selectedType = NodeType.None;
    }

    public removeCallback(emitter: any, event: any) {
        var id = event.figure.getId();
        var node = this.getNode(id);
        var index = this.nodes.indexOf(node);
        if (index > -1) {
            this.nodes.splice(index, 1);
        }
    }

    private add(type: NodeType, x: number, y: number) {
        var node = NodeFactory.Create(type);
        if (node != null) {
            this.canvas.add(node, x, y);
            this.nodes.push(node);
        }
    }

    public click(x: any, y: any) {
        this.add(this.selectedType, x, y);
        this.selectPolicy();
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

    private clickPolicy() {
        this.canvas.addPolicy(new GGLLClickCanvas(this.click.bind(this)));
    }

    private selectPolicy() {
        this.canvas.addPolicy(new draw2d.policy.canvas.BoundingboxSelectionPolicy);
    }

    get Type(): NodeType {
        return this.selectedType;
    }

    public getObjects(): any {
        let nodeObjects = new Array();
        for (let node of this.nodes) {
            nodeObjects.push(node.getObject());
        }

        var connectionsObjects = this.canvas.getConnections();

        return { nodes: nodeObjects, connections: connectionsObjects };
    }

    public reset() {
        this.nodes = [];
        this.canvas.reset();
    }

    public getNode(id: any): Node {
        for (var node of this.nodes) {
            if (node.Id == id)
                return node;
        }

        return null;
    }

    public setObjects(objects: any) {
        for (let object of objects.nodes) {
            var node = NodeFactory.CreateFromOject(object);
            this.canvas.add(node);
            this.nodes.push(node);
        }

        for (let object of objects.connections) {
            var nodeSource = this.getNode(object.source);
            var nodeTarger = this.getNode(object.target);
            var cnn = new draw2d.Connection();
            cnn.setId(object.id);

            if (object.alternative) {
                cnn.setSource(nodeSource.getOutputAlternativePort());
            }
            else {
                cnn.setSource(nodeSource.getOutputPort());
            }
            cnn.setTarget(nodeTarger.getInputPort(0));

            cnn.setVertices(object.vertices);

            this.canvas.addConnection(cnn);
        }
    }
}

