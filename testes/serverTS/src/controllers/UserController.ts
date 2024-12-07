import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    {
        name: 'pedro',
        email: 'pedro@pedro.com'
    }
];

export default {
    async index(req: Request, res: Response){
        res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService;

        emailService.sendMail({
            to: {
                name: 'maria',
                email: 'maria@maria.com'
            },
            message: {
                subject: 'bem vindo ao sistema de teste typescript',
                body: 'bem vindo :D'
            }
        });

        res.send('ok')
    }
}