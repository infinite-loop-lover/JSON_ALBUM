import { JestEnvironment } from "@jest/environment";


describe('tests of user data and display', () => {
    test('specific user fetch', async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const result = await res.json();
        expect(result.name).toBe('Leanne Graham');  
        expect(res.status).toEqual(200);
    });
    test('specific user fetch', async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/2');
        const result = await res.json();
        expect(result.name).toBe('Ervin Howell');  
        expect(res.status).toEqual(200);
    });
    test('specific user fetch', async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/3');
        const result = await res.json();
        expect(result.name).toBe('Clementine Bauch');  
        expect(res.status).toEqual(200);
    });
});
