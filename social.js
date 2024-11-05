/// SIDEBAR


const menuItems = document.querySelectorAll('.menu-item');


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

        if(item.id != 'notification'){
            document.querySelector('.notification-popup').style.display = 'none';
        }else{
            document.querySelector('.notification-popup').style.display = 'block';
        }
    })
})