const express = require('express');
const router = express.Router();
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
} = require('../controllers/people')

//v1
// router.get('/', getPeople);

// router.post('/', createPerson);

// router.post('/postman', createPersonPostman);

// router.put('/:id', updatePerson);

// router.delete('/:id', deletePerson);

//v2
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson);
router.route('/:id').delete(deletePerson);



module.exports = router;