import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SupportPage } from './support.page';

describe('FolderPage', () => {
  let component: SupportPage;
  let fixture: ComponentFixture<SupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(SupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
