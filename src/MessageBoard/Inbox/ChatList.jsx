// ChatList.jsx
import React from 'react';

const ChatList = ({ chat, onClick, isActive }) => {
  return (
    <div
      className={`chat_list ${isActive ? 'active_chat' : ''}`}
      
    >
      <div className="chat_people">
        <div className="chat_img">
          {/* <img src={chat.profileImage} alt={chat.name} /> */}
          <img src={"https://ui-avatars.com/api/?blod=true&color=fff&background=05728f&rounded=true&name="+ chat.name} alt={chat.name} />
        </div>
        <div className="chat_ib">
          <h5>
            {chat.name} <span className="chat_date">{chat.date}</span>
          </h5>
          <p 
            style={{cursor: "pointer"}}
            title="Click to copy"
            onClick={
              () => navigator.clipboard.writeText(chat.email.toLowerCase())
            }
            >
              {chat.email.toLowerCase()}
            </p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;