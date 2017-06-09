import { Node } from "./nodes/node";

declare var draw2d: any;
declare var GGLLDropInterceptorPolicy: any;

export class Canvas {

    id: string;
    canvas: any;

    constructor(id : string) {
        this.id = id;
        this.Create();

        this.removePolicy("draw2d.policy.canvas.DropInterceptorPolicy");
        this.addPolicy(new GGLLDropInterceptorPolicy());
        this.addPolicy(new draw2d.policy.canvas.ShowGridEditPolicy());
        this.addPolicy(new draw2d.policy.canvas.SnapToGridEditPolicy());
    }

    private Create() {
        this.canvas = new draw2d.Canvas(this.id);
    }

    public add(node: Node, posX: number, posY: number) {
        this.canvas.add(node.Node, posX, posY);
    }

    public addPolicy(policy: any) {
        this.canvas.installEditPolicy(policy);
    }

    public removePolicy(policyName: string) {
        this.canvas.uninstallEditPolicy(policyName);
    }
}