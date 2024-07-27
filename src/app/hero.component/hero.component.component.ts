import {Component, Input} from '@angular/core';
import {Hero} from "../hero-functions";
import {NgForOf} from "@angular/common";
import {BottomlessBoxItem, Inventory, darkSoulsInventoryItems, Equipment} from "../Constants";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './hero.component.component.html',
  styleUrl: './hero.component.component.css'
})
export class HeroComponentComponent {
@Input({required:true}) hero!: Hero;
protected readonly darkSoulsInventoryItems = darkSoulsInventoryItems;

  public moveItemToTheBox(index: number, sliceArr: BottomlessBoxItem[]) {
    this.hero.bottomlessBox.push(...sliceArr.splice(index, 1));
  }

  public decrementItemQuantity(item: Inventory) {
    if (item.quantity > 0) {
      item.quantity -= 1
      let magItem = this.darkSoulsInventoryItems.find((magItem: Inventory) => magItem.name === item.name)
      if (magItem) {
        magItem.quantity += 1
      }
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


