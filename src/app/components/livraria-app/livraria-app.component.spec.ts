import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrariaAppComponent } from './livraria-app.component';

describe('LivrariaAppComponent', () => {
  let component: LivrariaAppComponent;
  let fixture: ComponentFixture<LivrariaAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrariaAppComponent]
    });
    fixture = TestBed.createComponent(LivrariaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
