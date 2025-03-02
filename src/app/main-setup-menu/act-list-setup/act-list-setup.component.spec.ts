import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActListSetupComponent } from './act-list-setup.component';

describe('ActListSetupComponent', () => {
  let component: ActListSetupComponent;
  let fixture: ComponentFixture<ActListSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActListSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActListSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
