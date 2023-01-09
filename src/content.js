const REMOVE_INTERVAL = 1000 * 10;

const ELEMENT_SELECTORS_TO_REMOVE = [
    '#taboola-below-home-page-nd',
    '#taboola-below-article-thumbnails-wide-nd',
    '#taboola-below-article-thumbnails-wide-nd-split-num-1',
    '.tbl-feed-container',
    '.tbl-feed-frame-NONE',
    '.render-late-effect',
    '.taboola-general',
    '#taboola-left-rail-thumbnails-nd',
    '.taboola-elements',
    '.trc_related_container',
    '.trc_spotlight_widget',
    '.tbl-rtl',
    '.trc_elastic',
    '.trc_elastic_thumbnails-left-rail',
];


setInterval(() => {
    ELEMENT_SELECTORS_TO_REMOVE.forEach((selector) => {
        document.querySelectorAll(selector).forEach(element => element.remove());
    });

}, REMOVE_INTERVAL);