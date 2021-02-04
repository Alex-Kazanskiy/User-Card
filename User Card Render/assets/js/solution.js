new URL('https://www.facebook.com/DwayneJohnson'); // {hostname}
new Map().set('www.facebook.com', 'src to fb icon'); // key - hostname


const supportedSocial = new Map()
.set('twitter.com','social-icons/twitter.svg')
.set('www.instagram.com','social-icons/instagram.svg')
.set('www.facebook.com','social-icons/facebook.svg')



 function createIcons(contacts){
   const arrayOfIconElements = contacts.map((contact)=>{
     const {hostname} = new URL(contact);
     if(supportedSocial.has(hostname)){ 
       const src = supportedSocial.get(hostname);
       const img = document.createElement('img');
       img.setAttribute('src',src);
       const a=document.cresteElements('a');
       a.setAttribute('hlef',contact);
       a.append(img);
       return a;
     }
     return ;
   });
   return arrayOfIconElements;}