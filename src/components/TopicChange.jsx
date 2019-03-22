import React, { Component } from 'react';
import { cancelImage, submitImage, addImage } from '../utils/app-utils';

class TopicChange extends Component {
  state = {
    addClicked: false,
    slug: '',
    description: '',
  }
  render() {
    const { topics, access } = this.props;
    const { addClicked, slug, description } = this.state;
    return <div className="topic-article-changeTopic">
      {addClicked
        ? <form action="post" onSubmit={this.handleTopicSubmit}>
          <label htmlFor="slug">Topic Slug:</label>
          <input type="text" id="slug" name="slug" onChange={this.handleTopicChange} value={slug} required />
          <br />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" onChange={this.handleTopicChange} value={description} required />
          <button className="button-image">{submitImage()}</button>
          <button className="button-image" onClick={this.handleCancel}>{cancelImage()}</button>
        </form>
        : <p>There are {topics.length} topics {(access === 'admin' || access === 'member') && <button className="button-image" onClick={this.toggleAdd}>{addImage()}</button>}<br /></p>}
    </div>
  }

  handleTopicChange = (event) => {
    event.persist()
    const newTopicData = event.target.value;
    const topicDataKey = event.target.id;
    this.setState({ [topicDataKey]: newTopicData })
  }

  handleTopicSubmit = (event) => {
    event.preventDefault();
    const { slug, description } = this.state
    this.props.addTopic(slug, description);
    this.setState({
      addClicked: false,
      slug: '',
      description: ''
    })
  }

  handleCancel = () => {
    this.state.addClicked && this.setState({ addClicked: false })
  }

  toggleAdd = () => {
    !this.state.addClicked && this.setState({ addClicked: true })
  }

};

export default TopicChange;