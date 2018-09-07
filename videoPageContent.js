var autoplayToggle = document.getElementById('improved-toggle');
if (autoplayToggle !== null && autoplayToggle.hasAttribute('checked')) {
    autoplayToggle.click();
}
elem = document.getElementById("related");
if (elem !== null)
    elem.parentElement.removeChild(elem);
collection = document.getElementsByClassName("html5-endscreen ytp-player-content videowall-endscreen");
if (collection.length > 0)
    collection[0].parentElement.removeChild(collection[0]);