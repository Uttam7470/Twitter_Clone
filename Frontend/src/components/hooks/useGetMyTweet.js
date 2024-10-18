import axios from "axios";
import { TWEET_API_END_POINT} from "../../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweet } from "../../redux/tweetSlice";

const useGetMyTweet = (id) => {
  const dispatch = useDispatch();
  const { refresh,isActive } = useSelector((store) => store.tweet);

  const fetchMyTweet = async () => {
    try {
      const res = await axios.get(`${TWEET_API_END_POINT}/alltweets/${id}`, {
        withCredentials: true,
      });
      console.log(res);
      dispatch(getAllTweet(res.data.tweets));
    } catch (error) {
      console.log(error);
    }
  };

  async function followingTweetHandler(){
    try {
        axios.defaults.withCredentials = true;
      const res = await axios.get(
        `${TWEET_API_END_POINT}/followingtweets/${id}`
      );
      console.log(res);
      dispatch(getAllTweet(res.data.tweets));
      // dispatch(getRefresh());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(isActive){
        fetchMyTweet();
    }else{
        followingTweetHandler();
    }
  }, [isActive,refresh]);
};

export default useGetMyTweet;
