"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_angular_1 = require("nativescript-angular");
var angular_1 = require("nativescript-ui-gauge/angular");
var animations_1 = require("nativescript-angular/animations");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var core_module_1 = require("./core/core.module");
var list_item_component_1 = require("./components/list-item/list-item.component");
var search_bar_component_1 = require("./components/search-bar/search-bar.component");
var custom_action_bar_component_1 = require("./components/custom-action-bar/custom-action-bar.component");
var circular_progress_bar_component_1 = require("./components/circular-progress-bar/circular-progress-bar.component");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_cardview_1 = require("./nativescript-cardview");
var nativescript_swipe_layout_1 = require("./nativescript-swipe-layout");
element_registry_1.registerElement("CardView", function () { return nativescript_cardview_1.CardView; });
element_registry_1.registerElement("SwipeLayout", function () { return nativescript_swipe_layout_1.SwipeLayout; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIGaugeModule,
                animations_1.NativeScriptAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                core_module_1.CoreModule
            ],
            declarations: [
                app_component_1.AppComponent,
                list_item_component_1.ListItemComponent,
                search_bar_component_1.SearchBarComponent,
                custom_action_bar_component_1.CustomActionBarComponent,
                circular_progress_bar_component_1.CircularProgressBarComponent
            ].concat(app_routing_module_1.COMPONENTS),
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLDZEQUErRDtBQUMvRCx5REFBMEU7QUFDMUUsOERBQStFO0FBRS9FLDJEQUFvRTtBQUNwRSxpREFBK0M7QUFDL0Msa0RBQWdEO0FBQ2hELGtGQUErRTtBQUMvRSxxRkFBa0Y7QUFDbEYsMEdBQXNHO0FBQ3RHLHNIQUFrSDtBQUVsSCwwRUFBd0U7QUFDeEUsaUVBQW1EO0FBQ25ELHlFQUEwRDtBQUUxRCxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsZ0NBQVEsRUFBUixDQUFRLENBQUMsQ0FBQztBQUM1QyxrQ0FBZSxDQUFDLGFBQWEsRUFBRSxjQUFNLE9BQUEsdUNBQVcsRUFBWCxDQUFXLENBQUMsQ0FBQztBQTBCbEQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXhCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4Q0FBdUI7Z0JBQ3ZCLG1DQUF5QjtnQkFDekIseUNBQTRCO2dCQUM1QixxQ0FBZ0I7Z0JBQ2hCLHdCQUFVO2FBQ2I7WUFDRCxZQUFZO2dCQUNSLDRCQUFZO2dCQUNaLHVDQUFpQjtnQkFDakIseUNBQWtCO2dCQUNsQixzREFBd0I7Z0JBQ3hCLDhEQUE0QjtxQkFDekIsK0JBQVUsQ0FDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2FuaW1hdGlvbnNcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSwgQ09NUE9ORU5UUyB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gXCIuL2NvcmUvY29yZS5tb2R1bGVcIjtcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VhcmNoQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdXN0b21BY3Rpb25CYXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2N1c3RvbS1hY3Rpb24tYmFyL2N1c3RvbS1hY3Rpb24tYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2lyY3VsYXItcHJvZ3Jlc3MtYmFyL2NpcmN1bGFyLXByb2dyZXNzLWJhci5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IENhcmRWaWV3IH0gZnJvbSBcIi4vbmF0aXZlc2NyaXB0LWNhcmR2aWV3XCI7XG5pbXBvcnQgeyBTd2lwZUxheW91dCB9IGZyb20gXCIuL25hdGl2ZXNjcmlwdC1zd2lwZS1sYXlvdXRcIjtcblxucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gQ2FyZFZpZXcpO1xucmVnaXN0ZXJFbGVtZW50KFwiU3dpcGVMYXlvdXRcIiwgKCkgPT4gU3dpcGVMYXlvdXQpO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0QW5pbWF0aW9uc01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgQ29yZU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTGlzdEl0ZW1Db21wb25lbnQsXG4gICAgICAgIFNlYXJjaEJhckNvbXBvbmVudCxcbiAgICAgICAgQ3VzdG9tQWN0aW9uQmFyQ29tcG9uZW50LFxuICAgICAgICBDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50LFxuICAgICAgICAuLi5DT01QT05FTlRTXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==