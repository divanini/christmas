const icon = document.querySelector('.icon');
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
icon.onclick = function () {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        icon.src = "images/sun.png";
        menuBtn.src = "images/menu-dark.png";
        closeBtn.src = "images/close-dark.png";
    } else {
        icon.src = "images/moon.png";
        menuBtn.src = "images/menu-light.png";
        closeBtn.src = "images/close-light.png";
    }
}

const menu = document.querySelector('.menu');
const list = document.querySelector('.nav__links');
const close = document.querySelector('.close');
close.onclick = function () {
  list.classList.remove('is-opened');
}
menu.onclick = function () {
  list.classList.toggle('is-opened');
}

const heartSvgs = document.querySelectorAll('.heart');
heartSvgs.forEach(heartSvg => {
    heartSvg.onclick = function() {
        const newSvg = '<svg class="heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.82922C9.09203 2.9943 7.90353 2.53092 6.67002 2.53088C6.01714 2.53156 5.37084 2.66135 4.76831 2.91277C4.16577 3.1642 3.61891 3.5323 3.15919 3.99588C1.19836 5.96505 1.19919 9.04505 3.16086 11.0059L9.27086 17.1159C9.41252 17.3651 9.68586 17.5259 10 17.5259C10.129 17.5246 10.2559 17.4931 10.3706 17.4339C10.4852 17.3748 10.5843 17.2895 10.66 17.1851L16.8392 11.0059C18.8009 9.04422 18.8009 5.96505 16.8375 3.99255C16.378 3.52981 15.8316 3.16246 15.2297 2.91162C14.6277 2.66078 13.9821 2.53138 13.33 2.53088C12.0965 2.53109 10.9081 2.99444 10 3.82922Z" fill="#DC3845"/></svg>';
        heartSvg.outerHTML = newSvg;
    }
});