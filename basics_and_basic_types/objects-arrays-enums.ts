// Object
const assignedPerson: {
    name:string;
    age: number;
    hobbies: string[]; // Array
    role: [number, string] // Tuple
} = {
    name: 'Vedran',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

// Enum
enum Role {
    ADMIN,
    READONLY,
    AUTHOR
}

const person = {
    name: 'Vedran',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

// Any
let favoriteActivities: any[];
favoriteActivities = ['Sports'];

console.log(person.name)

for (const hobby of person.hobbies){
    console.log(hobby)
}

if (person.role === Role.AUTHOR){
    console.log('is author')
}