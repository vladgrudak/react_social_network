import logo from './logo.svg';
import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {updateNewMessageText} from "./redux/state";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>}/>
                    <Route path="/profile" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
