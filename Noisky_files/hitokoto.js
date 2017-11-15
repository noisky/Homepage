function getHitokoto() {
$.ajax({
        url: "https://api.imjad.cn/hitokoto/?encode=jsc&charset=utf-8&length=50",
        dataType: "jsonp",
        async: true,
      jsonp: "callback",
      jsonpCallback: "hitokoto",
        success: function(result) {
  $('#hitokoto').html("<p>" + result.hitokoto + "</p>")
        },
        error: function() {
  $('#hitokoto').html("<p>读取数据失败了的说……_(:з」∠)_</p>")
        }
         });
 }
