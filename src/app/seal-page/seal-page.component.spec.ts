import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SealPageComponent } from './seal-page.component';

describe('SealPageComponent', () => {
  let component: SealPageComponent;
  let fixture: ComponentFixture<SealPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SealPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SealPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
