import React from 'react'

const User = (props) => {
  return (
    <>
        <div className='col-lg-3 col-md-4 user'>
            <img className='user_image' src={props.detail.avatar_url} />
            <h4 className='user_name'>{props.detail.login}</h4>
            <a type='button' href={props.detail.html_url} target="_blank">View Profile</a>
        </div>
    </>
  )
}

export default User

{/* <div className="user_detail">
    <div className='detail_list'>
        <span>Repos</span>
        <p>{}</p>
    </div>
    <div className='detail_list'>
        <span>Followers</span>
        <p>{}</p>
    </div>
</div> */}