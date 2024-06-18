import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LoginIcon from '@mui/icons-material/Login';


function App() {
  return (
   
    <div className="App">
      <div className="header_logo">
        <div className="header_logoImage">My Site Logo Should be Here</div>
        <div className="header_shopName">My Shopping Site Name</div>
      </div>
      <div className="header_searchBar">
        <div className="header_searchBox">  <input type="text" name="inputTextBox" /></div>
        <div className="header_searchBoxMagnifier"><SearchIcon /> </div>
      </div>
      <div className="header_search"><ShoppingBasketIcon /> </div>
      <div className="header_bucket"><LoginIcon/></div>
    </div>
  );
}

export default App;
