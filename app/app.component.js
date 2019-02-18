"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animation_1 = require("tns-core-modules/ui/animation");
var enums_1 = require("tns-core-modules/ui/enums");
var data_service_1 = require("./core/data.service");
var utils_1 = require("tns-core-modules/utils/utils");
var platform_1 = require("tns-core-modules/platform");
var AppComponent = /** @class */ (function () {
    function AppComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this.tabIndex = 1;
        this._nativeTabsDisabled = false;
        this._favItemsLength = 0;
        this._itemsSubscription = this._dataService.getLikedItems$()
            .subscribe(function (items) {
            if (_this.tabIndex === 1 && items.length !== _this._favItemsLength) {
                _this.notifyNewFav();
            }
            _this._favItemsLength = items.length;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent.prototype.onFavIconLoaded = function (args) {
        this._favIcon = args.object;
    };
    AppComponent.prototype.notifyNewFav = function () {
        var _this = this;
        var iconPrefix = "~/images/";
        if (this._favIcon) {
            this._favIcon.src = iconPrefix + "star.png";
            this.popAnimation(this._favIcon).play().then(function () {
                _this._backToNormalAnimationTimeout = setTimeout(function () {
                    _this.backToNormalAnimation(_this._favIcon).play().then(function () {
                        _this._favIcon.src = iconPrefix + "star_o.png";
                        _this._favIcon.opacity = 1;
                    });
                }, 250);
            });
        }
    };
    AppComponent.prototype.getIconSource = function (icon, tabIndex) {
        var iconPrefix = "~/images/";
        var iconSuffix = tabIndex === this.tabIndex ? ".png" : "_o.png";
        if (this._backToNormalAnimationTimeout && this.tabIndex === 0) {
            clearTimeout(this._backToNormalAnimationTimeout);
            this._backToNormalAnimationTimeout = null;
            this._favIcon.opacity = 1;
            this._favIcon.scaleX = 1;
            this._favIcon.scaleY = 1;
        }
        return iconPrefix + icon + iconSuffix;
    };
    AppComponent.prototype.onTabViewLoaded = function (args) {
        var tabView = args.object;
        if (!this._nativeTabsDisabled) {
            if (tabView) {
                if (tabView.android) {
                    tabView.android.removeViewAt(1);
                }
                else {
                    tabView.ios.tabBar.hidden = true;
                }
            }
            this._nativeTabsDisabled = true;
        }
    };
    AppComponent.prototype.changeTabIndex = function (index) {
        try {
            if (platform_1.isAndroid) {
                utils_1.ad.dismissSoftInput();
            }
            else {
                utils_1.ios.getter(UIApplication, UIApplication.sharedApplication)
                    .keyWindow
                    .endEditing(true);
            }
        }
        catch (e) {
            console.error(e);
        }
        if (index == 2) {
            alert('No content here :( Check out favorites list! Don\'t miss items details.');
        }
        else {
            this.tabIndex = index;
        }
    };
    AppComponent.prototype.popAnimation = function (view) {
        return new animation_1.Animation([
            {
                scale: { x: 1.2, y: 1.2 },
                duration: 200,
                curve: enums_1.AnimationCurve.spring,
                target: view
            }
        ]);
    };
    AppComponent.prototype.backToNormalAnimation = function (view) {
        return new animation_1.Animation([
            {
                scale: { x: 1, y: 1 },
                opacity: 0,
                duration: 150,
                curve: enums_1.AnimationCurve.easeInOut,
                target: view
            }
        ]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "app.component.html",
            styleUrls: ["./app.css"]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFFN0QsMkRBQTBEO0FBRTFELG1EQUEyRDtBQUczRCxvREFBNkQ7QUFDN0Qsc0RBQXVEO0FBQ3ZELHNEQUFzRDtBQVV0RDtJQVVJLHNCQUFvQixZQUF5QjtRQUE3QyxpQkFRQztRQVJtQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVI3QyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRWIsd0JBQW1CLEdBQVksS0FBSyxDQUFDO1FBSXJDLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBR3hCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRTthQUN2RCxTQUFTLENBQUMsVUFBQyxLQUF1QjtZQUMvQixJQUFJLEtBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSSxDQUFDLGVBQWUsRUFBRTtnQkFDOUQsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCO1lBQ0QsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELGtDQUFXLEdBQVg7SUFDQSxDQUFDO0lBRUQsc0NBQWUsR0FBZixVQUFnQixJQUFlO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QyxDQUFDO0lBRUQsbUNBQVksR0FBWjtRQUFBLGlCQWFDO1FBWkcsSUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBRyxVQUFVLENB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YyxDQUFDLE1BQU07Z0JBQzVCLE1BQU0sRUFBRSxJQUFJO2FBQ2Y7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sNENBQXFCLEdBQTdCLFVBQThCLElBQVU7UUFDcEMsT0FBTyxJQUFJLHFCQUFTLENBQUM7WUFDakI7Z0JBQ0ksS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNyQixPQUFPLEVBQUUsQ0FBQztnQkFDVixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsc0JBQWMsQ0FBQyxTQUFTO2dCQUMvQixNQUFNLEVBQUUsSUFBSTthQUNmO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWxIUSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7U0FDM0IsQ0FBQzt5Q0FXb0MsMEJBQVc7T0FWcEMsWUFBWSxDQW9IeEI7SUFBRCxtQkFBQztDQUFBLEFBcEhELElBb0hDO0FBcEhZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FuaW1hdGlvblwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xuaW1wb3J0IHsgVGFiVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSwgSURhdGFJdGVtIH0gZnJvbSBcIi4vY29yZS9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IGFkLCBpb3MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuZGVjbGFyZSB2YXIgVUlBcHBsaWNhdGlvbjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9hcHAuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHRhYkluZGV4OiBudW1iZXIgPSAxO1xuXG4gICAgcHJpdmF0ZSBfbmF0aXZlVGFic0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXRlbXNTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfZmF2SWNvbjogSW1hZ2U7XG4gICAgcHJpdmF0ZSBfYmFja1RvTm9ybWFsQW5pbWF0aW9uVGltZW91dDtcbiAgICBwcml2YXRlIF9mYXZJdGVtc0xlbmd0aCA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5faXRlbXNTdWJzY3JpcHRpb24gPSB0aGlzLl9kYXRhU2VydmljZS5nZXRMaWtlZEl0ZW1zJCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8SURhdGFJdGVtPikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYkluZGV4ID09PSAxICYmIGl0ZW1zLmxlbmd0aCAhPT0gdGhpcy5fZmF2SXRlbXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlOZXdGYXYoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fZmF2SXRlbXNMZW5ndGggPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgfVxuXG4gICAgb25GYXZJY29uTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLl9mYXZJY29uID0gPEltYWdlPmFyZ3Mub2JqZWN0O1xuICAgIH1cblxuICAgIG5vdGlmeU5ld0ZhdigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWNvblByZWZpeCA9IFwifi9pbWFnZXMvXCI7XG4gICAgICAgIGlmICh0aGlzLl9mYXZJY29uKSB7XG4gICAgICAgICAgICB0aGlzLl9mYXZJY29uLnNyYyA9IGljb25QcmVmaXggKyBcInN0YXIucG5nXCI7XG4gICAgICAgICAgICB0aGlzLnBvcEFuaW1hdGlvbih0aGlzLl9mYXZJY29uKS5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmFja1RvTm9ybWFsQW5pbWF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tUb05vcm1hbEFuaW1hdGlvbih0aGlzLl9mYXZJY29uKS5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYXZJY29uLnNyYyA9IGljb25QcmVmaXggKyBcInN0YXJfby5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zhdkljb24ub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEljb25Tb3VyY2UoaWNvbjogc3RyaW5nLCB0YWJJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaWNvblByZWZpeCA9IFwifi9pbWFnZXMvXCI7XG4gICAgICAgIGNvbnN0IGljb25TdWZmaXggPSB0YWJJbmRleCA9PT0gdGhpcy50YWJJbmRleCA/IFwiLnBuZ1wiIDogXCJfby5wbmdcIjtcbiAgICAgICAgaWYgKHRoaXMuX2JhY2tUb05vcm1hbEFuaW1hdGlvblRpbWVvdXQgJiYgdGhpcy50YWJJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2JhY2tUb05vcm1hbEFuaW1hdGlvblRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5fYmFja1RvTm9ybWFsQW5pbWF0aW9uVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9mYXZJY29uLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgdGhpcy5fZmF2SWNvbi5zY2FsZVggPSAxO1xuICAgICAgICAgICAgdGhpcy5fZmF2SWNvbi5zY2FsZVkgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGljb25QcmVmaXggKyBpY29uICsgaWNvblN1ZmZpeDtcbiAgICB9XG5cbiAgICBvblRhYlZpZXdMb2FkZWQoYXJnczogRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRhYlZpZXcgPSA8VGFiVmlldz5hcmdzLm9iamVjdDtcbiAgICAgICAgaWYgKCF0aGlzLl9uYXRpdmVUYWJzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGlmICh0YWJWaWV3KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYlZpZXcuYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJWaWV3LmFuZHJvaWQucmVtb3ZlVmlld0F0KDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYlZpZXcuaW9zLnRhYkJhci5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX25hdGl2ZVRhYnNEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VUYWJJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgYWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpb3MuZ2V0dGVyKFVJQXBwbGljYXRpb24sIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIC5rZXlXaW5kb3dcbiAgICAgICAgICAgICAgICAgICAgLmVuZEVkaXRpbmcodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09IDIpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdObyBjb250ZW50IGhlcmUgOiggQ2hlY2sgb3V0IGZhdm9yaXRlcyBsaXN0ISBEb25cXCd0IG1pc3MgaXRlbXMgZGV0YWlscy4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcG9wQW5pbWF0aW9uKHZpZXc6IFZpZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYXRpb24oW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNjYWxlOiB7IHg6IDEuMiwgeTogMS4yIH0sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuc3ByaW5nLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdmlld1xuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJhY2tUb05vcm1hbEFuaW1hdGlvbih2aWV3OiBWaWV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXQsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB2aWV3XG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgIH1cblxufVxuIl19