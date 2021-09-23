import React from 'react';
import Banner from "../banner/banner";
import MainImage from "../mainImage/mainImage";
import Card from "../card/card";
import SendRequest from "../sendRequest/sendRequest";
import Rooms from "../rooms/rooms";
import Construction from "../construction/construction";
import Flux from "../flux/flux";
import Live from "../live/live";
import Articles from "../articles/articles";
import Benefits from "../benefits/benefits";
import Carousel from "../carousel/carousel";
import Location from "../location/location";
import Info from "../info/info";
import Comfort from "../comfort/comfort";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

function Index(props) {
    return (
        <div className="mp0">
            <Banner/>
            <MainImage/>
            <Card/>
            <SendRequest/>
            <Rooms/>
            <Construction/>
            <Flux/>
            <Live/>
            <Articles/>
            {/*<Benefits/>*/}
            <Carousel/>
            <SendRequest/>
            <Location/>
            <Info/>
            <Comfort/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Index;