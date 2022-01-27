export function shuffle(elements: any[]): any[] {
    return elements
        .map(element => ({ value: element, randomPosition: Math.random() }))
        .sort((obj1, obj2) => obj1.randomPosition - obj2.randomPosition)
        .map(element => element.value);
}