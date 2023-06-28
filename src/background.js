
const GET_SELECTORS = 'GET_SELECTORS';

let selectors = [];

fetch('https://2h5wyp4fc8.execute-api.us-east-1.amazonaws.com/dev')
  .then(response => response.json())
  .then((_selectors) => {
    selectors = _selectors?.map(selector => selector.selector.S) || [];
  });


chrome.runtime.onMessage.addListener(({message}, sender, sendResponse) => {
  if (message === GET_SELECTORS) {
    sendResponse(selectors);
  }
});

