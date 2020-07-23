import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { StatusesPage } from './statuses.page';

describe('StatusesPage', () => {
  let component: StatusesPage;
  let fixture: ComponentFixture<StatusesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusesPage ],
      imports: [IonicModule.forRoot, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
