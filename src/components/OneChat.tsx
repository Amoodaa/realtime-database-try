import React, { PropsWithChildren } from 'react';

interface Props {
  title: string;
  lastMessage: string;
  messages: [];
}
const Chat = ({
  title,
  lastMessage,
  messages,
}: PropsWithChildren<Props>): React.ReactElement => (
  <div>
    <h3>{title}</h3>
    <h4>{lastMessage}</h4>
    {Object.entries(messages).map(([key, { content, sender, timestamp }]) => (
      <div key={key}>
        <h5>{sender}</h5>
        <h5>{content}</h5>
        <h5>{new Date(timestamp).toString()}</h5>
      </div>
    ))}
  </div>
);

export default Chat;
