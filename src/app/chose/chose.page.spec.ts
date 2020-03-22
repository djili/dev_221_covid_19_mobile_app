import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChosePage } from './chose.page';

describe('ChosePage', () => {
  let component: ChosePage;
  let fixture: ComponentFixture<ChosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
