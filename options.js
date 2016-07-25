
// Fetches data from chrome.storage
function getTriggers(callback) {
  chrome.storage.sync.get({
    triggers: []
  }, function(items) {
    callback(items.triggers);
  });
}

// Updates the options page
function updateView(triggers) {
  triggers.forEach(function(item) {
    $('#triggers').html('');
    $('#triggers').append('<li><b>' + item.url + '</b> : <i>' + item.selector + '</i></li>');
  });
}

// Saves options to chrome.storage
function saveOptions() {
  var url = document.getElementById('url').value;
  var selector = document.getElementById('selector').value;

  getTriggers(function (items) {

    // Adds a new pattern
    var newItems = items;
    newItems.push({
      url: url,
      selector: selector
    });

    // Store it
    chrome.storage.sync.set({
      triggers: newItems,
    }, function() {
      updateView(newItems);
    });
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  getTriggers(updateView);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
