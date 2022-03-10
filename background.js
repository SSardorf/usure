// background.js

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  console.log("Hi!");
  if (changeInfo.status == 'loading') {
    console.log(tab.url);
    console.log("loading!")
    // do your things

  }
})