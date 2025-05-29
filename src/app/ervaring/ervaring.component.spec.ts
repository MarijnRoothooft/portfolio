import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErvaringComponent } from './ervaring.component';

describe('ErvaringComponent', () => {
  let component: ErvaringComponent;
  let fixture: ComponentFixture<ErvaringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErvaringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErvaringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
