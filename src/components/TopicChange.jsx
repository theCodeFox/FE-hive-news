import React, { Component } from 'react';

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
          <button>SUBMIT</button>
          <button className="delete" onClick={this.handleCancel}>CANCEL</button>
        </form>
        : <p>There are {topics.length} topics {(access === 'admin' || access === 'member') && <button onClick={this.toggleAdd}>ADD</button>}<br /></p>}
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