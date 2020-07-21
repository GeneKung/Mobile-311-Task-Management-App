import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LogoutPage } from './logout.page';

describe('LogoutPage', () => {
  let component: LogoutPage;
  let fixture: ComponentFixture<LogoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutPage ],
      imports: [IonicModule.forRoot, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
