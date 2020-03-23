import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanguePage } from './langue.page';

describe('LanguePage', () => {
  let component: LanguePage;
  let fixture: ComponentFixture<LanguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
