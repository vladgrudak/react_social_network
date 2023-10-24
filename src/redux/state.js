let renderEntireTree = () => {
}

let state = {
    profilePage : {
        postsData : [
            {id: 1, text: "First Post", likesCount: 10},
            {id: 2, text: "Second Post with different text", likesCount: 20},
        ],
        newPostText: ""
    },
    dialogsPage : {
        dialogsData : [
            {id: 1, name: "Vlad", img: "https://pic.rutubelist.ru/video/46/b2/46b25de0bf3d3fa60a22037e55071354.jpg"},
            {id: 2, name: "Ilya", img: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"},
            {id: 3, name: "Leha", img: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"},
            {id: 4, name: "Serega", img: "https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava1.jpg"},
            {id: 5, name: "Diman", img: "https://pixelbox.ru/wp-content/uploads/2022/09/avatar-wolf-pixelbox.ru-50.jpg"}
        ],
        messagesData : [
            {id: 1, message: "Hello!"},
            {id: 2, message: "Privet, brat!"},
            {id: 3, message: "Spasibo!"},
            {id: 4, message: "Ne nado!"},
            {id: 5, message: "OK"}
        ],
        newMessageText : ""
    },
    sidebar: {
        friendsData: [
            {id: 1, name: "Vlad", img: "https://pic.rutubelist.ru/video/46/b2/46b25de0bf3d3fa60a22037e55071354.jpg"},
            {id: 2, name: "Ilya", img: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"},
            {id: 3, name: "Leha", img: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"},
        ]
    }

}

export const addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.postsData.push(newPost);
    renderEntireTree(state);
    state.profilePage.newPostText = "";
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    };

    state.dialogsPage.messagesData.push(newMessage);
    renderEntireTree(state);
    state.dialogsPage.newMessageText = "";
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
 renderEntireTree = observer;
}

export default state;