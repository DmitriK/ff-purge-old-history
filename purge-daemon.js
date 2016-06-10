console.log('Init');

chrome.alarms.create('', { delayInMinutes: 0.2, periodInMinutes: 0.2 });

chrome.alarms.onAlarm.addListener(function (alarm) {

  var cutoffTime = (new Date()).getTime() - (90 * 24 * 3600 * 1000);

  console.log('Searching history:' + cutoffTime);
  chrome.history.search({
      text: '',
      startTime: 0,
      endTime: cutoffTime,
      maxResults: 32,
    },
    function (results) {
      console.log(results);
      console.log('Would remove:');
      for (var i = 0; i < results.length; i += 1) {
        console.log(results[i]);
      }
    });
});
