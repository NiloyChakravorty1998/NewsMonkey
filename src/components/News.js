import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export default class 
 extends Component {
    constructor(){
        super();
        console.log('Hello i am a constructor');
        this.state = 
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey top headlines</h2>
        <div className="row">
         <div className='col md-4'>
         <NewsItem title='my title' description='my desc'
          imageUrl='/asd'/>
         </div>
         <div className='col md-4'>
         <NewsItem title='my title' description='my desc'/>
         </div>
         <div className='col md-4'>
         <NewsItem title='my title' description='my desc'/>
         </div>
        </div>
        <div className="row">
         <div className='col md-4'>
         <NewsItem title='my title' description='my desc'/>
         </div>
         <div className='col md-4'>
         <NewsItem title='my title' description='my desc'/>
         </div>
         <div className='col md-4'>
         <NewsItem title='my title' description='my desc'/>
         </div>
        </div>
        
      </div>
    )
  }
}
