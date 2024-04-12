async function createOffScreen() {
    if(await chrome.offscreen.hasDocument()) return;
    await chrome.offscreen.createDocument ({
           url: "offscreen.html",
           reasons: ["AUDIO_PLAYBACK"],
           justification: "testing",
        }
    );
}



//Listen for messages
chrome.runtime.onMessage.addListener(async(msg, sender, response) => {
    await createOffScreen();
    if(msg.name == "sw-playTrack"){
  
        console.log("sw-playtrack,msg");
        chrome.runtime.sendMessage({name: "playTrack", track: msg.track});
  
    }
  
    if(msg.name == "sw-pauseTrack"){

        chrome.runtime.sendMessage({name: "pauseTrack"});
    }
  
  });
  