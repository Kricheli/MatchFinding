import React, {Component} from 'react';
import './App.css';
import MatchCard from './components/MatchCard';
import {Data} from './components/Data';

class App extends React.Component{
  state={
    IlikeItCounter:0,
    IdislikeItCounter:0,
    currentItem: 0,
    isEnd: false,
    numOfItems: Data.length-1,
  }

  setLikeNumber = () => {
    return this.setState({IlikeItCounter: this.state.IlikeItCounter+1 });
  };

  setDislikeNumber = () => {
    return this.setState({IdislikeItCounter: this.state.IdislikeItCounter+1 });
  };

  setNextItem = () => {
    if (this.state.currentItem + 1 <= this.state.numOfItems) {
      return this.setState({ currentItem: this.state.currentItem+1 });
    } else {
      this.setState({ isEnd: true });
    }
  };

  render() {
    return (
      <div className="App">
        <MatchCard 
          likesNumber={this.state.IlikeItCounter}
          dislikeNumber={this.state.IdislikeItCounter}
          likeFunction={this.setLikeNumber}
          dislikeFunction={this.setDislikeNumber}
          nextItem={this.setNextItem}
          isEnd={this.state.isEnd}
          currentItem={this.state.currentItem}
        >
        </MatchCard>
      </div>
    );
  }
}

export default App;
