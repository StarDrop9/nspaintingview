"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../core/data.service");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("@angular/router");
var utils_1 = require("tns-core-modules/utils/utils");
var platform_1 = require("tns-core-modules/platform");
var FavoritesListComponent = /** @class */ (function () {
    function FavoritesListComponent(_dataService, routerExtensions, _activatedRoute) {
        var _this = this;
        this._dataService = _dataService;
        this.routerExtensions = routerExtensions;
        this._activatedRoute = _activatedRoute;
        this.filteredItems = [];
        this._itemsSubscription = this._dataService.getLikedItems$()
            .subscribe(function (items) {
            _this.setItems(items);
        });
    }
    Object.defineProperty(FavoritesListComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
        },
        enumerable: true,
        configurable: true
    });
    FavoritesListComponent.prototype.setItems = function (items) {
        this.items = items;
        this.filteredItems = !!this._searchPhrase ? this.filterItems(items, this._searchPhrase) : this.items;
    };
    FavoritesListComponent.prototype.ngOnDestroy = function () {
        this._itemsSubscription.unsubscribe();
    };
    FavoritesListComponent.prototype.onSearch = function (text) {
        this._searchPhrase = text;
        this.filteredItems = this.filterItems(this.items, text);
    };
    FavoritesListComponent.prototype.onClear = function () {
        this._searchPhrase = "";
        this.filteredItems = this.items;
    };
    FavoritesListComponent.prototype.onDislike = function (args) {
        this._dataService.dislike(args.item);
    };
    FavoritesListComponent.prototype.dismissKeyboard = function (args) {
        if (args.action == "down") {
            if (platform_1.isAndroid) {
                utils_1.ad.dismissSoftInput();
            }
            else {
                utils_1.ios.getter(UIApplication, UIApplication.sharedApplication)
                    .keyWindow
                    .endEditing(true);
            }
        }
    };
    FavoritesListComponent.prototype.filterItems = function (items, text) {
        return items.filter(function (data) {
            return data.title.includes(text) || data.author.includes(text);
        });
    };
    FavoritesListComponent.prototype.onTap = function (id) {
        var navigationExtras = {
            queryParams: {
                "id": id
            },
            relativeTo: this._activatedRoute
        };
        this.routerExtensions.navigate(['/', { outlets: { favoritesTab: ['item'] } }], navigationExtras);
    };
    FavoritesListComponent = __decorate([
        core_1.Component({
            selector: "Search",
            moduleId: module.id,
            templateUrl: "./favorites-list.component.html"
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            nativescript_angular_1.RouterExtensions,
            router_1.ActivatedRoute])
    ], FavoritesListComponent);
    return FavoritesListComponent;
}());
exports.FavoritesListComponent = FavoritesListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmF2b3JpdGVzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFEO0FBQ3JELHFEQUE4RDtBQUM5RCw2REFBd0Q7QUFDeEQsMENBQW1FO0FBRW5FLHNEQUF1RDtBQUN2RCxzREFBc0Q7QUFTdEQ7SUFPSSxnQ0FBb0IsWUFBeUIsRUFDakMsZ0JBQWtDLEVBQ2xDLGVBQStCO1FBRjNDLGlCQU9DO1FBUG1CLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ2pDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBUDNDLGtCQUFhLEdBQXFCLEVBQUUsQ0FBQztRQVFqQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUU7YUFDdkQsU0FBUyxDQUFDLFVBQUMsS0FBdUI7WUFDL0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxzQkFBSSx5Q0FBSzthQUlUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFORCxVQUFVLEtBQXVCO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBTUQseUNBQVEsR0FBUixVQUFTLEtBQUs7UUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekcsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHlDQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx3Q0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwwQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZ0RBQWUsR0FBZixVQUFnQixJQUEyQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFFO1lBQ3ZCLElBQUksb0JBQVMsRUFBRTtnQkFDWCxVQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6QjtpQkFBTTtnQkFDSCxXQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsaUJBQWlCLENBQUM7cUJBQ3JELFNBQVM7cUJBQ1QsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO1NBQ0o7SUFDTCxDQUFDO0lBRU8sNENBQVcsR0FBbkIsVUFBb0IsS0FBdUIsRUFBRSxJQUFZO1FBQ3JELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7WUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxzQ0FBSyxHQUFiLFVBQWMsRUFBVTtRQUNwQixJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLEVBQUU7YUFDWDtZQUNELFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUNuQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDckcsQ0FBQztJQXpFUSxzQkFBc0I7UUFMbEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsaUNBQWlDO1NBQ2pELENBQUM7eUNBUW9DLDBCQUFXO1lBQ2YsdUNBQWdCO1lBQ2pCLHVCQUFjO09BVGxDLHNCQUFzQixDQTBFbEM7SUFBRCw2QkFBQztDQUFBLEFBMUVELElBMEVDO0FBMUVZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlLCBJRGF0YUl0ZW0gfSBmcm9tIFwiLi4vY29yZS9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IGFkLCBpb3MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuZGVjbGFyZSB2YXIgVUlBcHBsaWNhdGlvbjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJTZWFyY2hcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmF2b3JpdGVzLWxpc3QuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZXNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIGZpbHRlcmVkSXRlbXM6IEFycmF5PElEYXRhSXRlbT4gPSBbXTtcbiAgICBwcml2YXRlIF9pdGVtc1N1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIF9pdGVtczogQXJyYXk8SURhdGFJdGVtPjtcbiAgICBwcml2YXRlIF9zZWFyY2hQaHJhc2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICAgdGhpcy5faXRlbXNTdWJzY3JpcHRpb24gPSB0aGlzLl9kYXRhU2VydmljZS5nZXRMaWtlZEl0ZW1zJCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8SURhdGFJdGVtPikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbXMoaXRlbXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0IGl0ZW1zKGl0ZW1zOiBBcnJheTxJRGF0YUl0ZW0+KSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gICAgfVxuXG4gICAgc2V0SXRlbXMoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSAhIXRoaXMuX3NlYXJjaFBocmFzZSA/IHRoaXMuZmlsdGVySXRlbXMoaXRlbXMsIHRoaXMuX3NlYXJjaFBocmFzZSkgOiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9pdGVtc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIG9uU2VhcmNoKHRleHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zZWFyY2hQaHJhc2UgPSB0ZXh0O1xuICAgICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlckl0ZW1zKHRoaXMuaXRlbXMsIHRleHQpO1xuICAgIH1cblxuICAgIG9uQ2xlYXIoKSB7XG4gICAgICAgIHRoaXMuX3NlYXJjaFBocmFzZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgfVxuXG4gICAgb25EaXNsaWtlKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuZGlzbGlrZShhcmdzLml0ZW0pO1xuICAgIH1cblxuICAgIGRpc21pc3NLZXlib2FyZChhcmdzOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpIHtcbiAgICAgICAgaWYgKGFyZ3MuYWN0aW9uID09IFwiZG93blwiKSB7XG4gICAgICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgYWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpb3MuZ2V0dGVyKFVJQXBwbGljYXRpb24sIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIC5rZXlXaW5kb3dcbiAgICAgICAgICAgICAgICAgICAgLmVuZEVkaXRpbmcodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbHRlckl0ZW1zKGl0ZW1zOiBBcnJheTxJRGF0YUl0ZW0+LCB0ZXh0OiBzdHJpbmcpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEudGl0bGUuaW5jbHVkZXModGV4dCkgfHwgZGF0YS5hdXRob3IuaW5jbHVkZXModGV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25UYXAoaWQ6IG51bWJlcikge1xuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiBpZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMuX2FjdGl2YXRlZFJvdXRlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy8nLCB7IG91dGxldHM6IHsgZmF2b3JpdGVzVGFiOiBbJ2l0ZW0nXSB9IH1dLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICB9XG59XG4iXX0=