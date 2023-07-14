import "../Css/utils.css";
import "../Css/Button.css";
import FavIcn from "../assets/fav.png";
import FavIcnAlt from "../assets/favAlt.png";

export const NormalButton = (style={},onClickFunc=() => {},buttTxt="") => {
  return(
    <div 
      className="normal-button"
      style={{...style}}
      onClick={() => {onClickFunc()}}>
      <p>{buttTxt}</p>
    </div>
  )
}
export const PurpleButton = ({style={},onClickFunc=() => {},buttTxt=""}) => {
  return(
    <div 
      className="bck-clr-purple-dark purple-button"
      style={{...style}}
      onClick={() => {onClickFunc()}}>
      <p className="mrg-0 clr-white">{buttTxt}</p>
    </div>
  )
}
export const FavButton = ({style={},onClickFunc=() => {},isFav=false}) => {
  return(
    <div 
      className="bck-clr-gry-light fav-butt"
      style={{...style}}
      onClick={() => {onClickFunc()}}>
      <img src={isFav ? FavIcnAlt : FavIcn} style={{width:"2vw",height:"2vw"}}/>
    </div>
  )
}