import React, { Component } from 'react';
import "./Images.css"
// import e from 'express';
//import ChildComponent from "./childComponent/ChildComponent"
//import styles from "./DemoComponent.css";
//import { url } from 'gravatar';

class Images extends Component{
    
    state = {
            imageUrl: " ",
            imageUrlArray: [
                "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://cdn.pixabay.com/photo/2016/08/03/14/24/roses-1566792__340.jpg",
                "https://i.pinimg.com/736x/11/2b/74/112b746a2182417b2a947d949798c968.jpg",
                "https://www.royalflowersgroup.com/wp-content/cache/thumbnails/2015/04/roses-rfg-930x1080-c.jpg",
                "https://content.thriveglobal.com/wp-content/uploads/2018/11/Flower.jpg",
                "https://www.thesun.co.uk/wp-content/uploads/2020/02/WU1220MothersDayFlowers_01_V2_PCM167624-p1e1r83aiak1q17vp1o1j1jc51poc-1-e1582540549859.jpg",
                "https://www.arenaflowers.co.in/blog/wp-content/uploads/2017/09/Marigold_flowers_Summer.jpg",
                "https://content.thriveglobal.com/wp-content/uploads/2018/11/Flower.jpg?w=1200&crop=0,0,100,52",
                "https://www.golden-gate-park.com/wp-content/uploads/2011/03/conservatory_of_flowers3.jpg",
                "https://i7.fnp.com/images/pr/l/mixed-roses-bunch_1.jpg",

            ],
            showModal: false,
            popImageUrl: ""
        }
    

    imageSubmitter = (e) =>{
        e.preventDefault();
        let imageUrlsArray = this.state.imageUrlArray;
        imageUrlsArray.push(this.state.imageUrl)
        this.setState({
            imageUrlsArray: imageUrlsArray
        })
    }

    handleLinkChange = (e) =>{
        e.preventDefault();
        this.setState({
            imageUrl:e.target.value
        })

    }
    render(){
        let {imageUrlArray} = this.state;
        const images = imageUrlArray.map((url,index) => {
            return(
                <img 
                  className="singleImage"
                  src={url}
                  key={index}
                  alt="pic here"
                />
            )

        });

        console.log(images,'images hjere')
        return (
        <div className="Images">
            {images}
        </div>
        );
    }
}

export default Images;