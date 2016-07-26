# Chrome Notifier
Let chrome notify you when changes happen on elements you track

## Installation

Download the extension from the chrome store: https://chrome.google.com/webstore/detail/chrome-notifier/acieenleahhcplheinjihejdgapcbaga

## How to use

Click on the extension in your browser bar, or go to the extension menu -> options

Add the websites you want to match with the CSS selector you want to watch.

## Example

URL:
```
http://rundeck.{your-env}.net:4440/project/Deploy/execution/show/*
```

Selector:
```
.execstate.execstatedisplay.overall.h4
```

Then, when you let the deployment tab open, chrome will send you a notification telling you the deployment state has changed (failed or successful)

## Future


- Add an option where you can just click on the element you want to track, chrome-notifier will highlight the elements just for you
- Display a custom message for each trigger
- Add custom rules on the triggers based on the content
