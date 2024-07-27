import {BottomlessBox, darkSoulsClasses, darkSoulsInventoryItems, Equipment, equipments, Inventory} from "./Constants";


export interface Hero {
  name: string;
  location: string;
  inventory: Inventory[];
  class: string;
  introduce: Function
  equipments: Equipment[];
  bottomlessBox: BottomlessBox;
}

export function changeHeroLocation(hero: Hero, location: string) {
    hero.location = location;
    console.log(`Hero location changed to ${hero.location}`)
}

export function expressYourself(npcNames: string[]) {
    let createHeroResult;
    createHeroResult = createHeroes(npcNames)
    for (let i = 0; i < createHeroResult.length; i++) {
        //createHeroResult[i].introduce()
    }
}

export function buildHero(name: string, location: string):Hero {
  let originalItem = randomizer(darkSoulsInventoryItems)
  let clonedItem = {...originalItem}
    return {
        name: name,
        location: location,
        inventory: [clonedItem],
        class: randomizer(darkSoulsClasses),
        equipments: [randomizer(equipments), randomizer(equipments)],
        bottomlessBox: [],
        introduce: function () {
            console.log(`Hello my name is ${this.name} and I'm from ${this.location}!`)
        }
    }
}

export function heroLocations(npcNames: string[]) {
    let allNamesNoHat = npcNames.filter((npcName) => !npcName.includes("Hat"));
    return allNamesNoHat.map((npcName) => npcName.split(' ')[2]);
}

export function createHeroes(npcNames: string[]) {
    return npcNames.filter((npcName) => !npcName.includes("Hat"))
        .map((npcName) => npcName.split(' '))
        .map((name, index) => buildHero(name[0], name[2]))
}

export function allInventory(heroArr: Hero[]) {
    return heroArr.map((inventory) => inventory.inventory).flat();
}

export function bezosGuys(heroArr: Hero[]) {
    return heroArr.filter((hero) => hero.inventory.some((items) => items.quantity > 8))
}

export function findHeroWitClass(heroArr : Hero[], heroClass: string) {
    return heroArr.filter((npcName) => npcName.class.toLowerCase().includes(heroClass.toLowerCase()))
}

export function findHeroWithKeyItems(heroArr: Hero[]) {
    return heroArr.filter((hero) => hero.inventory.some((item) => item.keyItem))
}

export function findAllKeyItems(inventoryItems:Inventory[]) {
    return inventoryItems.filter((item) => item.keyItem === true)
}

export function heroInitials(npcNames: string[]) {
    return npcNames.map(npcName => {
        npcName.split(' ')
        let initials = '';
        const nameParts = npcName.split(' ').filter(npcName => npcName !== 'of' && npcName !== 'the');
        // ['of', 'the'].includes(npcName) could be in filter
        // for(let i = 0; i < nameParts.length; i++){
        //     let firstLetter = nameParts[i][0]
        //     initials += firstLetter
        // }
        //initials = nameParts.map((npcName) => npcName[0][0]).join('');
        initials = nameParts.reduce((inInitials, current) => inInitials + current[0], '');
        return initials;
    });
}

export function findHero(npcNames:Hero[]) {
    let heroName = prompt('What hero you are searching for?', 'Manus') as string
    let findResult = npcNames.find(npcName => npcName.name.toLowerCase() === heroName.toLowerCase())
    if (findResult) {
        findResult.introduce()
        let heroLocation = confirm('Do you want to move hero somewhere?')
        if (heroLocation) {
            findResult.location = prompt('Where do you want to move hero?') as string
            findResult.introduce()
        }
    } else {
        console.log('Powel naxui')
    }
}

export function randomizer(randomArr: any[]) {
    const randomIndex = Math.floor(Math.random() * randomArr.length);
    return randomArr[randomIndex];
}

// export function itemsRandomizer(darkSoulsInventoryItems) {
//     const randomIndex = Math.floor(Math.random() * darkSoulsInventoryItems.length);
//     return darkSoulsInventoryItems[randomIndex]
// }


// for(let i = 0; i < allHeroesKeys.length; i++){
//     console.log(Object.values(allHeroesKeys[i]))
// }
//
// allHeroesKeys.forEach((i) => console.log(Object.values(i)));

// let locationMassive = [];
// for(let i = 0; i < npcWithLocations.length; i++){
//     // const npcName = npcWithLocations[i]
//     // let fullNameSplit = npcName.split(' ')
//     // let location = fullNameSplit[2]
//     locationMassive.push(npcWithLocations[i].split(' ')[2])
// }
//
// const locationMassive = npcWithLocations.map((npcName) => npcName.split(' ')[2])
//
// const namesMassive = npcWithLocations.map((npcName) => npcName.split(' ')[0])
