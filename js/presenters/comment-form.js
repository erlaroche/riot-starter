(function () {

  var $root = $('.pet .comments + form');

  // // // // // // //
 // View Listeners //
// // // // // // //

  $root.on('submit', function (e) {
    console.log('form submit');
    e.preventDefault();
    // TODO: Handle new comments
    var newAuthor = $('.author', this).val();
    console.log('Author submitted:', newAuthor);

    var newComment = $('.message', this).val();
    console.log('Comment made:', newComment);

    comments.create({
      author: newAuthor,
      message: newComment
    });
  });


})();
