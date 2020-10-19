const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/it-two/find-school-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var findSchools = req.session.data['find-school']

  // Check whether the variable matches a condition
  if (findSchools == "network") {
    // Send user to next page
    res.redirect('/it-two/refine_list_search')
  }
  else {
    // Send user to ineligible page
    res.redirect('/it-two/results-school')
  }

})

module.exports = router
