import React from 'react';

const Message = ({chat}) => (
    <li className={"chat right"}>
        {chat.content}
    </li>
);

export default Message;