type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
};

let myUser: User = {
    _id: "123",
    name: "henry",
    email: "henry@henry.com",
    isActive: true,
};

myUser.email = "a@a.com";
// myUser._id = '321' ERROR

export {};
