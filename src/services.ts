import { injectable } from 'inversify';
import { IMessageService } from './interface';
@injectable()
export class EmailService implements IMessageService{
    sendMessage(message: string): void {
    console.log(`Sending email: ${message}`);
    
  }
}
@injectable()
export class SMSService implements IMessageService{
    sendMessage(message: string): void {
        console.log(`Sending email: ${message}`);
      }
}

