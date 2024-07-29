import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {createHeroes, Hero} from "./hero-functions";
import {
  BottomlessBoxItem,
  darkSoulsInventoryItems, darkSoulsSpells,
  Equipment,
  equipments,
  Inventory,
  Magic,
  npcNames
} from "./Constants";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroComponentComponent} from "./hero.component/hero.component.component";
import {SpellCardComponent} from "./spell-card/spell-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, FormsModule, NgIf, HeroComponentComponent, SpellCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public newInventoryItem: Inventory = {
    name: "",
    consumable: false,
    keyItem: false,
    quantity: 0
  }

  public newEquipmentItem: Equipment = {
    name: "",
    durability: 0,
    magical: false,
    type: "",
    quantity: 0
  }

  public firstHero = createHeroes(npcNames)[0];

  public clonedHero: Hero[] = [];

  public incrementItemQuantity(item: Inventory) {
    item.quantity += 1
  }

  public decrementItemQuantity(item: Inventory) {
    if (item.quantity > 0) {
      item.quantity -= 1
      let magItem = this.darkSoulsInventoryItems.find(magItem => magItem.name === item.name)
      if (magItem) {
        magItem.quantity += 1
      }
    }
  }

  public addItemToInventory(item: Inventory) {
    const newItem = structuredClone(item)
    newItem.quantity = 1
    let heroItem = this.firstHero.inventory.find(heroItem => heroItem.name === newItem.name)
    if (heroItem) {
      heroItem.quantity += 1
    } else {
      this.firstHero.inventory.push(newItem)
    }
    item.quantity -= 1
  }

  public cloneHero() {
    let newClonedHero = Object.assign({}, this.firstHero);
    newClonedHero.name = this.firstHero.name  +" MIMIK*" + (this.clonedHero.length + 1)
    newClonedHero.inventory = this.firstHero.inventory.map((inventory) => ({...inventory}))
    newClonedHero.equipments = this.firstHero.equipments.map((equipment) => ({...equipment}))
    newClonedHero.bottomlessBox = this.firstHero.bottomlessBox.map((boxItem) => ({...boxItem}));
    this.clonedHero.push(newClonedHero)
  }

  public addItemToMagazine() {
    let newItemClone = Object.assign({}, this.newInventoryItem);
    darkSoulsInventoryItems.push(newItemClone)
    this.newInventoryItem.name = '';
    this.newInventoryItem.consumable = false;
    this.newInventoryItem.quantity = 0;
    this.newInventoryItem.keyItem = false;
  }

  public addItemToEquipment() {
    let newItemClone = Object.assign({}, this.newEquipmentItem);
    this.firstHero.equipments.push(newItemClone)
    this.newEquipmentItem.name = '';
    this.newEquipmentItem.durability = 0;
    this.newEquipmentItem.magical = false;
    this.newEquipmentItem.type = "";
    this.newEquipmentItem.quantity = 0;
  }

  protected readonly darkSoulsInventoryItems = darkSoulsInventoryItems;
  protected readonly darkSoulsSpells = darkSoulsSpells;
  protected readonly equipments = equipments;

}


