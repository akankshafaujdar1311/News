import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
          right:'0'
          }
          }>

        <span class=" badge rounded-pill bg-danger" >{source}</span>
          </div>
  <img src={!imageUrl?'https://images.hindustantimes.com/img/2022/07/05/1600x900/koffee_with_karan_alia_bhatt_1657019768907_1657019769096.png':imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...read more</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>

    <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem