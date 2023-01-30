const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
};

// type alias
type Drink = [string, boolean, number];

// tuple data type annotation
const pepsi: [string, boolean, number] = ['brown', true, 40];
const tea: Drink = ['clear', true, 0];
const sprite: Drink = ['clear', true, 40];

// Why we won't be using tuples that often
// We can't look at this line and figure out what is happening with this code
const carSpecs: [number, number] = [400, 3354];

// Meaningful data is most times better represented as objects
const carStats = {
    horsepower: 400,
    weight: 3354
};
