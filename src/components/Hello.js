
import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

class Hello extends React.Component {
   componentDidMount( ) {
       if ( this.props.photos.length <= 0 ) {
           this.props.fetchData( );
       }
   }

   render( ) {
     const { photos } = this.props;

       return (
           <div>
               <h2>Mars Rover Photos taken 3-6-2015 </h2>

                   { photos.map((photos)  => (
                      <img src={photos.img_src}></img>
                    )) }
           </div>
       );
   }
}



Hello.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
   photos: state.data,
} );

const mapDispatchToProps = {
   fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Hello );
