import {Component, Input} from '@angular/core';
import {Magic} from "../Constants";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-spell-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './spell-card.component.html',
  styleUrl: './spell-card.component.css'
})
export class SpellCardComponent {
  @Input({required:true}) magic!: Magic;

}
