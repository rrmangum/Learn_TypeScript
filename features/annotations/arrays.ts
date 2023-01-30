const carMakers = ["ford", "toyota", "chevy"];

// declare the type when initializing an empty array otherwise let type inference figure out the type
const carMakersEmpty: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [
    ["f150"],
    ["corolla"],
    ["camaro"]
];

// Help with inference when extracting values
const car = carMakers[0];