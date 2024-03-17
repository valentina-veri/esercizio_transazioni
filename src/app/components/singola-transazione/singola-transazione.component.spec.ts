import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingolaTransazioneComponent } from './singola-transazione.component';

describe('SingolaTransazioneComponent', () => {
  let component: SingolaTransazioneComponent;
  let fixture: ComponentFixture<SingolaTransazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingolaTransazioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingolaTransazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
