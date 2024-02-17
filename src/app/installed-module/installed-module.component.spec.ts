import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalledModuleComponent } from './installed-module.component';

describe('InstalledModuleComponent', () => {
  let component: InstalledModuleComponent;
  let fixture: ComponentFixture<InstalledModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalledModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstalledModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
