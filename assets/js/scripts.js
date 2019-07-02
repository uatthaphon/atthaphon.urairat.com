(function() {
  ran_col();
  feedParse();
})();

function ran_col() { //function name
  var color = '#'; // hexadecimal starting symbol
  var letters = [
    //'#fae2af', '#f6c1bc', '#c3dbf5', '#c9f9e5', '#e3e6ea'
    'fae2af', 'f6c1bc', 'c3dbf5', 'c9f9e5', 'e3e6ea'
  ]; //Set your colors here
  color += letters[Math.floor(Math.random() * letters.length)];
  document.body.style.background = color; // Setting the random color on your div element.
  document.querySelector('.hero .content').style.color = color;
  document.querySelectorAll('.hero .content .social .item .link').forEach(function(el) {
    el.style.color = color;
  })
}

function feedParse() {
//feed to parse
  var feed = "https://dev.to/feed/uatthaphon";

  $.ajax(feed, {
    accepts:{
      xml:"application/rss+xml"
    },
    dataType:"xml",
    success:function(data) {
      $(data).find("item").each(function (i, item) { // or "item" or whatever suits your feed
        var el = $(this);
        var techBlogUl = $('ul#tech-blog');
        var link = el.find("link").text();
        var title = el.find("title").text();
        var summary = $('<div/>').html(el.find("description").text()).text();
        var summaryCount = 100;
        summary = summary.slice(0, summaryCount) + (summary.length > summaryCount ? "..." : "");

        techBlogUl.append('<li class="item"><a href="'+link+'" class="link">'+title+'</a><p>'+summary+'</p></li>');
        // console.log("description: " + $('<div/>').html(el.find("description").text().trim()).text().trim());
        // console.log("------------------------");

        return i < 4; // only 5 row
      });
    }
  });
}
