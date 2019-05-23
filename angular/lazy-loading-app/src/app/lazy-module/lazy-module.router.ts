import { NgModule } from '@angular/core';  
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { Routes ,RouterModule} from '@angular/router';  
  
const routes :Routes =  
[  
  {  
    path:'laz-comp', component:LazyComponentComponent  
  }
]  
  
@NgModule({    
  imports: [  
    RouterModule.forChild(routes),  
  ],  
  exports: [RouterModule]  
})  
export class LazyModuleRouter { } 
