chrome.alarms.create('', { delayInMinutes: 30, periodInMinutes: 30 });

chrome.alarms.onAlarm.addListener(function (alarm) {

  chrome.storage.local.get('maxAge', (res) => {
    console.log(res.maxAge);
    var maxAge = res.maxAge || 0;

    if (maxAge === 0) {
      // Not a valid age, do nothing.
      return;
    }

    var cutoffTime = (new Date()).getTime() - (maxAge * 24 * 3600 *
      1000);

    chrome.history.deleteRange({
      startTime: 0,
      endTime: cutoffTime,
    });
  });
});
