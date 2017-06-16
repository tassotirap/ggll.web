import { Node } from "./node";
import { OutputPort } from "../connections/output-port";
import { OutputAlternativePort } from "../connections/output-alternative-port";
import { NodeType } from "./node-factory";

declare var draw2d: any;

export class NTerminal extends Node {

    private nterminal: any;

    private label: any;

    constructor() {
        super();
        
        this.nterminal = new draw2d.shape.basic.Rectangle({
            bgColor: "#98FB98",
            width: 70,
            height: 40
        });

        this.node = this.nterminal;

        this.addPorts();
        this.addLabel();
    }

    public getType(): NodeType {
        return NodeType.NTerminal;
    }

    private addPorts() {
        var inputLocator = new draw2d.layout.locator.LeftLocator();
        var inputPort = new draw2d.InputPort();

        var outPutAlternativePort = new OutputAlternativePort();
        this.nterminal.addPort(outPutAlternativePort.getPort(), new draw2d.layout.locator.BottomLocator());

        var outPutPort = new OutputPort();
        this.nterminal.addPort(outPutPort.getPort(), new draw2d.layout.locator.RightLocator());        

        this.nterminal.addPort(inputPort, inputLocator);
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

        this.nterminal.add(this.label, new draw2d.layout.locator.CenterLocator());
    }

    public setText(text: any) {
        this.label.setText(text);
    }

    public getText(): any {
        return this.label.getText();
    }


}