let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// function getLength1(something: string | number): number {
//     return something.length;
// }

function getLength(something: string | number): string {
    return something.toString();
}