import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeackerItemComponent } from './speacker-item.component';

describe('SpeackerItemComponent', () => {
  let component: SpeackerItemComponent;
  let fixture: ComponentFixture<SpeackerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeackerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeackerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
