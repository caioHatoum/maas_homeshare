import React from 'react';
import HomeView from '../View/HomeView';
import HomeModel from '../Model/HomeModel';
class HomeController extends React.Component{
   
    constructor(){
        super();
        const homeModel = new HomeModel();
        console.log(homeModel.returnText());
        console.log("construtor")
        this.state ={
            cont:0,
            isRunning:false,
        };
    }
    onPressed = () =>{
        if(this.state.isRunning){
            clearInterval(this.interval);
            this.setState({
            isRunning:false,
        });
        }else{
            this.interval = setInterval(()=>{
                this.setState({
                    cont:this.state.cont+1,
                    isRunning:true,
                });
            },1000)
        }
    }
    static getDerivedStateFromProps = () =>{
        return true;
    }
    
    shouldComponentUpdate = () =>{
        console.log("update");
        return true;
    }

    getSnapshotBeforeUpdate = () =>{
        console.log("SNAPSHOT BEFORE update");
    }

    componentDidUpdate = () =>{
        console.log("component did update");
    }

    render = () =>{
        console.log("render")
       return(<HomeView
            cont={this.state.cont}
            onPressed={this.onPressed}
       />);
    };
}

export default HomeController;