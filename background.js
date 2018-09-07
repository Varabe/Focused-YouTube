var test = /^(https:\/\/(?:www|m)\.youtube\.com)(\/feed\/trending)?\/?(\?.+?)?(#.+?)?$/;
chrome.webRequest.onBeforeRequest.addListener(
	function(details){
		if (details.method !== 'GET')
			return;

		var match =  details.url.match(test);
		if (match !== null)
			return {redirectUrl: match[1]+'/feed/subscriptions'+(match[3]||'')+(match[4]||'')};
	},
	{urls: ['https://www.youtube.com/*','https://m.youtube.com/*', "https://www.youtube.com/feed/trending/*"]},
	["blocking"]
);
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    executeVideoPageScript(details);
});
chrome.webNavigation.onCompleted.addListener(function(details) {
    executeVideoPageScript(details);
});

function executeVideoPageScript(details) {
	if (details.url.indexOf("youtube.com") != -1)
		chrome.tabs.executeScript(null,{file:"videoPageContent.js"});
}
