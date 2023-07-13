import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedBookListComponent } from './issued-book-list.component';

describe('IssuedBookListComponent', () => {
  let component: IssuedBookListComponent;
  let fixture: ComponentFixture<IssuedBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssuedBookListComponent]
    });
    fixture = TestBed.createComponent(IssuedBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
