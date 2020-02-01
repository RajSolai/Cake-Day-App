import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BdaysPage } from './bdays.page';

describe('BdaysPage', () => {
  let component: BdaysPage;
  let fixture: ComponentFixture<BdaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdaysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BdaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
