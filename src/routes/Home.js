import React from 'react';
import axios from 'axios';
import Music from '../components/Music';
import './Home.css';

class Home extends React.Component {

  // 1. constructer (1)
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      musics: [],
      artist : ''
    }
  }
  
  // 2. getMusics (4)
  getMusics = async() => {
    this.state.artist = 'bts';
    const musics = await axios.get('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + this.state.artist + '&api_key=cc0c40005535fde9039f0a38b2631bf0&format=json');
    this.state.musics = musics.data.topalbums.album;
    
    // console.log(musics);
    // console.log(musics.data);
    // console.log(musics.data.topalbums);
    // console.log(musics.data.topalbums.album);

    console.log(this.state.musics);
  }

  // 3. componentDidMount (3)
  componentDidMount() {
    this.getMusics();
  }

  // 4. render (2)
  render() {  
    const { isLoading, musics, artist } = this.state;

    return (
      <section className = "container">
        {/* {isLoading ? ( 
          <div className = "loader">
            <span className = "loading__text">Loading...</span>
          </div>

          ) : ( // isLoading ? (true 이면 시작되는 것) : (true 가 아니라면 시작되는 것) */}

          <div className = "musics">
            {musics.map (music => (
              <Music
                  poster = {music.poster}
                  name = {music.name}
                  artist = {music.artist}
              ></Music>
            ))}
          </div>

        {/* )} */}
      </section>
    );
  }
}

export default Home;