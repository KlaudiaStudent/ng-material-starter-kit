import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, of} from "rxjs;
import {EmployeeModel} from "../../model/employee.model;
import {fileURLToPath} from "url;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent {


}
