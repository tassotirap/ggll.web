import { Node } from "./node";

declare var draw2d: any;

export class Lambda extends Node {

    private lambda: any;

    private text: string;

    constructor() {
        super();

        this.text = "Y";
        this.lambda = new draw2d.shape.basic.Circle({
            bgColor: "ffff00",
            width: 40,
            height: 40
        });

        this.node = this.lambda;

        this.addPorts();
        this.addLabel();
    }

    private addPorts() {
        var inputLocator = new draw2d.layout.locator.LeftLocator();
        var inputPort = new draw2d.InputPort();  

        this.lambda.addPort(inputPort, inputLocator);
    }

    private addLabel() {

        var label = new draw2d.shape.basic.Label({ text: this.text });
        label.setBold(true);
        label.setStroke(0);
        this.lambda.add(label, new draw2d.layout.locator.CenterLocator());
    }


}