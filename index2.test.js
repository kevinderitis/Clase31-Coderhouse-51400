import { assert } from 'chai';
import { login } from './index.js';

describe('Testeo de login', () => {
    it('Testeo de password vacio', () => {
        let resultado = login('coderUser', '');
        assert.equal('No password', resultado)
    });

    it('Testeo de usuario vacio', () => {
        let resultado = login('', '123');
        assert.equal('No user', resultado)
    });
})