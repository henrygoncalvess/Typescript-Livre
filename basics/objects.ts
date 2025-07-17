function createUser({ name, email }: { name: string; email: string }) {}

const newUser = {
    name: "henry",
    email: "henry@henry.com",
    isActive: true,
};

createUser(newUser);

function createCourse(): { name: string; price: number } {
    return { name: "html", price: 1 };
}
