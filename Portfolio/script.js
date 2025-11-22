const togglebar=document.getElementById('togglebar');
let toggle=false;
togglebar.addEventListener('click',()=>{
    if (!toggle){
        togglebar.classList.add('active');
        document.querySelector('.listItems').classList.add('active');
        toggle=true;
    }
    else{
        togglebar.classList.remove('active');
        document.querySelector('.listItems').classList.remove('active');
        toggle=false;
    }
});

const listItems=document.querySelectorAll('.listItem');
listItems.forEach(items=>{
    items.addEventListener('click',()=>{
        togglebar.classList.remove('active');
        document.querySelector('.listItems').classList.remove('active');
        toggle=false;
    })
});

const ProjectImg=document.querySelectorAll('.ProjectImg');
ProjectImg.forEach(item=>{
    item.addEventListener('mouseenter',()=>{
        item.querySelector('.projectLink').style.display='block';
        item.querySelector('.prj-img').style.filter= "brightness(30%)";
        item.querySelector('.prj-img').style.transform= "scale(0.9)";
        item.querySelector('.prj-img').style.transition=" .3s linear";
    });
    item.addEventListener('mouseleave',()=>{
        item.querySelector('.projectLink').style.display='none';
        item.querySelector('.prj-img').style.filter= "brightness(100%)";
        item.querySelector('.prj-img').style.transform= "none";
    });
});

const certficateCard=document.querySelectorAll('.certficateCard');
certficateCard.forEach(item=>{
    item.addEventListener('mouseenter',()=>{
        item.querySelector('.certifcateContent').style.display='block';
        item.querySelector('.certficateImg').style.filter='brightness(40%)';
    });
    item.addEventListener('mouseleave',()=>{
        item.querySelector('.certifcateContent').style.display='none';
        item.querySelector('.certficateImg').style.filter='brightness(100%)';

    });
});