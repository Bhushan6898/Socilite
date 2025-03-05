import React, { useState } from "react";
import "./post.css";
import SocialNavbar from "./navbar";

export default function PostsSection() {
  const [likes, setLikes] = useState([[], [], [], []]); // List of users who liked each post
  const [comments, setComments] = useState([[], [], [], []]); // List of comments for each post
  const [showComments, setShowComments] = useState([false, false, false, false]); // Track comment visibility for each post
  const [showLikes, setShowLikes] = useState([false, false, false, false]); // Track whether to show likes for each post
  const [newComment, setNewComment] = useState(""); // For new comment input

  const handleLikeClick = (index, username) => {
    const newLikes = [...likes];
    if (newLikes[index].includes(username)) {
      newLikes[index] = newLikes[index].filter(user => user !== username); // Remove user if they already liked
    } else {
      newLikes[index].push(username); // Add user to the list of likes
    }
    setLikes(newLikes);
  };

  const handleCommentClick = (index) => {
    const newShowComments = [...showComments];
    newShowComments[index] = !newShowComments[index]; // Toggle visibility of comments section
    setShowComments(newShowComments);
  };

  const handleLikesClick = (index) => {
    const newShowLikes = [...showLikes];
    newShowLikes[index] = !newShowLikes[index]; // Toggle visibility of likes list
    setShowLikes(newShowLikes);
  };

  const handleAddComment = (index) => {
    if (newComment.trim() !== "") {
      const newComments = [...comments];
      newComments[index].push(newComment); // Add new comment
      setComments(newComments);
      setNewComment(""); // Clear the comment input after adding
    }
  };

  return (
    <div className="posts-container">
      {/* Post 1 */}
      <div className="post">
      <div className="post-header d-flex justify-content-between align-items-center">
  {/* User Info */}
  <div className="user-info d-flex align-items-center">
    <img
      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      alt="user1"
      className="user-avatar rounded-circle"
      style={{ width: '40px', height: '40px', marginRight: '10px' }} // You can adjust the size here
    />
    <p className="mb-0">User 1</p>
  </div>

  {/* Three Dots */}
  <div className="three-dots" style={{ cursor: 'pointer' }}>
    <span>...</span>
  </div>
</div>

        <img
          src="https://cdn.pixabay.com/photo/2022/08/22/12/42/bird-7403593_640.jpg"
          alt="Post"
          className="post-image"
        />
        <div className="post-actions">
          {/* Top Icons for Like, Comment, and Share */}
          <div className="action-icons">
            <button 
              className="icon-button" 
              onClick={() => handleLikeClick(0, "User 1")}
            >
              ❤️
            </button>
            <button 
              className="icon-button" 
              onClick={() => handleCommentClick(0)}
            >
              💬
            </button>
            <button className="icon-button">🔗</button> {/* Share icon */}
          </div>
        </div>
        <div className="post-info">
          <p><strong>User 1</strong> Lorem ipsum dolor sit amet.</p>
          <p>30 mins ago</p>
        </div>

        {/* Bottom Text Buttons for Like, Comment with Counts */}
        <div className="post-actions-text">
          <button 
            className="like-button" 
            onClick={() => handleLikeClick(0, "User 1")}
          >
            Like ({likes[0].length})
          </button>
          <button className="comment-button" onClick={() => handleCommentClick(0)}>
            Comment
          </button>
        </div>

        {/* Likes List */}
        {showLikes[0] && (
          <div className="likes-section">
            <p>Liked by: {likes[0].join(", ")}</p>
          </div>
        )}

        {/* Comments Section */}
        {showComments[0] && (
          <div className="comments-section">
            <div className="comment-input">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
              />
              <button onClick={() => handleAddComment(0)}>Add Comment</button>
            </div>
            <div className="comments-list">
              {comments[0].map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Post 2 */}
      <div className="post">
        <div className="post-header">
          <div className="user-info">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="user2"
              className="user-avatar"
            />
            <p>User 2</p>
          </div>
          <div className="three-dots">...</div>
        </div>
        <img
          src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
          alt="Post"
          className="post-image"
        />
        <div className="post-actions">
          {/* Top Icons for Like, Comment, and Share */}
          <div className="action-icons">
            <button 
              className="icon-button" 
              onClick={() => handleLikeClick(1, "User 2")}
            >
              ❤️
            </button>
            <button 
              className="icon-button" 
              onClick={() => handleCommentClick(1)}
            >
              💬
            </button>
            <button className="icon-button">🔗</button> {/* Share icon */}
          </div>
        </div>
        <div className="post-info">
          <p><strong>User 2</strong> Consectetur adipiscing elit.</p>
          <p>1 hour ago</p>
        </div>

        {/* Bottom Text Buttons for Like, Comment with Counts */}
        <div className="post-actions-text">
          <button 
            className="like-button" 
            onClick={() => handleLikeClick(1, "User 2")}
          >
            Like ({likes[1].length})
          </button>
          <button className="comment-button" onClick={() => handleCommentClick(1)}>
            Comment
          </button>
        </div>

        {/* Likes List */}
        {showLikes[1] && (
          <div className="likes-section">
            <p>Liked by: {likes[1].join(", ")}</p>
          </div>
        )}

        {/* Comments Section */}
        {showComments[1] && (
          <div className="comments-section">
            <div className="comment-input">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
              />
              <button onClick={() => handleAddComment(1)}>Add Comment</button>
            </div>
            <div className="comments-list">
              {comments[1].map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="post">
        <div className="post-header">
          <div className="user-info">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="user2"
              className="user-avatar"
            />
            <p>User 3</p>
          </div>
          <div className="three-dots">...</div>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2023/12/26/02/21/bird-8469368_640.jpg"
          alt="Post"
          className="post-image"
        />
        <div className="post-actions">
          {/* Top Icons for Like, Comment, and Share */}
          <div className="action-icons">
            <button 
              className="icon-button" 
              onClick={() => handleLikeClick(1, "User 2")}
            >
              ❤️
            </button>
            <button 
              className="icon-button" 
              onClick={() => handleCommentClick(1)}
            >
              💬
            </button>
            <button className="icon-button">🔗</button> {/* Share icon */}
          </div>
        </div>
        <div className="post-info">
          <p><strong>User 3</strong> Consectetur adipiscing elit.</p>
          <p>1 hour ago</p>
        </div>

        {/* Bottom Text Buttons for Like, Comment with Counts */}
        <div className="post-actions-text">
          <button 
            className="like-button" 
            onClick={() => handleLikeClick(1, "User 2")}
          >
            Like ({likes[1].length})
          </button>
          <button className="comment-button" onClick={() => handleCommentClick(1)}>
            Comment
          </button>
        </div>

        {/* Likes List */}
        {showLikes[1] && (
          <div className="likes-section">
            <p>Liked by: {likes[1].join(", ")}</p>
          </div>
        )}

        {/* Comments Section */}
        {showComments[1] && (
          <div className="comments-section">
            <div className="comment-input">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
              />
              <button onClick={() => handleAddComment(1)}>Add Comment</button>
            </div>
            <div className="comments-list">
              {comments[1].map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
          </div>
        )}
      </div> <div className="post">
        <div className="post-header">
          <div className="user-info">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="user2"
              className="user-avatar"
            />
            <p>User 4</p>
          </div>
          <div className="three-dots">...</div>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_640.jpg"
          alt="Post"
          className="post-image"
        />
        <div className="post-actions">
          {/* Top Icons for Like, Comment, and Share */}
          <div className="action-icons">
            <button 
              className="icon-button" 
              onClick={() => handleLikeClick(1, "User 2")}
            >
              ❤️
            </button>
            <button 
              className="icon-button" 
              onClick={() => handleCommentClick(1)}
            >
              💬
            </button>
            <button className="icon-button">🔗</button> {/* Share icon */}
          </div>
        </div>
        <div className="post-info">
          <p><strong>User 4</strong> Consectetur adipiscing elit.</p>
          <p>1 hour ago</p>
        </div>

        {/* Bottom Text Buttons for Like, Comment with Counts */}
        <div className="post-actions-text">
          <button 
            className="like-button" 
            onClick={() => handleLikeClick(1, "User 2")}
          >
            Like ({likes[1].length})
          </button>
          <button className="comment-button" onClick={() => handleCommentClick(1)}>
            Comment
          </button>
        </div>

        {/* Likes List */}
        {showLikes[1] && (
          <div className="likes-section">
            <p>Liked by: {likes[1].join(", ")}</p>
          </div>
        )}

        {showComments[1] && (
          <div className="comments-section">
            <div className="comment-input">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
              />
              <button onClick={() => handleAddComment(1)}>Add Comment</button>
            </div>
            <div className="comments-list">
              {comments[1].map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
          </div>
        )}
      </div>
   
    </div>
  );
}
