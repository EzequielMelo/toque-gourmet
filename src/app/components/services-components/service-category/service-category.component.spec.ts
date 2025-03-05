import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryComponent } from './service-category.component';

describe('ServiceCategoryComponent', () => {
  let component: ServiceCategoryComponent;
  let fixture: ComponentFixture<ServiceCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
