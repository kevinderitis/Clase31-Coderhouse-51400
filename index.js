export const login = (user, pass) => {
    if(pass === '') return 'No password';
    if(user === '') return 'No user';
    if(pass !== '123') return 'Wrong password';
    if(user !== 'coderUser') return 'Wrong user';
    return 'Logueado';
}