import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosSummaryComponent } from './todos-summary.component';

describe('TodosSummaryComponent', () => {
  let component: TodosSummaryComponent;
  let fixture: ComponentFixture<TodosSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
