const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');

router.post(fileUpload());

// Upload Endpoint /api/upload
module.exports = router.post('/', (req, res, next) => {
	if (req.files === null) {
		return res.status(400).json({ msg: 'No file uploaded' });
	}

	const file = req.files.file;

	next();
});
