import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraBotaoComponent } from './barra-botao.component';

describe('BarraBotaoComponent', () => {
  let component: BarraBotaoComponent;
  let fixture: ComponentFixture<BarraBotaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraBotaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraBotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
