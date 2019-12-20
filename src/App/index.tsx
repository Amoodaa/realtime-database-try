/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './App.css';
import firebase from 'firebase';
import Fire from '../firebase';
import Chat from '../components/OneChat';

interface AppState extends React.ComponentState {
  chats: any[];
  currentUser: firebase.User | null;
  loading: boolean;
}
class App extends React.Component<{}, AppState, null> {
  state: AppState = {
    chats: [],
    currentUser: null,
    loading: true,
  };

  componentDidMount() {
    Fire.onCurrentUserChange = (newUser) => this.setState({ currentUser: newUser });
  }

  componentDidUpdate() {
    const { loading, currentUser } = this.state;

    if (loading && currentUser) {
      Fire.onRoomsStateChange((newChat) => this.setState(({ chats }) => ({
        chats: { ...chats, ...newChat },
        loading: false,
      })));
    }
  }

  render() {
    const { chats } = this.state;
    console.log(this.state);
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button type="button" tabIndex={-1} onClick={Fire.signinWithGoogle}>
          sign in
        </button>
        {Object
          .entries(chats)
          .map(([key, { title, lastMessage, messages }]) => (
            <Chat
              key={key}
              lastMessage={lastMessage}
              title={title}
              messages={messages}
            />
          ))}
      </div>
    );
  }
}

export default App;
