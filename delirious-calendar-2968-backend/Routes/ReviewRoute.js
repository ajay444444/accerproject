const express=require("express");
const { userAuth } = require("../Middlewares/user.auth");
const reviewModel = require("../Model/ReviewModel");


const reviewRouter=express.Router();

    reviewRouter.post("/add",userAuth,async(req,res)=>{
        
            const { name, email, rating } = req.body;
            const newReview = new reviewModel({ name, email, rating });
          
            newReview
              .save()
              .then((review) => res.json(review))
              .catch((err) => res.status(400).json("Error: " + err));
          });
          
          // Fetch reviews
          reviewRouter.get("/get", (req, res) => {
            reviewModel.find({})
              .then((reviews) => res.json(reviews))
              .catch((err) => res.status(400).json("Error: " + err));
          });

          reviewRouter.delete("/delete",async(req,res)=>{
            try{ 
            const {reviewID} = req.body
            await reviewModel.findByIdAndDelete(reviewID)
            res.status(200).json("Success")
            }catch(err){
              console.log(err)
              res.status(500).json("failed")
            }

          })
          
  
module.exports={reviewRouter};