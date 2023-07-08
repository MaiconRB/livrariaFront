import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemmComponent } from './product-itemm.component';

describe('ProductItemmComponent', () => {
  let component: ProductItemmComponent;
  let fixture: ComponentFixture<ProductItemmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemmComponent]
    });
    fixture = TestBed.createComponent(ProductItemmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
