type User = {
    name: string;
    email: string;
    isActive?: boolean;
};

function createUser({ name, email }: User): void {
    console.log(`Name: ${name}\nEmail: ${email}`);
}

createUser({
    name: "henry",
    email: "henry@henry.com",
    isActive: true,
});
