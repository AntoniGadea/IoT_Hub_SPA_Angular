import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeackerListComponent } from './speacker-list.component';

describe('SpeackerListComponent', () => {
  let component: SpeackerListComponent;
  let fixture: ComponentFixture<SpeackerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeackerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
