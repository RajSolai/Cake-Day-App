import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddbdayPage } from './addbday.page';

describe('AddbdayPage', () => {
  let component: AddbdayPage;
  let fixture: ComponentFixture<AddbdayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbdayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddbdayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
