// A union type is a type formed from two or more other types,
// representing values that may be any one of those types

let score: number | string = 33;

//
//

// USING TYPES

type Admin = {
    username: string;
    id: number;
};

type User = {
    name: string;
    id: number;
};

let henry: User | Admin = { name: "henry", id: 1 };

henry = { username: "henryadmin", id: 1 };

//
//

// USING FUNCTIONS

function getDatabaseId(id: number | string) {
    if (typeof id === "string") {
        return id.toLocaleUpperCase();
    }

    return (id += 100);
}

//
//

// USING ARRAYS

const data: (string | number)[] = [1, "two", 3, "four"];
