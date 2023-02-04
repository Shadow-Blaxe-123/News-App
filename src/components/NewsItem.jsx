import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
  <img src={this.props.imageUrl} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.description}</p>
    <a href={this.props.url} target='_blank' className="btn btn-dark btn-sm">Learn More &rarr;</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
