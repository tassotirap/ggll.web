import { Node } from "./node";
import { OutputPort } from "../connections/output-port";
import { NodeType } from "./node-factory";

declare var draw2d: any;

export class Start extends Node {

    private start: any;

    private label: any;

    constructor() {
        super();
        
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

    public getType(): NodeType {
        return NodeType.Start;
    }

    private addLabel() {

        this.label = new draw2d.shape.basic.Label({ text: "S" });
        this.label.setStroke(0);
        this.label.setBold(true);

        this.label.installEditor(new draw2d.ui.LabelInplaceEditor({
            onCommit: function (value) {
                this.text = value;
            },
            onCancel: function () {
            }
        }));

        this.start.add(this.label, new draw2d.layout.locator.CenterLocator());
    }

    private addPort() {
        var outputLocator = new draw2d.layout.locator.RightLocator();

        var outPutPort = new OutputPort();

        this.start.addPort(outPutPort.getPort(), outputLocator);
    }

    public setText(text: any) {
        this.label.setText(text);
    }

    public getText(): any {
        return this.label.getText();
    }
}