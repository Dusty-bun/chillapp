import React, { useReducer } from "react";
import { FiThumbsUp } from 'react-icons/fi'
import { FiThumbsDown } from 'react-icons/fi'

const HANDLE_LIKE = Symbol("HANDLE_LIKE");
const HANDLE_DISLIKE = Symbol("HANDLE_DISLIKE");
const initialState = {
  likes: 0,
  dislikes: 0,
  active: null
};

const reducer = (state, action) => {
  const { likes, dislikes, active } = state;

  switch (action.type) {
    case HANDLE_LIKE:
      return {
        ...state,
        likes: state.likes + 1,
        dislikes: active === "dislike" ? dislikes - 1 : dislikes,
        active: "like"
      };
    case HANDLE_DISLIKE:
      return {
        ...state,
        likes: active === "like" ? likes - 1 : likes,
        active: "dislike",
        dislikes: dislikes + 1
      };
    default:
      return state;
  }
};

const  LikeOrDislike = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { likes, dislikes, active } = state;
  return (
    <div className='button_container'>
      <FiThumbsUp className='absolute bottom-2 left-2 text-gray-300'
        style={{
          color: active === "like" ? "green" : "white",
          marginRight: "10px"
        }}
        onClick={() =>
          active !== "like" ? dispatch({ type: HANDLE_LIKE }) : null
        }
      >
        <strong className='text_like'>Likes</strong>
        &nbsp;&nbsp;
        {likes}
      </FiThumbsUp>
      <FiThumbsDown className='absolute bottom-2 right-2 text-gray-300'
        style={{ color: active === "dislike" ? "red" : "white" }}
        onClick={() =>
          active !== "dislike" ? dispatch({ type: HANDLE_DISLIKE }) : null
        }
      >
        <strong className='text_like'>Dislikes</strong>
        &nbsp;&nbsp;
        {dislikes}
      </FiThumbsDown>
    </div>
  );
};
export default LikeOrDislike;

