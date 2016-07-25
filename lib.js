// Fetches data from chrome.storage
function getTriggers(callback) {
  chrome.storage.sync.get({
    triggers: []
  }, function(items) {
    callback(items.triggers);
  });
}

// Removes a trigger
function removeTrigger(key) {
  getTriggers(function (items) {

    // Adds a new pattern
    var newItems = items;
    newItems.splice(key, 1);

    // Store it
    chrome.storage.sync.set({
      triggers: newItems,
    }, function() {
      updateView(newItems);
    });
  });
}

// Updates the options page
function updateView(triggers) {
  $('#triggers').html('');

  triggers.forEach(function(item, key) {
    $('#triggers').append('<a href="#" class="removeMe" data-key="' + key +
    '"><span class="glyphicon glyphicon-remove" style="margin-right:8px; color:red"></span> <span><b>' + item.url +
    '</b> : <i>' + item.selector + '</i></span><br/>');
  });

  $('#triggers a').click(function() {
    var key = this.getAttribute('data-key');
    removeTrigger(key);
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
