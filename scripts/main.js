MapResizeDialog.minSize = 0
MapResizeDialog.maxSize = 50000
if (!Vars.headless) {
    Vars.renderer.minZoom = 0.25;
    Vars.renderer.maxZoom = 200;
};
require("Berkeleys/BerkeleysItem");