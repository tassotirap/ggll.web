declare var draw2d: any;
declare var GGLLIntrusivePortsFeedbackPolicy: any;

export class OutputPort {

    outputPort: any;

    constructor() {
        
        this.outputPort = new draw2d.OutputPort();
        this.outputPort.uninstallEditPolicy("draw2d.policy.port.IntrusivePortsFeedbackPolicy");
        this.outputPort.installEditPolicy(new GGLLIntrusivePortsFeedbackPolicy());
        this.outputPort.setMaxFanOut(1);
        this.outputPort.on("connect", function (emitterPort, cnn) {
            cnn.connection.setColor("#0000ff");
            cnn.connection.setRouter(new draw2d.layout.connection.InteractiveManhattanConnectionRouter());

            var decorator = new draw2d.decoration.connection.ArrowDecorator();
            decorator.setDimension(10, 10);
            decorator.setBackgroundColor("#0000ff");

            if (cnn.connection.sourcePort && cnn.connection.sourcePort instanceof draw2d.InputPort) {
                cnn.connection.setSourceDecorator(decorator);
            }
            else {
                cnn.connection.setTargetDecorator(decorator);
            }
        });
    }

    public getPort(): any {
        return this.outputPort;
    }
}
