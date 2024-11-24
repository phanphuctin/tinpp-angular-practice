import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeborahTodoComponent } from './deborah-todo.component';

describe('DeborahTodoComponent', () => {
  let component: DeborahTodoComponent;
  let fixture: ComponentFixture<DeborahTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeborahTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeborahTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
