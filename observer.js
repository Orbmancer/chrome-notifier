MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {

    // fired when a mutation occurs
    chrome.runtime.sendMessage({});
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe($('.execstate.execstatedisplay.overall.h4').get(0), {
  subtree: true,
  attributes: true,
  haracterData: true
});
