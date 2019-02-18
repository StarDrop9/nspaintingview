"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var CustomActionBarComponent = /** @class */ (function () {
    function CustomActionBarComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.title = "";
        this.isBack = false;
        this.col = 0;
        this.row = 0;
        this.colSpan = 0;
        this.rowSpan = 0;
    }
    CustomActionBarComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CustomActionBarComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CustomActionBarComponent.prototype, "isBack", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CustomActionBarComponent.prototype, "col", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CustomActionBarComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CustomActionBarComponent.prototype, "colSpan", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CustomActionBarComponent.prototype, "rowSpan", void 0);
    CustomActionBarComponent = __decorate([
        core_1.Component({
            selector: "custom-action-bar",
            moduleId: module.id,
            templateUrl: "./custom-action-bar.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], CustomActionBarComponent);
    return CustomActionBarComponent;
}());
exports.CustomActionBarComponent = CustomActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWFjdGlvbi1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VzdG9tLWFjdGlvbi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDZEQUF3RDtBQU94RDtJQU9JLGtDQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU43QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztJQUU3QixDQUFDO0lBRUQseUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBWFE7UUFBUixZQUFLLEVBQUU7OzJEQUFvQjtJQUNuQjtRQUFSLFlBQUssRUFBRTs7NERBQXlCO0lBQ3hCO1FBQVIsWUFBSyxFQUFFOzt5REFBaUI7SUFDaEI7UUFBUixZQUFLLEVBQUU7O3lEQUFpQjtJQUNoQjtRQUFSLFlBQUssRUFBRTs7NkRBQXFCO0lBQ3BCO1FBQVIsWUFBSyxFQUFFOzs2REFBcUI7SUFOcEIsd0JBQXdCO1FBTHBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1NBQ3BELENBQUM7eUNBUXdDLHVDQUFnQjtPQVA3Qyx3QkFBd0IsQ0FhcEM7SUFBRCwrQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjdXN0b20tYWN0aW9uLWJhclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jdXN0b20tYWN0aW9uLWJhci5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUFjdGlvbkJhckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gICAgQElucHV0KCkgaXNCYWNrOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgY29sOiBudW1iZXIgPSAwO1xuICAgIEBJbnB1dCgpIHJvdzogbnVtYmVyID0gMDtcbiAgICBASW5wdXQoKSBjb2xTcGFuOiBudW1iZXIgPSAwO1xuICAgIEBJbnB1dCgpIHJvd1NwYW46IG51bWJlciA9IDA7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgfVxuXG4gICAgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cbn1cbiJdfQ==