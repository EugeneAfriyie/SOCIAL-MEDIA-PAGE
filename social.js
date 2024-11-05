/// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//messages

const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelector('.message');
const messageSearch = document.querySelector('.message-search');



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
            document.querySelector('#notification .notification-count').style.display = 'none';
        }
    })
})


// ************** MESSAGES *******************

messageNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    document.querySelector('#messages-notifications .notification-count').style.display = 'none';

    setTimeout(()=>{
        messages.style.boxShadow = 'none';

    },2000)
})