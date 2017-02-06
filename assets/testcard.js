/**
 * This file is part of the makigas testcard - www.github.com/makigas/testcard
 * Copyright (C) 2016-2017 Dani Rodríguez <danirod@outlook.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function(window, document) {
  var decode = function(t) {
    var ta = document.createElement("textarea");
    ta.innerHTML = t;
    return ta.value;
  };
  
  var queryString = function() {
    var qs = window.location.search.substring(1).split('&');
    var params = { };
    qs.forEach(function(q) {
      params[q.split('=')[0]] = q.split('=')[1]
    });
    return params;
  };

  var recall = function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getYear() % 100;

    var hh = (hours < 10) ? '0' + hours : hours;
    var mm = (minutes < 10) ? '0' + minutes : minutes;
    var ss = (seconds < 10) ? '0' + seconds : seconds;
    var dd = (day < 10) ? '0' + day : day;
    var ii = (month < 10) ? '0' + month : month;
    var yy = (year < 10) ? '0' + year : year;

    var day = dd + '/' + ii + '/' + yy;
    var hour = hh + ':' + mm + ':' + ss;
    document.getElementById('time').innerHTML = hour;
    document.getElementById('date').innerHTML = day;
  };

  if (queryString().banner) {
    document.getElementById('banner').innerHTML = decodeURI(queryString().banner);
  } else {
    document.getElementById('banner').remove();
  }

  recall();
  window.setInterval(recall, 250);
})(window, document);