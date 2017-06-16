import { Node } from "./node";
import { NodeType } from "./node-factory";

declare var draw2d: any;

export class Lambda extends Node {

    private lambda: any;

    private label: any;

    constructor() {
        super();

        this.lambda = new draw2d.shape.basic.Circle({
            bgColor: "ffff00",
            width: 40,
            height: 40
        });       

        this.node = this.lambda;

        this.addPorts();
        this.addLabel();
    }

    public getType(): NodeType {
        return NodeType.Lambda;
    }

    private addPorts() {
        var inputLocator = new draw2d.layout.locator.LeftLocator();
        var inputPort = new draw2d.InputPort();

        this.lambda.addPort(inputPort, inputLocator);
    }

    private addLabel() {

        this.label = new draw2d.shape.basic.Label({ text: "λ" });
        this.label.setBold(true);
        this.label.setStroke(0);
        this.lambda.add(this.label, new draw2d.layout.locator.CenterLocator());
    }

    public setText(text: any) {
    }

    public getText(): any {
        return this.label.getText();
    }
}