"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CircularProgressBarComponent = /** @class */ (function () {
    function CircularProgressBarComponent() {
        this.size = 41;
        this.progress = 81;
        this.col = 0;
        this.row = 0;
        this.colSpan = 0;
        this.rowSpan = 0;
    }
    Object.defineProperty(CircularProgressBarComponent.prototype, "height", {
        get: function () {
            return Math.min(this.size, 250);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CircularProgressBarComponent.prototype, "value", {
        get: function () {
            return Math.min(this.progress, 100);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CircularProgressBarComponent.prototype, "textSize", {
        get: function () {
            return this.height / 3.5;
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "progress", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "col", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "colSpan", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "rowSpan", void 0);
    CircularProgressBarComponent = __decorate([
        core_1.Component({
            selector: "circular-progress-bar",
            moduleId: module.id,
            templateUrl: "./circular-progress-bar.component.html"
        })
    ], CircularProgressBarComponent);
    return CircularProgressBarComponent;
}());
exports.CircularProgressBarComponent = CircularProgressBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY3VsYXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNpcmN1bGFyLXByb2dyZXNzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFPakQ7SUFMQTtRQU1VLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLENBQUMsQ0FBQztJQVd0QixDQUFDO0lBVEEsc0JBQUksZ0RBQU07YUFBVjtZQUNDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUNGLHNCQUFJLCtDQUFLO2FBQVQ7WUFDQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFDRixzQkFBSSxrREFBUTthQUFaO1lBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFmTztRQUFSLFlBQUssRUFBRTs7OERBQVc7SUFDVjtRQUFSLFlBQUssRUFBRTs7a0VBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTs7NkRBQVM7SUFDUjtRQUFSLFlBQUssRUFBRTs7NkRBQVM7SUFDUjtRQUFSLFlBQUssRUFBRTs7aUVBQWE7SUFDWjtRQUFSLFlBQUssRUFBRTs7aUVBQWE7SUFOVCw0QkFBNEI7UUFMeEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3Q0FBd0M7U0FDckQsQ0FBQztPQUNXLDRCQUE0QixDQWlCeEM7SUFBRCxtQ0FBQztDQUFBLEFBakJELElBaUJDO0FBakJZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiY2lyY3VsYXItcHJvZ3Jlc3MtYmFyXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vY2lyY3VsYXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQ2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHNpemUgPSA0MTtcblx0QElucHV0KCkgcHJvZ3Jlc3MgPSA4MTtcblx0QElucHV0KCkgY29sID0gMDtcblx0QElucHV0KCkgcm93ID0gMDtcblx0QElucHV0KCkgY29sU3BhbiA9IDA7XG5cdEBJbnB1dCgpIHJvd1NwYW4gPSAwO1xuXG5cdGdldCBoZWlnaHQoKSB7XG5cdFx0cmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZSwgMjUwKTtcblx0fTtcblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiBNYXRoLm1pbih0aGlzLnByb2dyZXNzLCAxMDApO1xuXHR9O1xuXHRnZXQgdGV4dFNpemUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGVpZ2h0IC8gMy41O1xuXHR9O1xufVxuIl19