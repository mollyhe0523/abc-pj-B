chrome.input.ime.onKeyEvent.addListener( (engineID, keyData, requestId) => {
  if ( keyData.type == "keyDown" && keyData.key.match == "s" ) {
    chrome.input.ime.onKeyEvent.addListener( (engineID, keyData, requestId) => {
      if ( keyData.type == "keyDown" && keyData.key.match == " " ) {
        chrome.input.ime.onKeyEvent.addListener( (engineID, keyData, requestId) => {
          if ( keyData.type == "keyDown" && keyData.key.match == "n" ) {
            chrome.input.ime.onKeyEvent.addListener( (engineID, keyData, requestId) => {
              if ( keyData.type == "keyDown" && keyData.key.match == " " ) {
                chrome.input.ime.onKeyEvent.addListener( (engineID, keyData, requestId) => {
                  if ( keyData.type == "keyDown" && keyData.key.match == "a" ) {
                    chrome.input.ime.onKeyEvent.addListener( (engineID, keyData, requestId) => {
                      if ( keyData.type == "keyDown" && keyData.key.match == " " ) {
                        chrome.input.ime.onKeyEvent.addListener( (engineID, keyData, requestId) => {
                          if ( keyData.type == "keyDown" && keyData.key.match == "k" ) {
                            chrome.input.ime.onKeyEvent.addListener( (engineID, keyData, requestId) => {
                              if ( keyData.type == "keyDown" && keyData.key.match == " " ) {
                                chrome.input.ime.onKeyEvent.addListener( (engineID, keyData, requestId) => {
                                  if ( keyData.type == "keyDown" && keyData.key.match == "e" ) {
                                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                                      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
                                      console.log(response.farewell);
                                      });
                                    });
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
