import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsBannerComponent } from './informations-banner.component';

describe('InformationsBannerComponent', () => {
  let component: InformationsBannerComponent;
  let fixture: ComponentFixture<InformationsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
