import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';

@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.css'],
  animations: [appModuleAnimation()]
})
export class AnalyticComponent extends AppComponentBase implements OnInit  {

  constructor(
    injector: Injector
) {
    super(injector);
}

  ngOnInit() {
  }

}
