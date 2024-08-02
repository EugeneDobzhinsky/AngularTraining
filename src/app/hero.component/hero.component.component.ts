import {Component, Input} from '@angular/core';
import {Hero} from "../hero-functions";
import {NgForOf} from "@angular/common";
import {BottomlessBoxItem, Inventory, darkSoulsInventoryItems, Equipment, Magic, darkSoulsSpells} from "../Constants";
import {AlertModule} from "ngx-bootstrap/alert";

type ExampleAlertType = { type: string; msg: string; timeout: number };

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgForOf,
    AlertModule
  ],
  templateUrl: './hero.component.component.html',
  styleUrl: './hero.component.component.css'
})

export class HeroComponentComponent {
  @Input({required: true}) hero!: Hero;
  protected readonly darkSoulsInventoryItems = darkSoulsInventoryItems;

  public moveItemToTheBox(index: number, sliceArr: BottomlessBoxItem[]) {
    this.hero.bottomlessBox.push(...sliceArr.splice(index, 1));
  }

  alerts: ExampleAlertType[] = [];

  public decrementItemQuantity(item: Inventory) {
    if (item.quantity > 0) {
      item.quantity -= 1
      let magItem = this.darkSoulsInventoryItems.find((magItem: Inventory) => magItem.name === item.name)
      if (magItem) {
        magItem.quantity += 1
      }
    }
  }

  add(): void {
    this.alerts.push({
      type: 'info',
      msg: `Ho ho ho motherfucker (added: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });
  }

  public decrementSpellQuantity(item: Magic) {
    if (item.spell_uses > 0) {
      item.spell_uses--
      this.add()
    }
  }

  public chillAndRelax(item: Magic) {
    let findSpell = darkSoulsSpells.find((findSpell) => findSpell.name === item.name)
    if(findSpell) {
      item.spell_uses = findSpell.spell_uses
    }
  }

  public moveItemToTheInventoryOrEquipment(index: number) {
    if (this.hero.bottomlessBox[index].hasOwnProperty('magical')) {
      this.hero.equipments.push(...<Equipment[]>this.hero.bottomlessBox.splice(index, 1));
    } else {
      this.hero.inventory.push(...<Inventory[]>this.hero.bottomlessBox.splice(index, 1));
    }
  }
}


