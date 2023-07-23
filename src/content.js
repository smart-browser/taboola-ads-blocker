const REMOVE_PERIOD_INTERVAL = 1000 * 10;

const GET_SELECTORS = 'GET_SELECTORS';

(async () => {
    const selectors = await chrome.runtime.sendMessage({message: GET_SELECTORS}) || [];
    const ELEMENT_SELECTORS_TO_REMOVE = [...selectors];
    // do something with response here, not outside the function
    setInterval(() => {
        ELEMENT_SELECTORS_TO_REMOVE.forEach((selector) => {
            document.querySelectorAll(selector).forEach(element => element.remove());
        });
    }, REMOVE_PERIOD_INTERVAL);
})();