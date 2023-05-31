import { Container } from 'inversify';
import { IMessageService } from './Interfaces/IMessageService';
import { EmailService, SMSService } from './services/UserService';

// Create a symbol for IMessageService
const IMessageServiceSymbol = Symbol.for('IMessageService');

const container = new Container();
container.bind<IMessageService>(IMessageServiceSymbol).to(EmailService);

export { container, IMessageServiceSymbol };
