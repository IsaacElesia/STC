const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Handler = require('../../models/Handler');

//@route    POST api/handers
//@desc     Register handler
//@access   Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('role', 'Role is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phone', 'Please include a valid phone number').isMobilePhone(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const { name, email, password, role, phone } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //See if handler exist
      let handler = await Handler.findOne({ email });

      if (handler) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Handler already exists.' }] });
      }
      //Get handler gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      //Create handler
      handler = new Handler({
        name,
        email,
        avatar,
        password,
        role,
        phone
      });

      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      handler.password = await bcrypt.hash(password, salt);

      //Save handler
      handler.save();

      //return JsonWebToken
      const payload = {
        handler: {
          id: handler.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
