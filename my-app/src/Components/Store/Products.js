import Button from "./Button";
import Price from "./Price";
import "./Products.css"
const Products =()=>{
    return(<ul className="Plist">
        <li className="list">Album 1 </li>
        <li className="Rlist" >Album 2</li>
        <div className="row">
  <div className="column">
    <img className="imgalign"src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png" alt="Snow" />
    <Price price="$12.99"/>
  </div>
  <div className="column">
    <img className="imgalign"src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" alt="Forest" />
    <Price price="$14.99"/>
  </div>
</div>
<li className="list">Album 3 </li>
        <li className="Rlist" >Album 4</li>
        <div className="row">
  <div className="column">
    <img className="imgalign"src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" alt="Snow" />
    <Price price="$9.99"/>
  </div>
  <div className="column">
    <img className="imgalign"src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" alt="Forest" />
    <Price price="$19.99"/>
  </div>
</div>
   <Button/>     
    </ul>)

}
export default Products;