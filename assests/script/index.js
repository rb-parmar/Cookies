'use strict';

// Declaring HTML elements
const text = document.querySelector('.text');

const dialog = document.querySelector('dialog');

const dialog1 = document.querySelector('.dialog1');
const acceptButton = document.querySelector('.accept');
const settingButton = document.querySelector('.settings');

const dialog2 = document.querySelector('.dialog2');
const browser = document.querySelector('.browser input');
const os = document.querySelector('.os input');
const width = document.querySelector('.width input');
const height = document.querySelector('.height input');
const saveButton = document.querySelector('.save');


if(document.cookie) {
  console.log(`Browser=${getCookie('Browser')}`);
  console.log(`Operating system=${getCookie('Operating system')}`);
  console.log(`Width=${getCookie('Width')}`);
  console.log(`Height=${getCookie('Height')}`);
} else {
  console.log('No cookies set');
  // Adding the delay for dialog1
  setTimeout(() => {
    dialog1.showModal();
    text.classList.add('opacity');
  }, 900);
}


// function to return width
function getWidth() {
  const width = window.innerWidth;
  return `${width} px`;
}

// function to return Height
function getHeight() {
  const height = window.innerHeight;
  return `${height} px`;
};

// function to return browser 
// got the function from google
function getBrowser() {
  
  if(navigator.userAgent.match(/chrome||chromium||crios/i)){
       return "chrome";
    } else if(navigator.userAgent.match(/firefox||fxios/i)){
       return "firefox";
    } else if(navigator.userAgent.match(/safari/i)){
       return "safari";
    } else if(navigator.userAgent.match(/opr/i)){
       return "opera";
    } else if(navigator.userAgent.match(/edg/i)){
       return "edge";
    } else{
       return "rejected";
    }
    
}

// function to return the os
// got the function from google
function getOS() {
  let platform = navigator.userAgent;
  let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  let iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  if (macosPlatforms.includes(platform)) {
    return 'Mac OS';
  } else if (iosPlatforms.includes(platform)) {
    return 'iOS';
  } else if (windowsPlatforms.includes(platform)) {
    return 'Windows';
  } else {
    return navigator.userAgentData.platform;
  }
}


// function to set a cookies
function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    SameSite: 'Lax',
    ...options
  };

  const keys = Object.keys(options);
  const values = Object.values(options);

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let i = 0; i < keys.length; i++) {
    updatedCookie += `; ${keys[i]}=${values[i]}`;
  }

  document.cookie = updatedCookie;
}

// functions to get cookies
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));

  return matches ? decodeURIComponent(matches[1]) : navigator.userAgentData.platform;
}

// function to create cookies based on user preferences
function createCookie() {
  // checking browser
  if (browser.checked) {
    setCookie('Browser', getBrowser(), { 'max-age': 15 });
  } else {
    setCookie('Browser', 'rejected', { 'max-age': 15 });
  }

  // checking os
  if (os.checked) {
    setCookie('Operating system', getOS(), { 'max-age': 15 });
  } else {
    setCookie('Operating system', 'rejected', { 'max-age': 15 });
  }

  // checking width
  if (width.checked) {
    setCookie('Width', getWidth(), { 'max-age': 15 });
  } else {
    setCookie('Width', 'rejected', { 'max-age': 15 });
  }

  // checking height
  if (height.checked) {
    setCookie('Height', getHeight(), { 'max-age': 15 });
  } else {
    setCookie('Height', 'rejected', { 'max-age': 15 });
  }
}

// Adding event listener to buttons
acceptButton.addEventListener('click', function() {
  dialog1.close();
  setCookie('Browser', getBrowser(), { 'max-age': 15 });
  setCookie('Operating system', getOS(), { 'max-age': 15 });
  setCookie('Width', getWidth(), { 'max-age': 15 });
  setCookie('Height', getHeight(), { 'max-age': 15 });

  text.classList.remove('opacity');
});

settingButton.addEventListener('click', function() {
  dialog1.close();
  dialog2.showModal();
});

saveButton.addEventListener('click', function() {
  dialog2.close();
  createCookie();

  text.classList.remove('opacity');
});

