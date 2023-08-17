import { login } from './index.js'
console.log('Test de login')

const totalTests = 5;
let testPasados = 0;

console.log('Test 1: Testeo de password vacio');
    let resultado1 = login('coderUser', '')
    if(resultado1 === 'No password'){
        console.log('Test 1 pasado')
        testPasados++;
    }else{
        console.log('Test 1 NO pasado')
    }

    console.log('Test 2: Testeo de usuario vacio');
    let resultado2 = login('', '123')
    if(resultado2 === 'No user'){
        console.log('Test 2 pasado')
        testPasados++;
    }else{
        console.log('Test 2 NO pasado')
    }

    console.log('Test 3: Testeo de password incorrecto');
    let resultado3 = login('coderUser', '321')
    if(resultado3 === 'Wrong password'){
        console.log('Test 3 pasado')
        testPasados++;
    }else{
        console.log('Test 3 NO pasado')
    }

    console.log('Test 4: Testeo de user incorrecto');
    let resultado4 = login('cod', '123')
    if(resultado4 === 'Wrong user'){
        console.log('Test 4 pasado')
        testPasados++;
    }else{
        console.log('Test 4 NO pasado')
    }

    console.log('Test 5: Testeo de login correcto');
    let resultado5 = login('coderUser', '123')
    if(resultado5 === 'Logueado'){
        console.log('Test 5 pasado')
        testPasados++;
    }else{
        console.log('Test 5 NO pasado')
    }

    if(totalTests === testPasados){
    console.log('Pasaron todos los test')
    }else{
    console.log(`Pasaron ${testPasados} test de ${totalTests}`)
    }