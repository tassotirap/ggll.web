GGLLClickCanvas = draw2d.policy.canvas.SelectionPolicy.extend({

    NAME: "GGLLClickCanvas",

    init: function (graph, callBack) {
        this._super();
        this.callBack = callBack;
        this.graph = graph;
    },

    onInstall: function (canvas) {
    },

    onUninstall: function (canvas) {
    },

    onMouseDown: function (canvas, x, y, shiftKey, ctrlKey) {
        this.callBack(this.graph, x, y);
    },

    onMouseMove: function (canvas, x, y) {
    },


    onMouseDrag: function (canvas, dx, dy, dx2, dy2) {
    },

    onMouseUp: function (canvas, x, y) {
    }
});