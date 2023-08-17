import { faker } from "@faker-js/faker";

export const generarUsuario = () => {
    return {
        id: faker.database.mongodbObjectId(),
        rol: generarRol(),
        premium: generarPremium(), 
        nombre: faker.person.firstName(),
        apellido: faker.person.lastName(),
        nacimiento: faker.date.birthdate(),
        telefono: faker.phone.number(),
        productos: generarProductos(5)
    }
}

export const generarUsuarios = cant => {
    const users = [];
    for (let i = 0; i < cant; i++) {
        users.push(generarUsuario())
    }
    return users;
}

const generarProductos = cant => {
    const products = [];
    for (let i = 0; i < cant; i++) {
        products.push(generarProducto())
    }
    return products;
}

const generarProducto = () => {
    return {
        id: faker.database.mongodbObjectId(),
        code: faker.string.alphanumeric(),
        nombre: faker.commerce.productName(),
        descripcion: faker.commerce.productDescription(),
        stock: 10
    }
}

const generarRol = () => {
    const roles = ['cliente', 'vendedor'];
    const randomNum = Math.floor(Math.random() * 2) + 1;
    return roles[randomNum]
}

const generarPremium = () => {
    const premium = [true, false];
    const randomNum = Math.floor(Math.random() * 2) + 1;
    return premium[randomNum]
}