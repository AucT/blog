var _gaq=[['_setAccount','UA-39617718-1'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));
			
function showSpoiler(obj)
    {
    var inner = obj.parentNode.getElementsByTagName("div")[0];
    if (inner.style.display == "none") {
        inner.style.display = "";
		obj.innerHTML = "Hide"; }
    else {
        inner.style.display = "none";
		obj.innerHTML = "Show"; }
    }