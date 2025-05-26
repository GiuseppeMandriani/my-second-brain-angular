import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandigComponent } from './home-landig.component';

describe('HomeLandigComponent', () => {
  let component: HomeLandigComponent;
  let fixture: ComponentFixture<HomeLandigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLandigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLandigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
