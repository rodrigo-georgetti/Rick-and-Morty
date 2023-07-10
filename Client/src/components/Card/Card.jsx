import { connect } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions";
import PathRoutes from "../../helpers/Routes.helper";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Card(props) {
  const { id,name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props;
const [isFav, setIsFav] = useState(false)

useEffect(() => {
  // for (let i=0; i<myFavorites.length; i++){
  //   if (myFavorites[i].id === props.id){
  //     setIsFav(true)
  //   }
  // }
  myFavorites.forEach((fav) => {
     if (fav.id === props.id) {
        setIsFav(true);
     }
  });
}, [myFavorites]);
const handleFavorite = () => {
  isFav ? removeFav(id) : addFav(props);
  setIsFav(!isFav)
}
  return (
    <div className={styles.card}>
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      <button onClick={()=>{onClose(id)}}> X </button>
      <div className={styles.wrapperText}>
        <Link to={`${PathRoutes.DETAILID}${id}`}>
        <h1 className={styles.name}> {name} </h1>
        </Link>
      <div className={styles.details}>
        <h2> {status} </h2>
        <h2> {species} </h2>
        <h2> {gender} </h2>
        <h2> {origin} </h2>
      </div>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addFav: (character) =>{
      dispatch(addFav(character))
    },
    removeFav: (id) =>{
      dispatch(removeFav(id ))
    },
  }
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);