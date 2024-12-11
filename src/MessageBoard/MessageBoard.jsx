
import { useEffect } from "react";
import { useUsersApi } from "../logic";
import Inbox from "./Inbox";
import Messages from "./Messages";
import Messaging from "./Messaging";

// CSS
import "./_maquette/style.css";

// MessageBoard.jsx
function MessageBoard() {

    // Implémentation provisoire des données. A remplacer par des appels API.
    /* 
    const conversations = [
        { id: 1, name: "Sunil Rajput", date: "Dec 25", preview: "Test, which is a new approach...", profileImage: "https://ptetutorials.com/images/user-profile.png" },
        // autres conversations
    ]; 
    */

    const {users, getAllUsers} = useUsersApi();
    const conversations = users;

    // Appelle de la fonction une seule fois au chargement du composant
    useEffect(() => {
        getAllUsers()
    },[])

    const messages = [
        { type: "incoming", text: "Hello there!", timestamp: "11:01 AM | Today", profileImage: "https://ptetutorials.com/images/user-profile.png" },
        { type: "outgoing", text: "Hi!", timestamp: "11:02 AM | Today" },
    ];

    const handleSendMessage = (message) => {
        console.log("Message sent:", message);
    };

    return (
        <Messaging>
            <Inbox conversations={conversations} />
            <Messages messages={messages} onSendMessage={handleSendMessage} />
        </Messaging>
    );
}
export default MessageBoard;
