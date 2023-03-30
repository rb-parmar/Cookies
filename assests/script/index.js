'use strict';

// Declaring HTML elements
const dialog1 = document.querySelector('.dialog1');
const acceptButton = document.querySelector('.accept');
const settingButton = document.querySelector('.settings');
const dialog2 = document.querySelector('.dialog2');
const browser = document.querySelector('.browser input');
const os = document.querySelector('.os input');
const width = document.querySelector('.width input');
const height = document.querySelector('.height input');
const saveButton = document.querySelector('.save');

// function to return width
function getWidth() {
  const width = window.innerWidth;
  console.log(`Width: ${width} px`);
}

// function to return Height
function getHeight() {
  const height = window.innerHeight;
  console.log(`Height: ${height} px`);
}

// function to return browser 
// got the function from google
function getBrowser() {
  let userAgent = navigator.userAgent;
  let browserName;
  
  if(userAgent.match(/chrome|chromium|crios/i)){
      browserName = "chrome";
    }else if(userAgent.match(/firefox|fxios/i)){
      browserName = "firefox";
    }  else if(userAgent.match(/safari/i)){
      browserName = "safari";
    }else if(userAgent.match(/opr\//i)){
      browserName = "opera";
    } else if(userAgent.match(/edg/i)){
      browserName = "edge";
    }else{
      browserName="No browser detection";
    }

  console.log(`Browser: ${browserName}`);
}

// function to return the os
// got the function from google
function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.userAgentData.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}


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

/*
  ?:  -> Non-capturing group (the regex inside the parenthesis must be matched
         but does not create the capturing group)
  ^|; -> Not the following
*/

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));

  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
  setCookie(name, '', {'max-age': -1});
}

// document.cookie = `name=${encodeURIComponent('Andre Specht')}; path=/; max-age=15; SameSite=Lax`;
// document.cookie = `city=${encodeURIComponent('Winnipeg')}; path=/; max-age=15; SameSite=Lax`;

const date = new Date();
date.setSeconds(date.getSeconds() + 15);

setCookie('name', 'Andre Specht', {'max-age': 15});
setCookie('city', 'New York', {'expires': date});

console.log(getCookie('name'));
console.log(getCookie('city'));
console.log(getCookie('email'));

// deleteCookie('name');

