import { Node } from "./node";
import { OutputPort } from "../connections/output-port";

declare var draw2d: any;

export class Start extends Node {

    private start: any;

    private text: string;

    constructor() {
        super();

        this.text = "S";
        this.start = new draw2d.shape.basic.Diamond({
            bgColor: "#FFA500",
            width: 50,
            height: 40,
            y: 10
        });

        this.node = this.start;

        this.addPort();
        this.addLabel();
    }

    private addLabel() {

        var label = new draw2d.shape.basic.Label({ text: this.text });
        label.setStroke(0);
        label.setBold(true);

        label.installEditor(new draw2d.ui.LabelInplaceEditor({
            onCommit: function (value) {
                this.text = value;
            },
            onCancel: function () {
            }
        }));

        this.start.add(label, new draw2d.layout.locator.CenterLocator());
    }

    private addPort() {
        var outputLocator = new draw2d.layout.locator.RightLocator();

        var outPutPort = new OutputPort();

        this.start.addPort(outPutPort.getPort(), outputLocator);
    }
}