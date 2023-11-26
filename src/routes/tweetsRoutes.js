import express from "express";
import tweetService from "../services/tweetsService.js";
export const tweetsRouter = express.Router();

// Get tweet by id
tweetsRouter.get( "/tweets/:id", async ( req, res ) => {
    let { id } = req.params;

    if ( !id ) {
      return res.status(400).send(`Tweet id is required`);
    }

    const tweetById = await tweetService.findTweetById(id)

    if(!tweetById){
      return res.status(404).send(`Tweet not found`)
    }

    return res.status(200).send(tweetById);
} );

// Get list of tweets
tweetsRouter.get( "/tweets/", async ( req, res ) => {
  let { author } = req.query;
  
  let tweetList;

  if (author) {
    tweetList = await tweetService.findTweetsByAuthor(author)
  } else {
    tweetList = await tweetService.findAll();
  }

  res.status(200).send(tweetList);
} );

// Create a tweet
tweetsRouter.post( "/tweets/", async ( req, res ) => {
    // destruct request body
    let { author, text, imgUrl } = req.body;

    if(!author || !text){
      return res.status(400).send("Missing required tweet information")
    }

    const newTweet = await tweetService.createTweet(author, text, imgUrl)

    res.status(201).send(newTweet);
} );
