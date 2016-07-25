MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    chrome.runtime.sendMessage({});
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
getTriggers(function(items) {
  items.forEach(function(item) {
    if (window.location.href.match(item.url)) {
      var element = $(item.selector).get(0);

      if (element) {
        observer.observe(element, {
          subtree: true,
          attributes: true,
          haracterData: true
        });
      }
    }
  });
});
