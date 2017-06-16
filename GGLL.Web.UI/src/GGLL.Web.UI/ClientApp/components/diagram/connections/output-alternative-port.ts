declare var GGLLAlternativePort: any;
declare var GGLLIntrusivePortsFeedbackPolicy: any;

export class OutputAlternativePort {

    outputAlternativePort: any;

    constructor() {
        this.outputAlternativePort = new GGLLAlternativePort();
    }

    public getPort(): any {
        return this.outputAlternativePort;
    }
}
