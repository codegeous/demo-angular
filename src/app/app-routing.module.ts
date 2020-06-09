import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DragulaReorderComponent } from "./components/dragula-reorder/dragula-reorder.component";
import { FormComponent } from "./components/form/form.component";

const routes: Routes = [
  { path: "reorder", component: DragulaReorderComponent },
  { path: "form", component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
