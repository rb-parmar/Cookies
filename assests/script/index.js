'use strict';

// Declaring HTML elements
const text = document.querySelector('.text');

const dialog1 = document.querySelector('.dialog1');
const acceptButton = document.querySelector('.accept');
const settingButton = document.querySelector('.settings');

const dialog2 = document.querySelector('.dialog2');
const browser = document.querySelector('.browser input');
const os = document.querySelector('.os input');
const width = document.querySelector('.width input');
const height = document.querySelector('.height input');
const saveButton = document.querySelector('.save');


console.log(document.cookie ? 'Cookies available' : 'No cookies found');


// Adding the delay for dialog1
setTimeout(() => {
  dialog1.style.display = 'block';
  text.classList.add('opacity');
}, 900);

// function to return width
function getWidth() {
  const width = window.innerWidth;
  return width;
}

// function to return Height
function getHeight() {
  const height = window.innerHeight;
  return height;
};

// function to return browser 
// got the function from google
function getBrowser() {
  
  if(navigator.userAgent.match(/chrome|chromium|crios/i)){
       return "chrome";
    } else if(navigator.userAgent.match(/firefox|fxios/i)){
       return "firefox";
    } else if(navigator.userAgent.match(/safari/i)){
       return "safari";
    } else if(navigator.userAgent.match(/opr\//i)){
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
  var platform = navigator.userAgentData.platform;
  var macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  var windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  var iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  if (macosPlatforms.indexOf(platform) !== -1) {
    return 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    return 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    return 'Windows';
  } 

  return 'rejected';
}


// function to set a cookies
function setCookie(name, value) {

  const date = new Date();
  date.setSeconds(date.getSeconds(), 15000);
  let expiryTime = date.toUTCString();
  let updatedCookie = `${name}=${value}; path=/; expires=${expiryTime}`;

  document.cookie = updatedCookie;
}

// function to get cookie
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));

  return matches ? consloe.log(decodeURIComponent(matches[1])) : undefined;
}


// function to create cookies based on user preferences
function createCookie() {
  // checking browser
  if (browser.checked) {
    setCookie('Browser', `${getBrowser()}`);
  } else {
    setCookie('Browser', 'rejected');
  }

  // checking os
  if (os.checked) {
    setCookie('Operating system', `${getOS()}`);
  } else {
    setCookie('Operating system', 'rejected');
  }

  // checking width
  if (width.checked) {
    setCookie('Width', `${getWidth()}`);
  } else {
    setCookie('Width', 'rejected');
  }

  // checking height
  if (height.checked) {
    setCookie('Height', `${getHeight}`);
  } else {
    setCookie('Height', 'rejected');
  }
}

// Adding event listener to buttons
acceptButton.addEventListener('click', function() {
  dialog1.style.display = 'none';
  createCookie();
  getCookie('Browser');
  getCookie('Operating system');
  getCookie('Width');
  getCookie('Height');
  text.classList.remove('opacity');
});

settingButton.addEventListener('click', function() {
  dialog1.style.display = 'none';
  dialog2.style.display = 'block';
});

saveButton.addEventListener('click', function() {
  dialog2.style.display = 'none';
  createCookie();
  getCookie('Browser');
  getCookie('Operating system');
  getCookie('Width');
  getCookie('Height');
  text.classList.remove('opacity');
});

