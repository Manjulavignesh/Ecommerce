import "./Header.css";

const Header = () => {
  

  return (
    <ul className="ul">
      <li className="li">
        <a href="#home">HOME</a>
      </li>
      <li className="li">
        <a href="#news">STORE</a>
      </li>
      <li className="li">
        <a href="#about">ABOUT</a>
      </li>
      <button className="button">Cart</button>
    </ul>
  );
};
export default Header;
