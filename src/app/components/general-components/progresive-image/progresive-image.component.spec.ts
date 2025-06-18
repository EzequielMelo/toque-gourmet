import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresiveImageComponent } from './progresive-image.component';

describe('ProgresiveImageComponent', () => {
  let component: ProgresiveImageComponent;
  let fixture: ComponentFixture<ProgresiveImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgresiveImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgresiveImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
