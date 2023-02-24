// global variables
const mainContainer = document.getElementById('mainContainer');
const centerContainer = document.getElementById('centerContainer');
const rightContainer = document.getElementById('rightContainer');

// create menu
const newMsg = document.createElement('button');
newMsg.setAttribute('id', 'newMsg');
newMsg.setAttribute('class', 'newMsg');
newMsg.innerHTML = `New Message`;

const unreadMsg = document.createElement('button');
unreadMsg.setAttribute('id', 'unreadMsg');
unreadMsg.setAttribute('class', 'btnMenu');
// unreadMsg.classList.add('btnMenumailUnread');
unreadMsg.innerHTML = `Unread`;

const archivedMsg = document.createElement('button');
archivedMsg.setAttribute('id', 'archivedMsg');
archivedMsg.setAttribute('class', 'btnMenu');
archivedMsg.innerHTML = `Archived`;

const sentMsg = document.createElement('button');
sentMsg.setAttribute('id', 'sentMsg');
sentMsg.setAttribute('class', 'btnMenu');
sentMsg.innerHTML = `Sent`;

// create email container
const rightContainerEmail = document.createElement('div');
rightContainerEmail.setAttribute('id', 'rightContainerEmail');

// create right container (1) - recipients
const rightContainer1 = document.createElement('div');
rightContainer1.setAttribute('id', 'rightContainer1');

// create right container (2) -  new email content
const rightContainer2 = document.createElement('div');
rightContainer2.setAttribute('id', 'rightContainer2');

// create reply container
const replyContainer = document.createElement('div');

// create mail content container
const mailContent = document.createElement('div');

// go back icon
const goBack = document.createElement('a');
goBack.innerHTML = `<svg class="deleteIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>`;

// create avatars
const avatar1 = document.createElement('div');
avatar1.innerHTML = `AB`;
avatar1.setAttribute('class', 'avatar-1');

const avatar2 = document.createElement('div');
avatar2.innerHTML = `CD`;
avatar2.setAttribute('class', 'avatar-2');

const leftPoint = document.createElement('div');
leftPoint.setAttribute('class', 'left-point');

const rightPoint = document.createElement('div');
rightPoint.setAttribute('class', 'right-point');

const createMenuGrid = () => {
    const menuGrid = document.createElement('div');
    menuGrid.setAttribute('id', 'menuGrid');

    const menuLeft = document.createElement('div');
    menuLeft.setAttribute('class', 'menuLeft');

    const refreshIcon = document.createElement('div');
    refreshIcon.setAttribute('class', 'refreshIcon');
    refreshIcon.innerHTML = `<button onClick="window.location.href=window.location.href"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/></svg></button>`;

    const menuRight = document.createElement('div');
    menuRight.setAttribute('class', 'menuRight');

    menuLeft.appendChild(newMsg);
    menuRight.appendChild(unreadMsg);
    menuRight.appendChild(archivedMsg);
    menuRight.appendChild(sentMsg);

    menuGrid.appendChild(menuLeft);
    menuGrid.appendChild(refreshIcon);
    menuGrid.appendChild(menuRight);
    
    centerContainer.appendChild(menuGrid);
};

const createMailList = () => {
    // create forloop - 2 unread emails
    let mailCountUnread = 2;
    for (let i = 0 ; i < mailCountUnread ; ++i) {
        const mailContainer = document.createElement('div');
        mailContainer.setAttribute('class', 'mail mailUnread');
        const div1 = document.createElement('div');
        div1.setAttribute('class', 'div1');
        div1.innerHTML = `<p>@Username</p>`;
    
        const div2 = document.createElement('div');
        div2.setAttribute('class', 'div2');
        div2.innerHTML = `<p>Message extract...</p>`;
    
        const div3 = document.createElement('div');
        div3.setAttribute('class', 'div3');
        div3.innerHTML = `<p>Sending date</p>`;
    
        const iconsMail = document.createElement('div');
        iconsMail.setAttribute('class', 'iconsMail');
        iconsMail.setAttribute('class', 'div4');
        iconsMail.innerHTML = `<svg class="archieveIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16"><path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg>
            <svg class="deleteIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
            <svg class="replyIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16"><path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/></svg>`;

        mailContainer.appendChild(div1);
        mailContainer.appendChild(div2);
        mailContainer.appendChild(div3);
        mailContainer.appendChild(iconsMail);

        centerContainer.appendChild(mailContainer);
        mainContainer.appendChild(centerContainer);
    };

    // create forloop - 3 read emails
    let mailCountRead = 3;
    for (let i = 0 ; i < mailCountRead ; ++i) {
        const mailContainer = document.createElement('div');
        mailContainer.setAttribute('class', 'mail mailRead');
        const div1 = document.createElement('div');
        div1.setAttribute('class', 'div1');
        div1.innerHTML = `<p>@Username</p>`;
    
        const div2 = document.createElement('div');
        div2.setAttribute('class', 'div2');
        div2.innerHTML = `<p>Message extract...</p>`;
    
        const div3 = document.createElement('div');
        div3.setAttribute('class', 'div3');
        div3.innerHTML = `<p>Sending date</p>`;
    
        const iconsMail = document.createElement('div');
        iconsMail.setAttribute('class', 'iconsMail');
        iconsMail.setAttribute('class', 'div4');
        iconsMail.innerHTML = `<svg class="archieveIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16"><path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg>
            <svg class="deleteIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
            <svg class="replyIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16"><path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/></svg>`;

        mailContainer.appendChild(div1);
        mailContainer.appendChild(div2);
        mailContainer.appendChild(div3);
        mailContainer.appendChild(iconsMail);

        centerContainer.appendChild(mailContainer);
        mainContainer.appendChild(centerContainer);
    };
    
    // bind events to every mail box
    Array.from(document.getElementsByClassName('mail')).forEach((el) => {
        el.addEventListener('click', function () {
            el.style.transition = ".5s";
            el.style.backgroundColor = "#CBCBCC";
            el.style.marginRight = "0";
            el.style.borderTopRightRadius = "0";
            el.style.borderBottomRightRadius = "0";

            centerContainer.style.pointerEvents = "auto";
            rightContainer.style.display="none";
            rightContainer1.style.display="none";
            rightContainer2.style.display="none";
        
            mainContainer.style.gridTemplateColumns = "5% 47.5% 47.5%";
            mainContainer.style.transition = ".5s";
        
            rightContainerEmail.style.display="block";
            rightContainerEmail.style.transition = ".5s";
        
            rightContainerEmail.appendChild(goBack);
            mainContainer.appendChild(rightContainerEmail);

            let goBackToHomepage = () => {
                el.style.transition = ".5s";    
                el.style.backgroundColor = "#bac5d1";
                el.style.fontWeight = "normal";
                el.style.marginRight = "10px";
                el.style.borderTopRightRadius = "5px";
                el.style.borderBottomRightRadius = "5px";
            };

            goBack.addEventListener('click', goBackToHomepage);
            newMsg.addEventListener('click', goBackToHomepage);
        });

        const mailTotalCount = mailCountUnread + mailCountRead;
        rightContainer.innerHTML = `<h2><b>Inbox</b></h2><h3>You have <b>${mailTotalCount}</b> conversations.</h3>`;
        mainContainer.appendChild(rightContainer);
    });
};

const createReplyContainer = () => {
    // create send button
    const sendBtn = document.createElement('button');
    sendBtn.innerHTML = `Send`;
    sendBtn.setAttribute('class', 'sendBtn');

    // create textarea - reply
    const textareaReply = document.createElement('textarea');
    textareaReply.placeholder = "Your message...";
    textareaReply.setAttribute('id', 'textareaReply');

    // build reply container
    replyContainer.setAttribute('id', 'replyContainer');
    replyContainer.appendChild(textareaReply);
    replyContainer.appendChild(sendBtn);
    rightContainerEmail.appendChild(replyContainer);
};

const createChatBubbles = () => {
    // create chats container
    const chats = document.createElement('div');
    chats.setAttribute('id', 'chats');

    // create forloop - create 3 chat bubbles
    const chatElts = [];
    const chatsCount = 3;
    for (let i = 0 ; i < chatsCount ; ++i) {
        const chat = document.createElement('div');
        chat.innerHTML = `<p><b>Sent at date/time of dispatch</b><br>Message content...</p>`;
        if (i % 2) {
            chat.setAttribute('class', 'chat-2');
            chat.appendChild(rightPoint);
            chat.appendChild(avatar2);
            chatElts.push(chat);
            chats.appendChild(chat);
        } else {
            chat.setAttribute('class', 'chat-1');
            chat.appendChild(leftPoint);
            chat.appendChild(avatar1);
            chatElts.push(chat);
            chats.appendChild(chat);
        }
        chatElts.push(chats);
        chats.appendChild(chat);
    }
    rightContainerEmail.appendChild(chats);
};

const sentTo = document.createElement('div');
sentTo.setAttribute('id', 'sentTo');


const createAvRecipients = () => {
    const destDisp = document.createElement('p');
    destDisp.setAttribute('class', 'destDisp');
    destDisp.innerHTML = 'Available recipients:';
    rightContainer1.appendChild(destDisp);
    
    // create forloop - create 8 recipients 
    const recepCount = 8;
    for (let i = 0 ; i < recepCount ; ++i) {
        const destContainer = document.createElement('div');
        destContainer.setAttribute('class', 'destContainer');

        const destContainerCl = document.createElement('div');
        destContainerCl.setAttribute('class', 'destContainerCl');

        const initialsDest = document.createElement('div');
        initialsDest.setAttribute('class', 'initialsDest');
        initialsDest.setAttribute('data-id', `user-${i}`);
        const char1 = String.fromCharCode(65 + (i * 2));
        const char2 = String.fromCharCode(65 + (i * 2) + 1);
        const initials = `${char1}${char2}`;
        initialsDest.innerHTML = initials;

        const txtDest = document.createElement('div');
        txtDest.setAttribute('class', 'txtDest');
        txtDest.innerHTML = `<p style="font-size:18px">@Username</p><p style="font-size:14px">${initials}'s Job position</p>`;

        const avatarDest = document.createElement('div');
        avatarDest.setAttribute('class', 'avatarDest');
        avatarDest.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>`;
        avatarDest.style.display = "flex";
        avatarDest.classList.add("unchecked");

        const checkDest = document.createElement('div');
        checkDest.setAttribute('class', 'checked checkDest');
        checkDest.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>`;
        checkDest.style.display = "none";
        checkDest.classList.add("checked");

        const toggleRecipient = () => {
            if (checkDest.classList.contains("checked")) {
                avatarDest.style.display = "none";
                checkDest.style.display = "flex";
                destContainerCl.style.backgroundColor = "#555555";

                sentTo.innerHTML += (`${char1}${char2} `);
                checkDest.classList.remove("checked");
            } else if (checkDest.classList.contains("unchecked")) {
                avatarDest.style.display = "flex";
                checkDest.style.display = "none";
                destContainerCl.style.backgroundColor = "#6a6a6a";
                sentTo.innerHTML = "";
            };
        };
        destContainer.addEventListener('click', toggleRecipient); 

        // build recipients list
        destContainer.appendChild(destContainerCl);
        destContainerCl.appendChild(initialsDest);
        destContainerCl.appendChild(txtDest);
        destContainerCl.appendChild(avatarDest);
        destContainerCl.appendChild(checkDest);
        rightContainer1.appendChild(destContainer);
    };
};

const createNwMsgContent = () => {
    const mailContent = document.createElement('div');
    mailContent.setAttribute('id', 'mailContent');

    const addTo = document.createElement('p');
    addTo.innerHTML = `To...`;

    const sendBtn = document.createElement('button');
    sendBtn.setAttribute('class', 'sendBtn');
    sendBtn.innerHTML = `Send`;

    const textareaReply = document.createElement('textarea');
    textareaReply.setAttribute('id', 'textareaReply');  
    textareaReply.placeholder = "Your message..."; 

    // build new email content
    sentTo.appendChild(addTo);
    mailContent.appendChild(sentTo);
    mailContent.appendChild(textareaReply);
    mailContent.appendChild(sendBtn);
    rightContainer2.appendChild(mailContent);
};

const createUnreadMsgBtn = () => {
    const mailCountUnread = 2;
    for (let i = 0 ; i < mailCountUnread ; ++i) {
        const mailContainer = document.createElement('div');
        mailContainer.setAttribute('class', 'mailUnread');
        const div1 = document.createElement('div');
        div1.setAttribute('class', 'div1');
        div1.innerHTML = `<p>@Username</p>`;
    
        const div2 = document.createElement('div');
        div2.setAttribute('class', 'div2');
        div2.innerHTML = `<p>Message extract...</p>`;
    
        const div3 = document.createElement('div');
        div3.setAttribute('class', 'div3');
        div3.innerHTML = `<p>Sending date</p>`;
    
        const iconsMail = document.createElement('div');
        iconsMail.setAttribute('class', 'iconsMail');
        iconsMail.setAttribute('class', 'div4');
        iconsMail.innerHTML = `<svg class="archieveIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16"><path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg>
            <svg class="deleteIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
            <svg class="replyIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16"><path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/></svg>`;

        mailContainer.appendChild(div1);
        mailContainer.appendChild(div2);
        mailContainer.appendChild(div3);
        mailContainer.appendChild(iconsMail);

        centerContainer.appendChild(mailContainer);
        mainContainer.appendChild(centerContainer);
    };
};

const styleNewMsgBtn = () => {
    centerContainer.style.pointerEvents = "auto";
    newMsg.style.opacity = ".5";
    newMsg.style.width = "200px";
    newMsg.style.fontSize = "16px";
};

const removeStyleNewMsgBtn = () => {
    newMsg.style.opacity = "1";
    newMsg.style.width = "250px";
    newMsg.style.fontSize = "18px";
};

let goBackToHomepage = () => {
    removeStyleNewMsgBtn();
    centerContainer.style.pointerEvents = "auto";
    rightContainerEmail.style.display="none";
    rightContainer1.style.display="none";
    rightContainer2.style.display="none";

    mainContainer.style.gridTemplateColumns = "5% 47.5% 47.5%";
    mainContainer.style.transition = ".5s";

    rightContainer.style.display="flex";
    rightContainer.style.transition = ".5s";
};

const displayNewMsg = () => {
    styleNewMsgBtn();
    centerContainer.style.pointerEvents = "none";
    rightContainer.style.display="none";
    rightContainerEmail.style.display="none";

    mainContainer.style.gridTemplateColumns = "5% 35% 25% 35%";
    mainContainer.style.transition = ".5s";

    rightContainer1.style.display="block";
    rightContainer2.style.display="block";
    rightContainer1.style.transition = ".5s";
    rightContainer2.style.transition = ".5s";
    
    rightContainer2.appendChild(goBack);
    mainContainer.appendChild(rightContainer1);
    mainContainer.appendChild(rightContainer2);
};

const createContent = () => {
    createMenuGrid();
    createMailList();

    createReplyContainer();
    createChatBubbles();

    createAvRecipients();
    createNwMsgContent();
};

const loadEvents = () => {
    goBack.addEventListener('click', goBackToHomepage);
    newMsg.addEventListener('click', displayNewMsg);
    unreadMsg.addEventListener('click', displayNewMsg);
    // archivedMsg.addEventListener('click', displayarchivedMsg);
    // sentMsg.addEventListener('click', displaysentMsg);
};

createContent();
loadEvents();