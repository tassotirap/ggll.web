import { Node } from "./node";
import { OutputPort } from "../connections/output-port";
import { OutputAlternativePort } from "../connections/output-alternative-port";

declare var draw2d: any;

export class Terminal extends Node {

    private terminal: any;

    private text: string;

    constructor() {
        super();

        this.text = "Terminal";
        this.terminal = new draw2d.shape.basic.Rectangle({
            bgColor: "#F08080",
            width: 70,
            height: 40,
            radius: 10
        });

        this.node = this.terminal;

        this.addPorts();
        this.addLabel();
    }

    private addPorts() {
        var inputLocator = new draw2d.layout.locator.LeftLocator();
        var inputPort = new draw2d.InputPort();

        var outPutAlternativePort = new OutputAlternativePort();
        this.terminal.addPort(outPutAlternativePort.getPort(), new draw2d.layout.locator.BottomLocator());

        var outPutPort = new OutputPort();
        this.terminal.addPort(outPutPort.getPort(), new draw2d.layout.locator.RightLocator());        

        this.terminal.addPort(inputPort, inputLocator);
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

        this.terminal.add(label, new draw2d.layout.locator.CenterLocator());
    }


}