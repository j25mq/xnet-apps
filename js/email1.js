const mainContainer = document.getElementById('mainContainer');

const clickMail = document.getElementById('clickMail');

const rightContainer = document.getElementById('rightContainer');

const rightContainerEmail = document.createElement('div');
rightContainerEmail.setAttribute('id', 'rightContainerEmail');

// chat bubbles
// build chat/msg bubbles dynamically
const chats = document.createElement('div');
chats.setAttribute('id', 'chats');

const leftPoint = document.createElement('div');
leftPoint.setAttribute('class', 'left-point');

const rightPoint = document.createElement('div');
rightPoint.setAttribute('class', 'right-point');

const avatar1 = document.createElement('div');
avatar1.innerHTML = `AB`;
avatar1.setAttribute('class', 'avatar-1');

const avatar2 = document.createElement('div');
avatar2.innerHTML = `CD`;
avatar2.setAttribute('class', 'avatar-2');

// reply container
const replyContainer = document.createElement('div');
const sendBtn = document.createElement('button');
const textareaReply = document.createElement('textarea');

sendBtn.innerHTML = `Envoyer`;
textareaReply.placeholder = "Votre message...";

replyContainer.setAttribute('id', 'replyContainer');
textareaReply.setAttribute('id', 'textareaReply');
sendBtn.setAttribute('class', 'sendBtn');

// icons
const goBack = document.createElement('a');
goBack.innerHTML = `<svg class="deleteIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>`;

const styleMailContainer = () => {
    clickMail.style.backgroundColor = "#CBCBCC";
    clickMail.style.marginRight = "0";
    clickMail.style.borderTopRightRadius = "0";
    clickMail.style.borderBottomRightRadius = "0";
}

const mailContainer = () => {

    styleMailContainer();

    // go back to homepage icon 
    goBack.addEventListener('click', goBackToHomepage);

    // event listener - when email clicked -> go back to homepage
    clickMail.addEventListener('click', goBackToHomepage);

    // build chat
    const chatElts = [];
    const chatsCount = 3;
    for (let i = 0 ; i < chatsCount ; ++i) {
        const chat = document.createElement('div');
        chat.innerHTML = `<p><b>Envoyé à date/heure d'envoi</b><br>Contenu du message...</p>`;
        // const chatElts = [];
        // const chatsCount = 3;
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
        // rightContainerEmail.appendChild(chats);
    }
    // event listener - when button clicked -> reply textarea/form displayed
    replyContainer.appendChild(textareaReply);
    replyContainer.appendChild(sendBtn);

    // build rightContainerEmail
    rightContainerEmail.appendChild(goBack);
    rightContainerEmail.appendChild(chats);
    rightContainerEmail.appendChild(replyContainer);
    
    // display rightContainerEmail on the page
    mainContainer.appendChild(rightContainerEmail);
}

const displayMail = () => {
    rightContainer.style.display="none";
    mailContainer();
}

const goBackToHomepage = () => {
    rightContainerEmail.style.display="none";
    rightContainer.style.display="flex";
}

clickMail.addEventListener('click', displayMail);

// newMsg.addEventListener('click', displayNewMsg);

// archivedMsg.addEventListener('click', archivedMsg);

// unReadMsg.addEventListener('click', unReadMsg);

// sentMsg.addEventListener('click', sentMsg);

const leftContainer = document.getElementById('leftContainer');
const newMsg = document.getElementById('newMsg');
const menuRight = document.getElementsByClassName('menuRight');

// create available recipients container
const rightContainer1 = document.createElement('div');
rightContainer1.setAttribute('id', 'rightContainer1');

// create available recipients list
const destDisp = document.createElement('p');
const destContainer = document.createElement('div');
const destContainer1 = document.createElement('div');
const destContainerCl = document.createElement('div');
const initialsDest = document.createElement('div');
const txtDest = document.createElement('div');
const avatarDest = document.createElement('div');

destDisp.setAttribute('class', 'destDisp');
destContainer.setAttribute('id', 'destContainer');
destContainerCl.setAttribute('class', 'destContainer');
initialsDest.setAttribute('class', 'initialsDest');
txtDest.setAttribute('class', 'txtDest');
avatarDest.setAttribute('class', 'avatarDest');

destDisp.innerHTML = 'Destinataires disponibles:';
initialsDest.innerHTML = `AB`;
txtDest.innerHTML = `<p>Nom d'utilisateur</p><p>Fonction/Role</p>`;
avatarDest.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>`;

// create write newmsg container
const rightContainer2 = document.createElement('div');
rightContainer2.setAttribute('id', 'rightContainer2');

// create write newmsg content
const mailContent = document.createElement('div');
const sendTo = document.createElement('p');

mailContent.setAttribute('id', 'mailContent');
sendTo.innerHTML = `Addressé à...`;

const displayNewMsg = () => {
    // hide past container
    rightContainer.style.display="none";

    goBack.addEventListener('click', goBackToHomepage);

    // create grid container with 4 columns instead of 3
    mainContainer.style.gridTemplateColumns = "4% 32% 32% 32%";
    // change newmsg button width
    newMsg.style.width = "220px";
    // change btns width (archived, unread, sent)
    document.getElementById('btnMenu').style.width = "90px";

    // build available recipients container
    destContainerCl.appendChild(initialsDest);
    destContainerCl.appendChild(txtDest);
    destContainerCl.appendChild(avatarDest);
    destContainer.appendChild(destContainerCl);
    rightContainer1.appendChild(destDisp);
    rightContainer1.appendChild(destContainer);

    // build send to containers
    rightContainer2.appendChild(goBack);
    mailContent.appendChild(sendTo);
    mailContent.appendChild(avatar1);
    mailContent.appendChild(avatar2);
    
    // build write newmsg container
    rightContainer2.appendChild(mailContent);
    replyContainer.appendChild(textareaReply);
    replyContainer.appendChild(sendBtn);
    rightContainer2.appendChild(replyContainer);

    // display containers on the page
    mainContainer.appendChild(rightContainer1);
    mainContainer.appendChild(rightContainer2);
}


newMsg.addEventListener('click', displayNewMsg);