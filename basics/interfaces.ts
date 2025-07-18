interface User {
    readonly databaseId: number;
    email: string;
    userId: number;
    startTrail(): string;
    getCoupon(couponName: string, value: number): number;
}

const me: User = {
    databaseId: 119,
    userId: 99,
    email: "h@h.com",
    startTrail,
    getCoupon: (name: "henry10", off: 10) => {
        return 10;
    },
};

function startTrail() {
    return "trail started";
}

export {};
