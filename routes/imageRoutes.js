const cloudinary = require('cloudinary');
const router = require('express').Router();
require('dotenv').config();

cloudinary.config({
  cloud_name: "the-hufaaz",
  api_key: "896626833686385",
  api_secret: "lAjf6k2RFFjX93PYWjjdzxeW6BE"
})

router.delete('/:public_id', async(req, res)=> {
  const {public_id} = req.params;
  try {
      await cloudinary.uploader.destroy(public_id);
      res.status(200).send();
  } catch (e) {
      res.status(400).send(e.message)
  }
})


module.exports = router;
