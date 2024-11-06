


/// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');


// THEME
const theme = document.getElementById('theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
const root = document.querySelector('root');

//messages

const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.messages .message');
const messageSearch = document.querySelector('#message-search');



//remove active classs from each menuitem


const changeActiveItem = ()=>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        }else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


// ************** MESSAGES *******************


//  Searches chats

const searchMessage = ()=>{
    const searchVal = messageSearch.value.toLowerCase();
console.log(searchVal)
message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase();
    if(name.indexOf(searchVal) != -1){
        chat.style.display = 'flex';
    }else{
        chat.style.display = 'none';
        
    }
});
}

// search chat
messageSearch.addEventListener('keyup',searchMessage)



// highlight the message card when the message menu item is clicked
messageNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    document.querySelector('#messages-notifications .notification-count').style.display = 'none';

    setTimeout(()=>{
        messages.style.boxShadow = 'none';

    },2000)
})





// THEME CUSTROMIZATION


// open modal
const openThemeModal = ()=>{
    themeModal.style.display = 'grid'
}
const closeThemeModal = (e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}



// close modal
themeModal.addEventListener('click', closeThemeModal)

// opem modal
theme.addEventListener('click', openThemeModal);




//  FONT SIZE CUSTOMIZATION



fontSize.forEach(size =>{
    let fontsize;

    if(size.classList.contains('font-size-1')){
        fontSize = '10px'
    }
    else if(size.classList.contains('font-size-2')){
        fontSize = '13px'
    }
    else if(size.classList.contains('font-size-3')){
        fontSize = '16px'
    }
    else if(size.classList.contains('font-size-4')){
        fontSize = '19px'
    }
    else if(size.classList.contains('font-size-5')){
        fontSize = '22px'
    }

    // change font ize of the root htm element

    document.querySelector('html').style.fontSize - fontSize;
})