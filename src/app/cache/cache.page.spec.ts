import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CachePage } from './cache.page';

describe('CachePage', () => {
  let component: CachePage;
  let fixture: ComponentFixture<CachePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CachePage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CachePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
