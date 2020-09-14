import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMangoComponent } from './product-mango.component';

describe('ProductMangoComponent', () => {
  let component: ProductMangoComponent;
  let fixture: ComponentFixture<ProductMangoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMangoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
