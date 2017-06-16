import {Graph} from '../diagram/graph'
import {NodeType} from "../diagram/nodes/node-factory";

export class Ggll {

    private graph: Graph;

    constructor() {
    }

    attached() {
        this.graph = new Graph("canvas");

        if (localStorage.getItem('objets'))
        {
            var stringOjects = localStorage.getItem('objets');
            var objects = JSON.parse(stringOjects);
            this.graph.setObjects(objects);
        }
    }

    public select(selectedType: NodeType) {
        this.graph.Type = selectedType;
    }

    public save() {
        var objets = this.graph.getObjects();
        var json = JSON.stringify(objets);
        localStorage.setItem('objets', json);
        console.log("objets: " + json);  
    }

    public reset() {
        this.graph.reset();
    }
}
