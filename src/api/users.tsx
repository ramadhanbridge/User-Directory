export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

const API_URL = "https://jsonplaceholder.typicode.com";

// Get all users

export async function getUsers(): Promise<User[]> {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
}

// Get a single user 

export async function getUser(id: number): Promise<User> {
    const response = await fetch(`${API_URL}/users/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    return response.json();
}
