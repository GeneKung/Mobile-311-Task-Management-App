import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ListsetupPage } from './listsetup.page';

describe('ListsetupPage', () => {
  let component: ListsetupPage;
  let fixture: ComponentFixture<ListsetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsetupPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ListsetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
