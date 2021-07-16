import React from "react";
import axios from "axios";

class App extends React.Component {

  state = {
    isLoading: true,
    music: []
  };
  
  componentDidMount() {
    
    //음악 데이터 로딩
    axios.get('https://ws.audioscrobbler.com/2.0/?method=track.search&track=BTS&api_key=cc0c40005535fde9039f0a38b2631bf0&format=json');
  }

  render() {  
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
  }
}

export default App;
