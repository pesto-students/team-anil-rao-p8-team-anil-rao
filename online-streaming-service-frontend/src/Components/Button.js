import "../Css/utils.css";
import FavIcn from "../assets/fav.png";
import FavIcnAlt from "../assets/favAlt.png";

export const NormalButton = (style={},onClickFunc=() => {},buttTxt="") => {
  return(
    <div 
      style={{ ...{borderRadius:10,justifyContent:"center",alignItems:"center",display:"flex",fontWeight:"bold"} , ...style}}
      onClick={() => {onClickFunc()}}>
      <p>{buttTxt}</p>
    </div>
  )
}
export const PurpleButton = ({style={},onClickFunc=() => {},buttTxt=""}) => {
  return(
    <div 
      className="bck-clr-purple-dark"
      style={{ ...{borderRadius:10,padding:"1.5vh 2vw",justifyContent:"center",alignItems:"center",display:"flex",fontWeight:"bold"},...style}}
      onClick={() => {onClickFunc()}}>
      <p className="mrg-0 clr-white">{buttTxt}</p>
    </div>
  )
}
export const FavButton = ({style={},onClickFunc=() => {},isFav=false}) => {
  return(
    <div 
      className="bck-clr-gry-light"
      style={{ ...{borderRadius:10,padding:"1.5vh 1vw",justifyContent:"center",alignItems:"center",display:"flex"},...style}}
      onClick={() => {onClickFunc()}}>
      <img src={isFav ? FavIcnAlt : FavIcn} style={{width:"2vw",height:"2vw"}}/>
    </div>
  )
}