import React, { useEffect } from 'react';
import { IMessageService } from '../Interfaces/IMessageService.js';
import {container} from '../inversify.config.js';
import { inject } from 'inversify';

const MessageComponent = ({ messageService }) => {
  useEffect(() => {
    messageService.sendMessage('Hello, world!');
  }, [messageService]);

  return <div>Message Component</div>;
};

export default inject(container.get('IMessageService'))(MessageComponent);
