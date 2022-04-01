const container = document.querySelector('.container');
const loader = document.querySelector('.loader');
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

// Loading...
window.addEventListener('load', () => {


    window.setTimeout(() => {
        container.classList.remove('hide');
        loader.style.display = 'none';
        menuBtn.style.visibility = 'visible';
    }, 2800);
}) 


// Sidebar
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    sidebar.classList.toggle('open-sidebar');
});

const homeSectionSidebar = document.querySelector('#home-sidebar');
const aboutSectionSidebar = document.querySelector('#about-sidebar');
const skillsSectionSidebar = document.querySelector('#skills-sidebar');
const contactSectionSidebar = document.querySelector('#contact-sidebar');

homeSectionSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('open-sidebar');
  menuBtn.classList.remove('open');
})
aboutSectionSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('open-sidebar');
  menuBtn.classList.remove('open');
})
skillsSectionSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('open-sidebar');
  menuBtn.classList.remove('open');
})
contactSectionSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('open-sidebar');
  menuBtn.classList.remove('open');
})

let galleryGrid = document.querySelector('#galleryGrid');

let xml = new XMLHttpRequest();
xml.open('get', 'https://raw.githubusercontent.com/danilopetrovic88/photos.json/main/photos.json')
xml.onreadystatechange = function() {
    if(xml.readyState == 4 && xml.status == 200) {
        display(JSON.parse(xml.responseText))
    }
}
xml.send();


function display(data) {
    let galleryItems = ``;
   for (let i = 0; i < data.length; i++) {
       galleryItems += `
        <img src=${data[i].url} class="gallery__img" alt="Img" />
       `
   }

   galleryGrid.innerHTML = galleryItems;

   let galleryImage = document.querySelectorAll('.gallery__img');
   galleryImage.forEach(image => {
     image.addEventListener('click', function() {
      // this.style.position = "fixed";
      // this.style.top = "1rem";
      // this.style.width = "80%";
      // this.style.height = "20rem";
      // this.style.zIndex= "500";
      // this.style.opacity = "1";
      let newImgWindow = document.createElement('div');
      let newImg = document.createElement('img');
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", this.getAttribute("src"));
      newImgWindow.setAttribute("class", "gallery__popup");
      document.querySelector('body').appendChild(newImgWindow);

      newImgWindow.addEventListener('click', function(){
        newImgWindow.remove();
      })
     })
   })
}