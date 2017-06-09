import {Graph} from '../diagram/graph'
import {NodeType } from "../diagram/nodes/node-factory";

export class Users {

    private graph: Graph;

    constructor() {
    }

    attached() {
        this.graph = new Graph("canvas");
    }

    public select(selectedType: NodeType) {
        this.graph.Type = selectedType;
    }    
}
