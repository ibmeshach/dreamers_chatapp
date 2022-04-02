import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

import './App.css';

// localStorage.getItem('password')}
// localStorage.getItem('username')}

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="0948825d-700f-4c54-a52d-de81ee9c454c"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
            />
    );
} 

export default App;