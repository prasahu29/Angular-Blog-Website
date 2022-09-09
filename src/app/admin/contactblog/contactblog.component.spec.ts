import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactblogComponent } from './contactblog.component';

describe('ContactblogComponent', () => {
  let component: ContactblogComponent;
  let fixture: ComponentFixture<ContactblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
