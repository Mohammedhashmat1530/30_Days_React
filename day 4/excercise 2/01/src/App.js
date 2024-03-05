
import './App.css';

const Header = () => {
  return (
    <div className='header'> Front End Technologies</div>
  )
}

const Body = () => {
  return (
    <div className='Body-Img'>
        <div className='img'><img src="https://th.bing.com/th/id/OIP.thT5oFZQ6blt7EeQweU7-gHaD_?rs=1&pid=ImgDetMain" alt=""/></div>
        <div className='img'><img src="https://cdn.mos.cms.futurecdn.net/0a795e0c6e29d02b02aa2903109f07b6-1200-80.jpg" alt=""/></div>
        <div className='img'><img src="https://th.bing.com/th/id/OIP.8x5CrltXlZZIAkg9bo8z1AHaIW?rs=1&pid=ImgDetMain" alt=""/></div>
        <div className='img'><img src="https://th.bing.com/th/id/OIP.EzaFeHQLfPxFnlQAQxK8FAHaGp?rs=1&pid=ImgDetMain" alt=""/></div>
    </div>
  )
}


function App() {
  return (<>

    <Header />
    <Body />

  </>
  )
}

export default App;
