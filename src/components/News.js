import React, { Component } from 'react';
import Term from './Term';
import Spin from './Spin';
import PropTypes from 'prop-types';

export default class News extends Component {
  static defaultProps={
    country:'in',
    category:'general',
    pageSize:8
    

  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number

  }

  
  

  constructor(){

    super();
    this.state={
      articles:[],
      loading:false,page:1,
      totalResults:this.totalResults
    }

  }
  async componentDidMount(){

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f1fdffd7710f4351b7260ffa9affc760&page=1&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
    loading:false});
  
  }
  
  handleNextClick= async ()=>{
    
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))
    {
      

    }
    else{
      

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f1fdffd7710f4351b7260ffa9affc760&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({page:this.state.page+1,
      articles: parsedData.articles,
      loading:false
    })

    }


  }
  handlePreviousClick=async ()=>{

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f1fdffd7710f4351b7260ffa9affc760&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({page:this.state.page-1,
      articles: parsedData.articles,
    loading:false});



  }


  render() {
    return (
      < div className="container my-4">
        <h2 className="text-center" style={{margin: '40px 0px'}} >NewsApp - Top Headlines</h2>
        {this.state.loading && <Spin/>}
        <div className="row">
        {!(this.state.loading) && this.state.articles.map((element)=>{

          return <div className="col-md-4" key={element.url}>
           <Term  title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url}/>
          </div>})
        }
        </div>
        <div className="d-flex justify-content-between">
          <button  disabled={this.state.page<1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick} >&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>


        </div>
      </div>
    )
  } 
}


