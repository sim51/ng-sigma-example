import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceAtlas2Component } from './force-atlas2.component';

describe('ForceAtlas2Component', () => {
  let component: ForceAtlas2Component;
  let fixture: ComponentFixture<ForceAtlas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForceAtlas2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceAtlas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
