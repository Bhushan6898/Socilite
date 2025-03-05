import React from 'react';
import './profile.css';
import profile from '../../assets/images/1726654757431.jpg'

function ProfilePage() {
  return (
    <div className="profile-page mt-5">
    
      {/* Profile Header */}
      <div className="profile-header d-flex flex-column align-items-center position-relative mb-4">
        
        {/* Cover Photo */}
        <div className="cover-photo ">
          <img
            src={profile}
            alt="Cover"
            className="img-fluid "
            style={{ height: '150px', objectFit: 'cover',width:'150px' ,borderRadius:"100px"}}
          />
        </div>

        
        
        <div className="container ">
  <div className="row ">
    
    <div className="col-12 col-md-12 ">
      <h2 className="fw-bold">Bhushan Patil</h2>
      <p className="text-muted">@Bpatil</p>
      <p className="bio mb-3">Travel enthusiast | Food lover | Tech geek</p>
      <div className="social-links mb-3 d-flex justify-content-center flex-wrap">
        <a href="https://facebook.com/johndoe" target="_blank" rel="noopener noreferrer" className="social-link me-3 mb-2">Facebook</a>
        <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="social-link me-3 mb-2">Twitter</a>
        <a href="https://instagram.com/johndoe" target="_blank" rel="noopener noreferrer" className="social-link me-3 mb-2">Instagram</a>
      </div>
      <button className="btn btn-primary mt-2 w-100 w-sm-auto">Edit Profile</button>
    </div>
  </div>
</div>

      </div>

      {/* Follow/Followers Section */}
      <div className="follow-info d-flex justify-content-center mb-4">
        <div className="follow-item text-center mx-3">
          <span className="d-block fs-4">1000</span>
          <p className="text-muted">Followers</p>
        </div>
        <div className="follow-item text-center mx-3">
          <span className="d-block fs-4">150</span>
          <p className="text-muted">Following</p>
        </div>
        <div className="follow-item text-center mx-3">
          <span className="d-block fs-4">250</span>
          <p className="text-muted">Posts</p>
        </div>
      </div>

      {/* Posts Section */}
      <div className="posts-section">
        <h3 className="fw-bold mb-4">Posts</h3>

        {/* Posts Grid */}
        <div className="row">
          {/* First Post */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="post">
              <img
                src="https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_640.jpg"
                alt="Post"
                className="img-fluid rounded shadow-sm"
                style={{ height: '250px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <div className="post-info mt-2">
                <p className="post-text">Exploring the mountains this weekend!</p>
                <div className="post-actions">
                  <button className="btn btn-outline-danger me-2">❤️ Like</button>
                  <button className="btn btn-outline-info">💬 Comment</button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Post */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="post">
              <img
                src="https://cdn.pixabay.com/photo/2022/08/22/12/42/bird-7403593_640.jpg"
                alt="Post"
                className="img-fluid rounded shadow-sm"
                style={{ height: '250px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <div className="post-info mt-2">
                <p className="post-text">Had the best pizza ever!</p>
                <div className="post-actions">
                  <button className="btn btn-outline-danger me-2">❤️ Like</button>
                  <button className="btn btn-outline-info">💬 Comment</button>
                </div>
              </div>
            </div>
          </div>

          {/* Third Post */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="post">
              <img
                src="https://cdn.pixabay.com/photo/2022/10/25/13/04/papilio-ornythion-7545781_640.jpg"
                alt="Post"
                className="img-fluid rounded shadow-sm"
                style={{ height: '250px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <div className="post-info mt-2">
                <p className="post-text">Had the best pizza ever!</p>
                <div className="post-actions">
                  <button className="btn btn-outline-danger me-2">❤️ Like</button>
                  <button className="btn btn-outline-info">💬 Comment</button>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Post */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="post">
              <img
                src="https://cdn.pixabay.com/photo/2019/06/09/10/22/flower-4261793_640.jpg"
                alt="Post"
                className="img-fluid rounded shadow-sm"
                style={{ height: '250px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <div className="post-info mt-2">
                <p className="post-text">Had the best pizza ever!</p>
                <div className="post-actions">
                  <button className="btn btn-outline-danger me-2">❤️ Like</button>
                  <button className="btn btn-outline-info">💬 Comment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
