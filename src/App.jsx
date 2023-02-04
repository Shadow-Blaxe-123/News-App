import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsItem from './components/NewsItem'

const api_key = 'baccf6e3a9b8406aa0ab4aa57ee47c6d';
// No. of articles per page
let pageSize = 20



export class App extends Component {


  constructor(){
    super();
    this.state = {
      articles : [],
      totalresults: 0,
      page: 1,
      loading: true // loading while no data
    }
  }

  handleFetch = async (page)=> {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${page}&apiKey=${api_key}`);
      let data = await response.json();
      return data
  }
// executed after page has loaded or rendered
  async componentDidMount(){
    let data = await this.handleFetch(this.state.page);
    this.setState(
      {
        articles: data.articles,
        totalresults: data.totalResults,
        // loading: false

      }

    )

   
  }
  handleNext = async () => {
    let data = await this.handleFetch(this.state.page +1)
      this.setState(
        {
          articles: data.articles,
          totalresults: data.totalResults,
          page: this.state.page +1
  
        }
      )
      
    }
  handlePrev = async () => {
    let data = await this.handleFetch(this.state.page - 1)
      this.setState(
        {
          articles: data.articles,
          totalresults: data.totalResults,
          page: this.state.page - 1
  
        }
      )
      
    }

  


  render() {
    return (
      <>
        <Navbar/>
        <div className='container my-3'>
        <div className="d-flex justify-content-center ">
          <h1>News App Using React JS</h1>
        </div>

      <div className="row">
       
       {this.state.articles.map((element)=>{
        let {urlToImage, title, description, url} = element;
        return (
          <div key={url} className="col-md-4 my-3">
            <NewsItem  imageUrl={urlToImage} title= {title} description={description} url= {url}/>
          </div>
        )
       })}
       </div>
       
       <div className="d-flex justify-content-between">
      <button disabled={(this.state.page <= 1) ? true:false} type="button" className="btn btn-dark btn-lg" onClick={this.handlePrev}> &larr; Previous</button>

      <button disabled= {this.state.page + 1 > Math.ceil(this.state.totalresults / pageSize) ? true : false} type="button" className="btn btn-dark btn-lg" onClick={this.handleNext}>Next &rarr;</button>
      {console.log(this.state.totalresults)}
      </div>
      </div>

     


      </>
    )
  }
}

export default App
