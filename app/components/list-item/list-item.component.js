"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
        this.isFavorite = false;
        this.disliked = new core_1.EventEmitter();
        this.tapped = new core_1.EventEmitter();
    }
    ListItemComponent.prototype.emitTap = function () {
        this.tapped.emit(this);
    };
    ListItemComponent.prototype.emitDislike = function (item) {
        this.disliked.emit(this);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ListItemComponent.prototype, "isFavorite", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ListItemComponent.prototype, "item", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ListItemComponent.prototype, "disliked", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ListItemComponent.prototype, "tapped", void 0);
    ListItemComponent = __decorate([
        core_1.Component({
            selector: "list-item",
            moduleId: module.id,
            templateUrl: "./list-item.component.html"
        })
    ], ListItemComponent);
    return ListItemComponent;
}());
exports.ListItemComponent = ListItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUU7QUFTdkU7SUFOQTtRQVFhLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHM0IsYUFBUSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNqRCxXQUFNLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBUzdELENBQUM7SUFQRyxtQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxJQUFlO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFaUTtRQUFSLFlBQUssRUFBRTs7eURBQTZCO0lBQzVCO1FBQVIsWUFBSyxFQUFFOzttREFBaUI7SUFFZjtRQUFULGFBQU0sRUFBRTtrQ0FBVyxtQkFBWTt1REFBMkI7SUFDakQ7UUFBVCxhQUFNLEVBQUU7a0NBQVMsbUJBQVk7cURBQTJCO0lBTmhELGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7U0FDNUMsQ0FBQztPQUVXLGlCQUFpQixDQWU3QjtJQUFELHdCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSURhdGFJdGVtIH0gZnJvbSBcIi4uLy4uL2NvcmUvZGF0YS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxpc3QtaXRlbVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWxcIlxufSlcblxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIGlzRmF2b3JpdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBpdGVtOiBJRGF0YUl0ZW07XG5cbiAgICBAT3V0cHV0KCkgZGlzbGlrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSB0YXBwZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgZW1pdFRhcCgpIHtcbiAgICAgICAgdGhpcy50YXBwZWQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBlbWl0RGlzbGlrZShpdGVtOiBJRGF0YUl0ZW0pIHtcbiAgICAgICAgdGhpcy5kaXNsaWtlZC5lbWl0KHRoaXMpO1xuICAgIH1cbn1cbiJdfQ==