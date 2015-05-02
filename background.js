// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
    function(text) {
        var url = "https://www.google.com/search?ie=utf-8&oe=utf-8&aq=t&hydra=1&q="
                + encodeURI(text);
        chrome.tabs.update({
            url: url
        });
    });
