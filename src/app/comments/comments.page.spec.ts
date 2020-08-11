import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommentsPage } from './comments.page';

describe('CommentsPage', () => {
  let component: CommentsPage;
  let fixture: ComponentFixture<CommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsPage ],
      imports: [IonicModule.forRoot, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
