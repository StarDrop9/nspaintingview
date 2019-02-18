"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_service_1 = require("../core/data.service");
var page_1 = require("ui/page");
var platform_1 = require("tns-core-modules/platform");
var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(data, route, page) {
        this.data = data;
        this.route = route;
        this.page = page;
        this.opacity = 1;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.queryParams['id'];
        this.item = this.data.getItem(id);
        if (platform_1.isIOS) {
            this.page.actionBarHidden = true;
        }
    };
    ItemDetailComponent.prototype.onScroll = function (args) {
        if (args.scrollY > 0 && args.scrollY < 230) {
            this.opacity = 1 - (args.scrollY * 0.0043);
        }
        else if (args.scrollY < 0) {
            this.opacity = 1;
        }
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "ItemDetail",
            moduleId: module.id,
            templateUrl: "./item-detail.component.html"
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            page_1.Page])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxxREFBOEQ7QUFFOUQsZ0NBQStCO0FBQy9CLHNEQUFrRDtBQU9sRDtJQUlJLDZCQUNZLElBQWlCLEVBQ2pCLEtBQXFCLEVBQ3JCLElBQVU7UUFGVixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQU07UUFMdEIsWUFBTyxHQUFXLENBQUMsQ0FBQztJQU9wQixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksZ0JBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsSUFBcUI7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDOUM7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQXpCUSxtQkFBbUI7UUFML0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7eUNBTW9CLDBCQUFXO1lBQ1YsdUJBQWM7WUFDZixXQUFJO09BUGIsbUJBQW1CLENBMEIvQjtJQUFELDBCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSwgSURhdGFJdGVtIH0gZnJvbSBcIi4uL2NvcmUvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkl0ZW1EZXRhaWxcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtOiBJRGF0YUl0ZW07XG4gICAgb3BhY2l0eTogbnVtYmVyID0gMTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRhdGE6IERhdGFTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snaWQnXTtcbiAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5kYXRhLmdldEl0ZW0oaWQpO1xuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TY3JvbGwoYXJnczogU2Nyb2xsRXZlbnREYXRhKSB7XG4gICAgICAgIGlmIChhcmdzLnNjcm9sbFkgPiAwICYmIGFyZ3Muc2Nyb2xsWSA8IDIzMCkge1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMSAtIChhcmdzLnNjcm9sbFkgKiAwLjAwNDMpO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3Muc2Nyb2xsWSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=