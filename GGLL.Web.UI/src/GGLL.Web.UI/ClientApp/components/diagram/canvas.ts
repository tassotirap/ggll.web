import { Node } from "./nodes/node";
import { NodeType } from "./nodes/node-factory";

declare var draw2d: any;
declare var GGLLDropInterceptorPolicy: any;
declare var GGLLAlternativePort: any;


export class Canvas {

    id: string;
    canvas: any;

    constructor(id: string) {
        this.id = id;
        this.Create();

        this.removePolicy("draw2d.policy.canvas.DropInterceptorPolicy");
        this.addPolicy(new GGLLDropInterceptorPolicy());
        this.addPolicy(new draw2d.policy.canvas.ShowGridEditPolicy());
        this.addPolicy(new draw2d.policy.canvas.SnapToGridEditPolicy());


        this.removePolicy("draw2d.policy.connection.ComposedConnectionCreatePolicy");
        this.addPolicy(new draw2d.policy.connection.ComposedConnectionCreatePolicy(
            [
                new draw2d.policy.connection.DragConnectionCreatePolicy()
            ])
        );
    }

    private Create() {
        this.canvas = new draw2d.Canvas(this.id);
    }

    public add(node: Node, posX: number = null, posY: number = null) {
        if (posX == null && posY == null) {
            this.canvas.add(node.Node);
        }
        else {
            this.canvas.add(node.Node, posX, posY);
        }
    }

    public addConnection(connection: any) {
        this.canvas.add(connection);
    }

    public addPolicy(policy: any) {
        this.canvas.installEditPolicy(policy);
    }

    public removePolicy(policyName: string) {
        this.canvas.uninstallEditPolicy(policyName);
    }

    public registerRemoveCallback(callback : any) {
        this.canvas.on("figure:remove", function (emitter, event) {
            callback(emitter, event);
        });
    }

    public getConnections(): any {
        var connections = this.canvas.getLines().data;
        var objects = new Array();

        for (var connection of connections) {
            var sourceId = connection.getSource().getParent().getId();
            var targetId = connection.getTarget().getParent().getId();
            var id = connection.getId();
            var alternative = connection.getSource() instanceof GGLLAlternativePort;
            var vertices = [];

            for (var vertice of connection.getVertices().data) {
                vertices.push({ x: vertice.getX(), y: vertice.getY() });
            }

            var object = { source: sourceId, target: targetId, id: id, alternative: alternative, vertices: vertices };
            objects.push(object);
        }

        return objects;
    }

    public reset()
    {
        this.canvas.clear();
    }
}