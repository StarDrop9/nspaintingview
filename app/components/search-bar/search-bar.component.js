"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
        this.col = 0;
        this.row = 0;
        this.submit = new core_1.EventEmitter();
        this.clear = new core_1.EventEmitter();
    }
    SearchBarComponent.prototype.onLoaded = function (args) {
        var nativeView = args.object;
        if (platform_1.isIOS) {
            nativeView.nativeView.searchBarStyle = UISearchBarStyle.Prominent;
            nativeView.nativeView.backgroundImage = UIImage.new();
        }
        else {
            nativeView.android.clearFocus();
        }
    };
    SearchBarComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        searchBar.dismissSoftInput();
        this.submit.emit(searchBar.text);
    };
    SearchBarComponent.prototype.onClear = function () {
        this.clear.emit();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], SearchBarComponent.prototype, "col", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], SearchBarComponent.prototype, "row", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SearchBarComponent.prototype, "submit", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SearchBarComponent.prototype, "clear", void 0);
    SearchBarComponent = __decorate([
        core_1.Component({
            selector: "search",
            moduleId: module.id,
            templateUrl: "./search-bar.component.html"
        })
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUV2RSxxQ0FBaUM7QUFRakM7SUFMQTtRQU1hLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNmLFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDL0MsVUFBSyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQXVCNUQsQ0FBQztJQW5CRyxxQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQU0sVUFBVSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUMsSUFBSSxnQkFBSyxFQUFFO1lBQ1AsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1lBQ2xFLFVBQVUsQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN6RDthQUFNO1lBQ0gsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQztJQUNMLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQU0sU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxvQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBekJRO1FBQVIsWUFBSyxFQUFFOzttREFBaUI7SUFDaEI7UUFBUixZQUFLLEVBQUU7O21EQUFpQjtJQUNmO1FBQVQsYUFBTSxFQUFFO2tDQUFTLG1CQUFZO3NEQUEyQjtJQUMvQztRQUFULGFBQU0sRUFBRTtrQ0FBUSxtQkFBWTtxREFBMkI7SUFKL0Msa0JBQWtCO1FBTDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO09BQ1csa0JBQWtCLENBMkI5QjtJQUFELHlCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmRlY2xhcmUgdmFyIFVJU2VhcmNoQmFyU3R5bGUsIFVJSW1hZ2U7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNlYXJjaFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZWFyY2gtYmFyLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQmFyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBjb2w6IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgcm93OiBudW1iZXIgPSAwO1xuICAgIEBPdXRwdXQoKSBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBjbGVhcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuICAgIG9uTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgbmF0aXZlVmlldyA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgICAgbmF0aXZlVmlldy5uYXRpdmVWaWV3LnNlYXJjaEJhclN0eWxlID0gVUlTZWFyY2hCYXJTdHlsZS5Qcm9taW5lbnQ7XG4gICAgICAgICAgICBuYXRpdmVWaWV3Lm5hdGl2ZVZpZXcuYmFja2dyb3VuZEltYWdlID0gVUlJbWFnZS5uZXcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hdGl2ZVZpZXcuYW5kcm9pZC5jbGVhckZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN1Ym1pdChhcmdzKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIHNlYXJjaEJhci5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICAgIHRoaXMuc3VibWl0LmVtaXQoc2VhcmNoQmFyLnRleHQpO1xuICAgIH1cblxuICAgIG9uQ2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIuZW1pdCgpO1xuICAgIH1cbn1cbiJdfQ==