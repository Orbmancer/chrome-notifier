var notificationsContext = [];

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.notifications.create('notification.warning', {
      iconUrl: sender.tab.favIconUrl,
      title: sender.tab.title,
      type: 'basic',
      message: 'triggered by chrome-notifier',
      isClickable: true,
    }, function(notificationId) {
      notificationsContext[notificationId] = {tab: sender.tab.id};
    });
  }
);

// redirects on the tab on notification click
chrome.notifications.onClicked.addListener(function (notificationId) {
  chrome.tabs.update(notificationsContext[notificationId].tab, {selected: true});
});
