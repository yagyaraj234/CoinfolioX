import UserSchema from "../models/UserDetails.js";

const userLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  UserSchema.findOne({ email }, function(err, user) {
    if (err) {
      console.error('Error while querying the database:', err);
      client.close();
      return;
    }

    if (user && user.password === password) {
      // Passwords match, login successful
      console.log('Login successful!');
      // Proceed with appropriate actions
    } else {
      // Invalid login details
      console.log('Invalid login!');
      // Handle the error accordingly
    }

    client.close();
  
});
}

export default userLogin;
