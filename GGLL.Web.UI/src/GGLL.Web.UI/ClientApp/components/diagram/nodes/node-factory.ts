import { Start } from "./start";
import { LNTerminal } from "./left-nterminal";
import { NTerminal } from "./nterminal";
import { Terminal } from "./terminal";
import { Lambda } from "./lambda";
import { Node } from "./node";

export class NodeFactory {
    public static Create(nodeType: NodeType) : Node {
        switch (nodeType) {
            case NodeType.Start:
                return new Start();
            case NodeType.LNTerminal:
                return new LNTerminal();
            case NodeType.NTerminal:
                return new NTerminal();
            case NodeType.Terminal:
                return new Terminal();
            case NodeType.Lambda:
                return new Lambda();
        }
        return null;
    }

    public static CreateFromOject(object: any): Node {
        var type = NodeType[String(object.type)];
        var node = NodeFactory.Create(type);
        node.Height = object.height;
        node.Width = object.width;
        node.X = object.x;
        node.Y = object.y;
        node.Id = object.id;
        node.setText(object.text);
        return node;
    }
}


export enum NodeType {
    None = 0,
    Start = 1,
    LNTerminal = 2,
    NTerminal = 3,
    Terminal = 4,
    Lambda = 5
}