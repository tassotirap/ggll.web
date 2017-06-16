declare var GGLLPort: any;
declare var GGLLIntrusivePortsFeedbackPolicy: any;

export class OutputPort {

    outputPort: any;

    constructor() {
        
        this.outputPort = new GGLLPort();
    }

    public getPort(): any {
        return this.outputPort;
    }
}
