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
const myCar = carMakers.pop()

// Prevent incompatible values
carMakers.push(100);

// Help with map/forEach/reduce
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types - avoid arrays with any data type
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-10-10");
importantDates.push(new Date());
importantDates.push(100);