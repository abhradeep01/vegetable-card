function socialLink(){
    const social = document.querySelector('.sub_contact');
    const links =['https://www.facebook.com/abhradeep.debnath','https://twitter.com/AbhradeepD74811','https://www.instagram.com/earlysons/','https://www.youtube.com/'];
    for(let i=0;i<social.children.length;i++){
        social.children[i].addEventListener('click',(e)=>{
            window.open(links[i], '_blank');
        })
    }
}
socialLink();