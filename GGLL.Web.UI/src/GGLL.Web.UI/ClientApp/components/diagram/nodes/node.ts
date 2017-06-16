import { NodeType } from "./node-factory";

declare var GGLLPort: any;
declare var GGLLAlternativePort: any;

export abstract class Node {

    protected node: any;

    public abstract getType(): NodeType;

    public abstract setText(text: any);

    public abstract getText():any;

    get Node(): any {
        return this.node;
    }

    get Width(): any {
        return this.node.getWidth();
    }

    set Width(width: any) {
        this.node.setWidth(width);
    }

    get Height(): any {
        return this.node.getHeight();
    }

    set Height(height: any) {
        this.node.setHeight(height);
    }

    get X(): any {
        return this.node.getX();
    }

    set X(x: any) {
        this.node.setX(x);
    }

    get Y():any {
        return this.node.getY();
    }

    set Y(y: any) {
        this.node.setY(y);
    }

    get Id(): any {
        return this.node.getId();
    }

    set Id(id: any) {
        this.node.setId(id);
    }

    public getObject(): any {
        return { type: NodeType[this.getType()], width: this.Width, height: this.Height, x: this.X, y: this.Y, id: this.Id, text: this.getText() };
    }

    public getOutputPort(): any {
        for (var port of this.node.getOutputPorts().data) {
            if (port instanceof GGLLPort) {
                return port;
            }
        }
        return null;
    }

    public getOutputAlternativePort(): any {
        for (var port of this.node.getOutputPorts().data) {
            if (port instanceof GGLLAlternativePort) {
                return port;
            }
        }
        return null;
    }

    public getInputPort(number: any): any {
        return this.node.getInputPort(number);
    }
}