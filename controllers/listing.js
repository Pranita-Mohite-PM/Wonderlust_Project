const Listing =require("../models/listing");

module.exports.index=async(req,res)=>{
   const allListing =await Listing.find({});
   res.render("listing/index.ejs",{allListing});
}

module.exports.renderNewForm=(req,res)=>{
    res.render("listing/new.ejs");
}

module.exports.showListing=async (req,res)=>{
    let {id} =req.params;
    const listing =await Listing.findById(id)
    .populate({path:"reviews",populate:{
        path:"author",
    }})
    .populate("owner");
    if (!listing) {
    req.flash("error", "Listing you requested was not found");
    return res.redirect("/listings"); 
    }
    console.log(listing)
    res.render("listing/show.ejs",{listing});
}

module.exports.createListing=async(req,res,next)=>{
    let url =req.file.path;
    let filename=req.file.filename;
    
    // console.log(req.body.listing); 
    const newListing = new Listing(req.body.listing);
    newListing.owner=req.user._id;
    newListing.image={url,filename}
    await newListing.save();
    req.flash("success","listing added sucessfully!!!");
    res.redirect("/listings");
}

module.exports.renderEditFom=async(req,res)=>{
    let {id} =req.params;

    const listing =await Listing.findById(id);
    if(!listing){
    req.flash("error","listing you requested for does not exits!")
    res.redirect("listings");
    }
    let originalImageUrl= listing.image.url;
    originalImageUrl= originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listing/edit.ejs",{listing,originalImageUrl});
    req.flash("success","listing Edited!!!");
    console.log(req.body);

}

module.exports.updateListing=async(req,res)=>{

    let {id} =req.params;
    let listing=await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if ( typeof req.file !== "undefined"){
    let url =req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename}
    await listing.save();
    }
    req.flash("success","listing Updated!!!");
    res.redirect(`/listings/${id}`);

}
module.exports.destroyListing=async(req,res)=>{
     let {id} =req.params;
     let deletelisting =await Listing.findByIdAndDelete(id);
     console.log(deletelisting);
     req.flash("success","listing Deleted!!!");
     res.redirect("/listings");
}