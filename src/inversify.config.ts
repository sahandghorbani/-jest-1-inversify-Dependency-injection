import 'reflect-metadata'
import { Container } from 'inversify';
import { EmailService } from './services';
import { IMessageService } from './interface';


export const inversify={
    IMessageService: Symbol.for('IMessageService')
}


const container = new Container();
container.bind<IMessageService>(inversify.IMessageService).to(EmailService)
export {container};
 