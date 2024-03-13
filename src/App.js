import React from "react";
import { Link } from 'react-router-dom'
import RoutesComponent from "./Routes";


const App = () => {
  const style = {border: '2px solid black', display: 'flex', alignItems: 'center'}
  const imgStyle = {border: '2px solid black', margin: '1rem .5rem', padding: '1rem 1rem'}

  return ( 
    <><section id='Title' style={{ ...style, margin: '1rem', padding: '0 0.5rem', justifyContent: 'space-between' }}>
      <h1 style={{ ...style, border: '0' }}>Bloomtech Eats</h1>
      <nav id="navBar" style={{ ...style, border: '0' }}>
        <Link style={{ ...style, marginRight: '10px' }} to="/">Home</Link>&nbsp;
        <Link style={{ ...style }} to="">Help</Link>
      </nav>
    </section><section id='main' style={{ ...style, margin: '1rem', padding: '5rem 0', flexDirection: 'column', textAlign: 'center' }}>
        <h1 style={{ ...style, border: '0', marginTop: '5rem' }}>Your favorite food, delivered while coding</h1>
        <nav>
          <Link style={{ ...style }} to='/pizza'>Pizza</Link>
        </nav>
      </section><section id='Body' style={{ ...style, flexDirection: 'column', alignItems: 'flex-start', margin: '1rem', padding: '0 0.5rem', justifyContent: 'flex-start' }}>
        <p style={{ textAlign: 'left' }}>Food Delivery in Gotham City</p>
        <div id="images1" style={{ ...style, border: '0', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <img style={imgStyle} src="image1.jpg" alt="Image 1" />
            <p>something here</p>
          </div>
          <div>
            <img style={imgStyle} src="image1.jpg" alt="Image 1" />
            <p>something here</p>
          </div>
          <div>
            <img style={imgStyle} src="image1.jpg" alt="Image 1" />
            <p>something here</p>
          </div>
        </div>
        <div style={{ width: '730px', height: '2px', backgroundColor: 'black' }}></div>
        <div id="images2" style={{ ...style, border: '0', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <img style={imgStyle} src="image1.jpg" alt="Image 1" />
          </div>
          <div>
            <img style={imgStyle} src="image1.jpg" alt="Image 1" />
          </div>
          <div>
            <img style={imgStyle} src="image1.jpg" alt="Image 1" />
          </div>
        </div>
        <RoutesComponent />
      </section></>
  );
};
export default App;
