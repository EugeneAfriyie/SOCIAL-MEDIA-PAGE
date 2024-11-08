


/// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');


// THEME
const theme = document.getElementById('theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bgcolorPalette = document.querySelectorAll('.choose-bg div');




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
messageSearch.addEventListener('keyup',searchMessage);



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


// remove active class from spans or font size selectors

const removeSelector = (claa) => {
    fontSize.forEach (size =>{
        size.classList.remove('active');
    })
}

//  FONT SIZE CUSTOMIZATION
fontSize.forEach(size =>{
    console.log()
    
    size.addEventListener('click',()=>{
       let fontSiz = 0;
       removeSelector();
       size.classList.toggle('active');



    if(size.classList.contains('font-size-1')){
        fontSiz = '10px';
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','5.4rem');
    }
    else if(size.classList.contains('font-size-2')){
        fontSiz = '13px';
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','-7rem');
    }
    else if(size.classList.contains('font-size-3')){
        fontSiz = '16px';
        root.style.setProperty('--sticky-top-left','-2rem');
        root.style.setProperty('--sticky-top-right','-17rem');
    }
    else if(size.classList.contains('font-size-4')){
        fontSiz = '19px';
        root.style.setProperty('--sticky-top-left','-5rem');
        root.style.setProperty('--sticky-top-right','-25rem');
    }
    else if(size.classList.contains('font-size-5')){
        fontSiz = '22px';
        root.style.setProperty('--sticky-top-left','-12rem');
        root.style.setProperty('--sticky-top-right','-35rem');
    }
    
        // change font ize of the root html element
        document.querySelector('html').style.fontSize = fontSiz;
   })
})

// remove active class from spans or color

const changeActiveColorClass = () => {
    colorPalette.forEach (colorPicker =>{
        colorPicker.classList.remove('active');
    })
}

// change primary colors 
 colorPalette.forEach(colorPicker => {
    colorPicker.addEventListener('click' ,()=>{
        let primaryHue;
        changeActiveColorClass();
        colorPicker.classList.toggle('active');


        if(colorPicker.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(colorPicker.classList.contains('color-2')){
            primaryHue = 52;
        }
        if(colorPicker.classList.contains('color-3')){
            primaryHue = 352;
        }
        if(colorPicker.classList.contains('color-4')){
            primaryHue = 152;
        }
        if(colorPicker.classList.contains('color-5')){
            primaryHue = 282;
        }

        
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
 });





//  THEME BACKGROUND VALUES

let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

// changes background color

const changeBg = () => {
    root.style.setProperty('--dark-color-lightness',darkColorLightness)
    root.style.setProperty('--white-color-lightness',whiteColorLightness)
    root.style.setProperty('--light-color-lightness',lightColorLightness)
}

const changeActiveBackgroundColorClass = () => {
    bgcolorPalette.forEach (backgroundColorPicker =>{
        backgroundColorPicker.classList.remove('active');
    })
}


bgcolorPalette.forEach(bgcolorPicker => {
    bgcolorPicker.addEventListener('click' ,()=>{
     
        changeActiveBackgroundColorClass();
        bgcolorPicker.classList.toggle('active');


        if(bgcolorPicker.classList.contains('bg-2')){
        darkColorLightness = '95%';
         lightColorLightness = '15%';
         whiteColorLightness = '20%';
        }

        else if(bgcolorPicker.classList.contains('bg-3')){
        lightColorLightness = '0%';
         darkColorLightness = '95%';
         whiteColorLightness = '10%';
        }
        else if(bgcolorPicker.classList.contains('bg-1')){
            window.location.reload();
        }
 

        
        changeBg();
    })
 });






