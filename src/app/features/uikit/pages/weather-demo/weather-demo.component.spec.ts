import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDemoComponent } from './weather-demo.component';

describe('WeatherDemoComponent', () => {
  let component: WeatherDemoComponent;
  let fixture: ComponentFixture<WeatherDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
