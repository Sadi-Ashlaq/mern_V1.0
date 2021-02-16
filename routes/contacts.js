const express = require('express');
const router = express.Router();

// @route Get api/contacts
// @desc   get all users contacts
// @access private 
router.get('/', (req,res)=>{
    res.send('get all contacts');
});

// @route Post api/contacts
// @desc   add new contact
// @access private 
router.post('/', (req,res)=>{
    res.send('add a contact');
});

// @route Put api/contacts
// @desc   update contact
// @access private 
router.put('/:id', (req,res)=>{
    res.send('update contact');
});

// @route Delete api/contacts
// @desc   delete  contact
// @access private 
router.delete('/:id', (req,res)=>{
    res.send('delete contact');
});

module.exports = router;