import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresiveImageHeaderComponent } from './progresive-image-header.component';

describe('ProgresiveImageHeaderComponent', () => {
  let component: ProgresiveImageHeaderComponent;
  let fixture: ComponentFixture<ProgresiveImageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgresiveImageHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgresiveImageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
