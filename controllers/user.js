const User =require("../models/user");

module.exports.renderSignupForm= (req, res) => {
  res.render("users/signup");
}

module.exports.signup=async (req, res) => {
try {
      const { username, email, password } = req.body;
      const newUser = new User({ username, email });
      const registerUser=await User.register(newUser, password);
      console.log(registerUser);
      req.login(registerUser,(err)=>{
      if(err){
        return next(err);
      }
       req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
});
   
} catch (e) {
   req.flash("error", e.message);
   res.redirect("/signup");
}
}

  module.exports.renderLoginForm= (req, res) => {
  res.render("users/login");
}

 module.exports.login=(req, res) => {
    req.flash("success", `Welcome back to Wonderlust`);
   let redirectUrl =res.locals.redirectUrl || "/listings";
   res.redirect(redirectUrl);
 }

module.exports.logout=(req,res,next)=>{
  req.logOut((err)=>{
    if(err){
      return next(err);
    }
    req.flash("success","you are logged out!!!");
    res.redirect("/listings");
  })
}