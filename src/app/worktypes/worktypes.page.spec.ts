import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { WorkTypesPage } from './worktypes.page';

describe('WorkTypesPage', () => {
  let component: WorkTypesPage;
  let fixture: ComponentFixture<WorkTypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTypesPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
