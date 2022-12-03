import React, { Component } from "react";
import Slider from "react-slick";
import './Crousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// const Crousel = () => {
//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         initialSlide: 0,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };
//   return (
//     <div>
//         <Slider {...settings}>
//             <div style={{width:'300px',height:'200px',backgroundColor:"red"}}>1</div>
//             <div style={{width:'300px',height:'200px',backgroundColor:"red"}}>2</div>
//             <div style={{width:'300px',height:'200px',backgroundColor:"red"}}>3</div>
//             <div style={{width:'300px',height:'200px',backgroundColor:"red"}}>4</div>
//             <div style={{width:'300px',height:'200px',backgroundColor:"red"}}>5</div>
//             <div style={{width:'300px',height:'200px',backgroundColor:"red"}}>6</div>
//         </Slider>
//     </div>
//   )
// }

// export default Crousel
export default class PauseOnHover extends Component {
    render() {
      var settings = {
        // dots: true,
        // infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 1700,
        // pauseOnHover: true,

        // =====================================

        // dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: "linear",

      // ===========================================

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                // infinite: true,
                // dots: true
              }
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // initialSlide: 2
              }
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        <div className="main">
          <Slider {...settings}>
            <div  className="div">
             <img src="https://tse2.mm.bing.net/th?id=OIP.I5XOh9o_kbTNsXnsIc53aAHaHa&pid=Api&P=0"/>
            </div>
            <div className="div">
            <img src="https://tse3.mm.bing.net/th?id=OIP.1bnxcVBT_bKoNqP-tLjcpgHaJf&pid=Api&P=0"/>
            </div>
            <div className="div">
            <img src="https://tse3.mm.bing.net/th?id=OIP.t8LlCJIKEWi5TeqGdfoxHQHaJ3&pid=Api&P=0"/>
            </div>
            <div className="div">
            <img src="https://tse3.mm.bing.net/th?id=OIP.TIx31Rjgp7e4G_HwSxTxkAAAAA&pid=Api&P=0"/>
            </div>
            <div className="div">
            <img src="https://tse1.mm.bing.net/th?id=OIP.oxGOHKM__99W659JhC4neQHaFj&pid=Api&P=0"/>
            </div>
            <div className="div">
            <img src="https://tse3.mm.bing.net/th?id=OIP.CTvVfHEeovAx-0V5-dqVRwHaHa&pid=Api&P=0"/>
            </div>
            <div className="div">
            <img src="https://tse2.mm.bing.net/th?id=OIP.mbGqG9oLZIhHr4KoESQtIAHaJ4&pid=Api&P=0"/>
            </div>
            <div className="div">
            <img src="https://tse2.mm.bing.net/th?id=OIP.L21ZoozXAjYZT1bjKBcfxwHaHa&pid=Api&P=0"/>
            </div>
          </Slider>
        </div>
      );
    }
  }


