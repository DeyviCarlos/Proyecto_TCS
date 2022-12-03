import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposEntregasComponent } from './tipos-entregas.component';

describe('TiposEntregasComponent', () => {
  let component: TiposEntregasComponent;
  let fixture: ComponentFixture<TiposEntregasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposEntregasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposEntregasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
