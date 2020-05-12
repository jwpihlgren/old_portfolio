import React from 'react'

export default class MovieCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
          <div className="raised card">
          <div className="blurring dimmable image">
              <div className="ui dimmer">
                  <div className="content">
                      <div className="center">
                          <div className="ui inverted button"><a href="#">Read more</a></div>
                          {"https://image.tmdb.org/t/p/w500/" + this.props.backdrop}
                      </div>
                  </div>
              </div>
              <img src={"https://image.tmdb.org/t/p/w500/" + this.props.backdrop}></img>
          </div>
          <div className="content">
              <p className="header">{this.props.title}</p>
              <div className="description">
                {this.props.synopsis.slice(0, 80) + "..."}
              </div>
          </div>
          <div className="extra">
              Rating: {this.props.vote_average}
               <div className="ui star rating" data-rating={this.props.vote_average > 0 ? this.props.vote_average / 2 : this.props.vote_average} data-max-rating="5"></div>
          </div>
      </div>
              

        )
    }
        
}