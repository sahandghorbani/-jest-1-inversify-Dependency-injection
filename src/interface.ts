export interface IMessageService{
    sendMessage:(message: string)=> void 
}


export class NotSolid {
    sendMessage(message: string): void {
        console.log(`Sending email: ${message}`);
        
      }
}
