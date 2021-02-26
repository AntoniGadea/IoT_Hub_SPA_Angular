import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLightComponent } from './add-light.component';

describe('AddLightComponent', () => {
  let component: AddLightComponent;
  let fixture: ComponentFixture<AddLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
