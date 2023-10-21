import "./Price.css"
const Price = (props) => {
  return (
    <div >
        <div className="price">
    {props.price}
    </div>
    <button className="Pbutton">ADD TO CART</button>
    </div>
  );
};
export default Price;
