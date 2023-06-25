import { Input, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { InputComponent } from "./input/input.component";
import { FilterSearchPipe } from "../pipes/filter-search.pipe";
import { SearchContainerComponent } from "./search-container/search-container.component";
import { SearchCategoryButtonComponent } from "./search-category-button/search-category-button.component";
import { ListFilterPipe } from "../pipes/list-filter.pipe";


@NgModule({
  imports: [CommonModule, IonicModule,],
  declarations: [ButtonsComponent, InputComponent, SearchContainerComponent, SearchCategoryButtonComponent, ListFilterPipe],
  exports: [ButtonsComponent, InputComponent, SearchContainerComponent, SearchCategoryButtonComponent, ListFilterPipe],
})
export class SharedComponentsModule { }