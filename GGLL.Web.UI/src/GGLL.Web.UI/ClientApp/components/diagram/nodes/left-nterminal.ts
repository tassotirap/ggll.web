import { Node } from "./node";
import { OutputPort } from "../connections/output-port";
import { OutputAlternativePort } from "../connections/output-alternative-port";

declare var draw2d: any;

export class LNTerminal extends Node {

    private startNTerminal: any;

    private text: string;

    constructor() {
        super();

        this.text = "NTerminal";
        this.startNTerminal = new draw2d.shape.basic.Polygon({
            bgColor: "#1E90FF"
        });

        this.startNTerminal.resetVertices();
        this.startNTerminal.addVertex(0, 0);
        this.startNTerminal.addVertex(60, 0);
        this.startNTerminal.addVertex(75, 20);
        this.startNTerminal.addVertex(60, 40);
        this.startNTerminal.addVertex(0, 40);

        this.startNTerminal.installEditPolicy(new draw2d.policy.figure.RectangleSelectionFeedbackPolicy());

        this.node = this.startNTerminal;

        this.addPort();
        this.addLabel();
    }

    private addPort() {
        var outputLocator = new draw2d.layout.locator.RightLocator();
        var outPutPort = new OutputPort();
        this.startNTerminal.addPort(outPutPort.getPort(), outputLocator);
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

        this.startNTerminal.add(label, new draw2d.layout.locator.CenterLocator());
    }
}