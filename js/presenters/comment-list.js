(function () {

  var $root = $('.pet .comments')
    , template = $('#templates .comment').html()
  ;

  // // // // // // //
 // View Listeners //
// // // // // // //

  $root.on('click', '.like', function (e) {
    console.log('Like link was clicked:', this);
    // TODO: Tell the comments model to like the comment
    var commentId = $(this).closest('.comment').data('id');
    console.log("Data id is:" + commentId);
    comments.like(commentId);
  });

  // // // // // // //
 // Model Listeners /
// // // // // // //

  comments.on('create', function (newComment) {
    console.log('New comment created:', newComment);
    // TODO: Generate new html using a template and $.render
    var newHtml = $.render(template, newComment);
    // TODO: Add this new html to the page to show the new comment!
    $('.comments').append(newHtml);
  });

  comments.on('like', function (comment) {
    event.preventDefault();
    console.log('Comment was liked:', comment.id);
    var commentDiv = $('[data-id=' + comment.id + ']');
    // TODO: Update the like count for the liked comment

    $root.find(commentDiv).find('.like-count').text(comment.likes)
  });

})();
