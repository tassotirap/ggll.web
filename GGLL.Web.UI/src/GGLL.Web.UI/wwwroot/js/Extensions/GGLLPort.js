GGLLPort = draw2d.OutputPort.extend({

    NAME: "GGLLPort",

    /**
     * @constructor
     * Create a new OutputPort element
     * 
     * @param {Object} [attr] the configuration of the shape
     */
    init: function (attr, setter, getter) {
        this._super(attr, setter, getter);
        this.setMaxFanOut(1);
        this.uninstallEditPolicy("draw2d.policy.port.IntrusivePortsFeedbackPolicy");
        this.installEditPolicy(new GGLLIntrusivePortsFeedbackPolicy());

        this.on("connect", function (emitterPort, cnn) {
            cnn.connection.setColor("#0000ff");
            cnn.connection.setRouter(new draw2d.layout.connection.InteractiveManhattanConnectionRouter());

            var decorator = new draw2d.decoration.connection.ArrowDecorator();
            decorator.setDimension(10, 10);
            decorator.setBackgroundColor("#0000ff");
            cnn.connection.setTargetDecorator(decorator);
        });
    }
});