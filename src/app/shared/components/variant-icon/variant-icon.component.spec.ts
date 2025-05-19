import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantIconComponent } from './variant-icon.component';

describe('VariantIconComponent', () => {
  let component: VariantIconComponent;
  let fixture: ComponentFixture<VariantIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariantIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariantIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
