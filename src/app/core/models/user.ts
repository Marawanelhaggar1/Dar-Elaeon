export interface User {
    user: {
        name: string;
        email: string;
        password: string;
    };
    token: string;
    role: string;
}
