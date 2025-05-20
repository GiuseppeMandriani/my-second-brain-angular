import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantIconDemoComponent } from './variant-icon-demo.component';

describe('VariantIconDemoComponent', () => {
  let component: VariantIconDemoComponent;
  let fixture: ComponentFixture<VariantIconDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariantIconDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariantIconDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
