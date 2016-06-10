function saveOptions(e) {
  chrome.storage.local.set({ maxAge: document.getElementById('maxAge').value });
}

function restoreOptions() {
  chrome.storage.local.get('maxAge', (res) => {
    document.getElementById('maxAge').value = res.maxAge || '';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);
