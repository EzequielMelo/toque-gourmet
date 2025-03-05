import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryReverseComponent } from './service-category-reverse.component';

describe('ServiceCategoryReverseComponent', () => {
  let component: ServiceCategoryReverseComponent;
  let fixture: ComponentFixture<ServiceCategoryReverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCategoryReverseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCategoryReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
