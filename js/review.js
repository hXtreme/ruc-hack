reviews = [
  'The crystal clear water, yum.'
]

function getReview() {
  var i = Math.floor(Math.random() * reviews.length)
  return reviews[i];
}
