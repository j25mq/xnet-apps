// global variables
const mainContainer = document.getElementById('mainContainer');
const leftContainer = document.getElementById('leftContainer');
const newMsg = document.getElementById('newMsg');
const menuRight = document.getElementsByClassName('menuRight');
const clickMail = document.getElementById('clickMail');
const rightContainer = document.getElementById('rightContainer');
// create email container
const rightContainerEmail = document.createElement('div');
rightContainerEmail.setAttribute('id', 'rightContainerEmail');

// create left-side container for new email (recipients)
const rightContainer1 = document.createElement('div');
rightContainer1.setAttribute('id', 'rightContainer1');

// create right-side container for new email (content)
const rightContainer2 = document.createElement('div');
rightContainer2.setAttribute('id', 'rightContainer2');

const replyContainer = document.createElement('div');
const mailContent = document.createElement('div');

// go back icon
const goBack = document.createElement('a');
goBack.innerHTML = `<svg class="deleteIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>`;
// rightContainerEmail.appendChild(goBack);

const avatar1 = document.createElement('div');
avatar1.innerHTML = `AB`;
avatar1.setAttribute('class', 'avatar-1');

const avatar2 = document.createElement('div');
avatar2.innerHTML = `CD`;
avatar2.setAttribute('class', 'avatar-2');

const createChatBubbles = () => {
    const chats = document.createElement('div');
    chats.setAttribute('id', 'chats');

    const leftPoint = document.createElement('div');
    leftPoint.setAttribute('class', 'left-point');

    const rightPoint = document.createElement('div');
    rightPoint.setAttribute('class', 'right-point');

    // const avatar1 = document.createElement('div');
    // avatar1.innerHTML = `AB`;
    // avatar1.setAttribute('class', 'avatar-1');

    // const avatar2 = document.createElement('div');
    // avatar2.innerHTML = `CD`;
    // avatar2.setAttribute('class', 'avatar-2');

    const chatElts = [];
    const chatsCount = 3;
    for (let i = 0 ; i < chatsCount ; ++i) {
        const chat = document.createElement('div');
        chat.innerHTML = `<p><b>Envoyé à date/heure d'envoi</b><br>Contenu du message...</p>`;
        if (i % 2) {
            chat.setAttribute('class', 'chat-2');
            rightPoint.appendChild(avatar2);        
            chat.appendChild(rightPoint);
            chatElts.push(chat);
            chats.appendChild(chat);
        } else {
            chat.setAttribute('class', 'chat-1');
            leftPoint.appendChild(avatar1);
            chat.appendChild(leftPoint);
            chatElts.push(chat);
            chats.appendChild(chat);
        }
        chatElts.push(chats);
        chats.appendChild(chat);
    }
    rightContainerEmail.appendChild(chats);
};

const createReplyContainer = () => {
    const sendBtn = document.createElement('button');
    const textareaReply = document.createElement('textarea');

    sendBtn.innerHTML = `Envoyer`;
    textareaReply.placeholder = "Votre message...";

    replyContainer.setAttribute('id', 'replyContainer');
    textareaReply.setAttribute('id', 'textareaReply');
    sendBtn.setAttribute('class', 'sendBtn');

    replyContainer.appendChild(textareaReply);
    replyContainer.appendChild(sendBtn);
    rightContainerEmail.appendChild(replyContainer);
};

const createAvRecipients = () => {
    const destDisp = document.createElement('p');
    destDisp.setAttribute('class', 'destDisp');
    destDisp.innerHTML = 'Destinataires disponibles:';
    rightContainer1.appendChild(destDisp);
    
    const receptElts = [];
    const recepCount = 8;

    for (let i = 0 ; i < recepCount ; ++i) {
        const destContainer = document.createElement('div');
        const destContainerCl = document.createElement('div');
        const initialsDest = document.createElement('div');
        const txtDest = document.createElement('div');
        const avatarDest = document.createElement('div');

        destContainer.setAttribute('id', 'destContainer');
        destContainerCl.setAttribute('class', 'destContainer');
        initialsDest.setAttribute('class', 'initialsDest');
        txtDest.setAttribute('class', 'txtDest');
        avatarDest.setAttribute('class', 'avatarDest');

        initialsDest.innerHTML = `AB`;
        txtDest.innerHTML = `<p>Nom d'utilisateur</p><p>Fonction/Role</p>`;
        avatarDest.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>`;

        destContainerCl.appendChild(initialsDest);
        destContainerCl.appendChild(txtDest);
        destContainerCl.appendChild(avatarDest);
        destContainer.appendChild(destContainerCl);
        rightContainer1.appendChild(destContainer);

        mailContent.appendChild(avatar1);
        mailContent.appendChild(avatar2);
    };
};

const createNwMsgContent = () => {
    const mailContent = document.createElement('div');
    const sentTo = document.createElement('div');
    const addTo = document.createElement('p');
    const sendBtn = document.createElement('button');
    const textareaReply = document.createElement('textarea');

    mailContent.setAttribute('id', 'mailContent');
    sentTo.setAttribute('id', 'sentTo');
    sendBtn.setAttribute('class', 'sendBtn');
    textareaReply.setAttribute('id', 'textareaReply');    

    addTo.innerHTML = `Addressé à...`;
    sendBtn.innerHTML = `Envoyer`;
    textareaReply.placeholder = "Votre message...";

    sentTo.appendChild(addTo);
    sentTo.appendChild(avatar1);
    sentTo.appendChild(avatar2);

    mailContent.appendChild(sentTo);

    mailContent.appendChild(textareaReply);
    mailContent.appendChild(sendBtn);
    rightContainer2.appendChild(mailContent);
};

const styleMailContainer = () => {
    clickMail.style.transition = ".5s";
    clickMail.style.backgroundColor = "#CBCBCC";
    clickMail.style.marginRight = "0";
    clickMail.style.borderTopRightRadius = "0";
    clickMail.style.borderBottomRightRadius = "0";
};

const removeStyleMailContainer = () => {
    clickMail.style.transition = ".5s";    
    clickMail.style.backgroundColor = "#8e969f";
    clickMail.style.marginRight = "10px";
    clickMail.style.borderTopRightRadius = "5px";
    clickMail.style.borderBottomRightRadius = "5px";    
};

const styleNewMsgBtn = () => {
    newMsg.style.opacity = ".5";
    newMsg.style.width = "200px";
    newMsg.style.fontSize = "16px";
};

const removeStyleNewMsgBtn = () => {
    newMsg.style.opacity = "1";
    newMsg.style.width = "250px";
    newMsg.style.fontSize = "18px";
    // document.getElementsByClassName('menuRight').style.width = "100px";
};

const goBackToHomepage = () => {
    removeStyleMailContainer();
    removeStyleNewMsgBtn();
    rightContainerEmail.style.display="none";
    rightContainer1.style.display="none";
    rightContainer2.style.display="none";
    mainContainer.style.gridTemplateColumns = "5% 47.5% 47.5%";
    rightContainer.style.display="flex";
};

const displayMail = () => {
    styleMailContainer();
    rightContainer.style.display="none";
    rightContainerEmail.style.display="block";
    rightContainerEmail.appendChild(goBack);
    mainContainer.appendChild(rightContainerEmail);
};

const displayNewMsg = () => {
    styleNewMsgBtn();
    rightContainer.style.display="none";
    mainContainer.style.gridTemplateColumns = "5% 35% 25% 35%";
    rightContainer1.style.display="block";
    rightContainer2.style.display="block";
    rightContainer2.appendChild(goBack);
    mainContainer.appendChild(rightContainer1);
    mainContainer.appendChild(rightContainer2);
};

const createContent = () => {
    rightContainerEmail.style.display="none";
    createReplyContainer();
    createChatBubbles();
    createAvRecipients();
    createNwMsgContent();
    // mainContainer.appendChild(rightContainerEmail);
    // destContainerCl.appendChild(initialsDest);
    // destContainerCl.appendChild(txtDest);
    // destContainerCl.appendChild(avatarDest);
    // destContainer.appendChild(destContainerCl);
    // rightContainer1.appendChild(destDisp);
    // rightContainer1.appendChild(destContainer);
    // rightContainer2.appendChild(goBack);
    // mailContent.appendChild(sendTo);
    // mailContent.appendChild(avatar1);
    // mailContent.appendChild(avatar2);
    // rightContainer2.appendChild(mailContent);
    // replyContainer.appendChild(textareaReply);
    // replyContainer.appendChild(sendBtn);
    // rightContainer2.appendChild(replyContainer);
    // mainContainer.appendChild(rightContainer1);
    // mainContainer.appendChild(rightContainer2);
    // rightContainerEmail.style.display="none";
    // rightContainer1.style.display="none";
    // rightContainer2.style.display="none";
};

const loadContent = () => {
    goBack.addEventListener('click', goBackToHomepage);
    clickMail.addEventListener('click', displayMail);
    newMsg.addEventListener('click', displayNewMsg);
};

createContent();
loadContent();