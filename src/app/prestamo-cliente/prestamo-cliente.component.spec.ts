import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoClienteComponent } from './prestamo-cliente.component';

describe('PrestamoClienteComponent', () => {
  let component: PrestamoClienteComponent;
  let fixture: ComponentFixture<PrestamoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
