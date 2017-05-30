import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggClickerComponent } from './egg-clicker.component';

describe('EggClickerComponent', () => {
  let component: EggClickerComponent;
  let fixture: ComponentFixture<EggClickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggClickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggClickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
