import React from 'react';
import { navigate } from '@reach/router';

export const formatDateTime = (dateTime) => {
  const date = dateTime.slice(0, 10).split('-').reverse().join('-')
  const time = dateTime.slice(11, 16)
  return `created at ${time} on ${date}`
}

export const voteHeart = (votes) => {
  return votes >= 0
    ? <img src={require("../images/hexagon-up-vote.png")} alt="heart emoji" height="40px" width="35px" className="hexagon-buttons" />
    : <img src={require("../images/hexagon-down-vote.png")} alt="broken heart emoji" height="40px" width="35px" className="hexagon-buttons" />
}

export const votingButtons = (voteChange, handleVote) => {
  return <span><button className="button-image" onClick={() => handleVote(1)} disabled={voteChange === 1}>{voteHeart(0)}</button> <button className="button-image" onClick={() => handleVote(-1)} disabled={voteChange === -1}>{voteHeart(-1)}</button></span>
}

export const deleteImage = () => {
  return <img src={require("../images/hexagon-delete.png")} alt="delete" height="40px" width="50px" className="hexagon-buttons" />
}

export const cancelImage = () => {
  return <img src={require("../images/hexagon-cancel.png")} alt="cancel" height="40px" width="50px" className="hexagon-buttons" />
}

export const submitImage = () => {
  return <img src={require("../images/hexagon-submit.png")} alt="submit" height="40px" width="50px" className="hexagon-buttons" />
}

export const joinImage = () => {
  return <img src={require("../images/hexagon-join.png")} alt="join" height="40px" width="50px" className="hexagon-buttons" />
}

export const logoutImage = () => {
  return <img src={require("../images/hexagon-logout.png")} alt="log out" height="40px" width="50px" className="hexagon-buttons" />
}

export const filterImage = () => {
  return <img src={require("../images/hexagon-filter.png")} alt="filter" height="40px" width="50px" className="hexagon-buttons" />
}

export const viewImage = () => {
  return <img src={require("../images/hexagon-view.png")} alt="view" height="40px" width="50px" className="hexagon-buttons" />
}

export const addImage = () => {
  return <img src={require("../images/hexagon-add.png")} alt="add" height="40px" width="50px" className="hexagon-buttons" />
}

export const rightImage = () => {
  return <img src={require("../images/hexagon-right.png")} alt="next" height="15px" width="15px" className="hexagon-buttons" />
}

export const leftImage = () => {
  return <img src={require("../images/hexagon-left.png")} alt="back" height="15px" width="15px" className="hexagon-buttons" />
}

export const handleError = (err) => {
  navigate('/not-found', {
    state: { msg: 'not found', err },
    replace: true,
  })
}

export const loadingIcon = () => {
  return <div className="loading-area">
    <img src={require("../images/loading-bee.png")} alt="loading bee" height="30px" width="30px" className="loading-bee" /></div>
}
