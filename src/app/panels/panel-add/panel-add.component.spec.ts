import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAddComponent } from './panel-add.component';

describe('PanelAddComponent', () => {
  let component: PanelAddComponent;
  let fixture: ComponentFixture<PanelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
