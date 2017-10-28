const exportConfig = {
  width: 600,
  height: 640
}

$(document).ready(function() {

  var fontSize = 19;

  $('#inimputable-input')
  .css("font-size", `${fontSize}px`)
  .focus()
  .bind('keydown', function(event) {
      if (event.key !== '-' && event.key !== '+') {
        return;
      }
      var adj = event.key === '-' ? -1 : 1;
      fontSize += adj;
      console.log(fontSize)
      $(this).css("font-size", `${fontSize}px`);
      event.preventDefault();
  });

  $('#exportButton').click( function() {
    html2canvas($('.inimputable'), {
      width: exportConfig.width,
      height: exportConfig.height,
      onrendered: function(canvas) {
        $('#exported-list').prepend('<li></li>');
        $('#exported-list li').first().append(canvas)
        //Canvas2Image.saveAsPNG(canvas, exportConfig.width, exportConfig.height)
      }
    });
  });


});
