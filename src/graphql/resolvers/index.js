import TweetResolvers from "./tweet-resolver";

export default {
  Query: {
    getTweets: TweetResolvers.getTweets,
  },
};
