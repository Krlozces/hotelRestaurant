import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsLocationComponent } from './rooms-location.component';

describe('RoomsLocationComponent', () => {
  let component: RoomsLocationComponent;
  let fixture: ComponentFixture<RoomsLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
