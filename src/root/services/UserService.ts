import { injectable } from 'inversify';
import { IMessageService } from '../Interfaces/IMessageService';
import 'reflect-metadata'
@injectable()
export class EmailService implements IMessageService {
  sendMessage(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

@injectable()
export class SMSService implements IMessageService {
  sendMessage(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}


const TYPES = {
    SMSService: Symbol.for("SMSService"),
    EmailService: Symbol.for("EmailService"),
};

export { TYPES };