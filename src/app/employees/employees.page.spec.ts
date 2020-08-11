import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';

describe('EmployeesPage', () => {
  let component: EmployeesPage;
  let fixture: ComponentFixture<EmployeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesPage ],
      imports: [IonicModule.forRoot, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
