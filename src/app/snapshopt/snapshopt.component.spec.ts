import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshoptComponent } from './snapshopt.component';

describe('SnapshoptComponent', () => {
  let component: SnapshoptComponent;
  let fixture: ComponentFixture<SnapshoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapshoptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
