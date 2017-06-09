declare var draw2d: any;
declare var GGLLIntrusivePortsFeedbackPolicy: any;

export class OutputAlternativePort {

    outputAlternativePort: any;

    constructor() {
        this.outputAlternativePort = new draw2d.OutputPort();
        this.outputAlternativePort.uninstallEditPolicy("draw2d.policy.port.IntrusivePortsFeedbackPolicy");
        this.outputAlternativePort.installEditPolicy(new GGLLIntrusivePortsFeedbackPolicy());

        this.outputAlternativePort.setMaxFanOut(1);
        this.outputAlternativePort.on("connect", function (emitterPort, cnn) {
            cnn.connection.setColor("ff0000");
            cnn.connection.setRouter(new draw2d.layout.connection.InteractiveManhattanConnectionRouter());
            cnn.connection.setDashArray("-");

            var decorator = new draw2d.decoration.connection.ArrowDecorator();
            decorator.setDimension(10, 10);
            decorator.setBackgroundColor("#ff0000");

            if (cnn.connection.sourcePort && cnn.connection.sourcePort instanceof draw2d.InputPort) {
                cnn.connection.setSourceDecorator(decorator);
            }
            else {
                cnn.connection.setTargetDecorator(decorator);
            }
        });
    }

    public getPort(): any {
        return this.outputAlternativePort;
    }
}
