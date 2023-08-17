import { Router } from 'express';
import { generarUsuarios } from '../mocks/users.js';
const userRouter = Router();

userRouter.get('/', (req, res) => {
    let user = generarUsuarios(10)
    res.send(user)
})

export default userRouter;