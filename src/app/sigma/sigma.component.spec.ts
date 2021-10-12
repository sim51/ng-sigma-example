import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigmaComponent } from './sigma.component';

describe('SigmaComponent', () => {
  let component: SigmaComponent;
  let fixture: ComponentFixture<SigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
