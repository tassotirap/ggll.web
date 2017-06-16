import { Node } from "./node";
import { OutputPort } from "../connections/output-port";
import { OutputAlternativePort } from "../connections/output-alternative-port";
import { NodeType } from "./node-factory";

declare var draw2d: any;

export class LNTerminal extends Node {

    private lNTerminal: any;

    private label: any;

    constructor() {
        super();
        
        this.lNTerminal = new draw2d.shape.basic.Polygon({
            bgColor: "#1E90FF"
        });        

        this.lNTerminal.resetVertices();
        this.lNTerminal.addVertex(0, 0);
        this.lNTerminal.addVertex(60, 0);
        this.lNTerminal.addVertex(75, 20);
        this.lNTerminal.addVertex(60, 40);
        this.lNTerminal.addVertex(0, 40);

        this.lNTerminal.installEditPolicy(new draw2d.policy.figure.RectangleSelectionFeedbackPolicy());

        this.node = this.lNTerminal;

        this.addPort();
        this.addLabel();
    }

    public getType(): NodeType {
        return NodeType.LNTerminal;
    }

    private addPort() {
        var outputLocator = new draw2d.layout.locator.RightLocator();
        var outPutPort = new OutputPort();
        this.lNTerminal.addPort(outPutPort.getPort(), outputLocator);
    }

    private addLabel() {

        this.label = new draw2d.shape.basic.Label({ text: "NTerminal" });
        this.label.setStroke(0);
        this.label.setBold(true);

        this.label.installEditor(new draw2d.ui.LabelInplaceEditor({
            onCommit: function (value) {
                this.text = value;
            },
            onCancel: function () {
            }
        }));

        this.lNTerminal.add(this.label, new draw2d.layout.locator.CenterLocator());
    }


    public setText(text: any) {
        return this.label.setText(text);
    }

    public getText(): any {
        return this.label.getText();
    }
}