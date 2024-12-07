interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: Array<string>;
}



// Data Transfer Object (DDD)

// define como os dados trafegam entre 2 arquivos diferentes
// dentro da aplicação, evita passar muitos parâmetros
// fica mais fácil ientificar qual parâmetro foi passado

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}



// TIPAGEM DE CLASSE
interface IEmailService {
    sendMail(request: IMessageDTO): void;
}


class EmailService implements IEmailService{
    sendMail({ to, message }: IMessageDTO){
        console.log(`email enviado para: ${to.name}: ${message.subject}`);
    }
};

export default EmailService;