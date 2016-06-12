(function(window) {
  var recall = function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    var hh = (hours < 10) ? '0' + hours : hours;
    var mm = (minutes < 10) ? '0' + minutes : minutes;
    var ss = (seconds < 10) ? '0' + seconds : seconds;
  
    document.querySelector('.clock').innerHTML = hh + ':' + mm + ':' + ss;
  };
  window.setInterval(recall, 250);
  recall();
})(window);