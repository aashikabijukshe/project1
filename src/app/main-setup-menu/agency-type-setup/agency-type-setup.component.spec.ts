import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyTypeSetupComponent } from './agency-type-setup.component';

describe('AgencyTypeSetupComponent', () => {
  let component: AgencyTypeSetupComponent;
  let fixture: ComponentFixture<AgencyTypeSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyTypeSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyTypeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
