import { Component, Input } from '@angular/core';
import { Transazione } from '../../../models/transazione';

@Component({
  selector: 'app-singola-transazione',
  templateUrl: './singola-transazione.component.html',
  styleUrl: './singola-transazione.component.css'
})
export class SingolaTransazioneComponent {
  @Input()
transazione?:Transazione
}
