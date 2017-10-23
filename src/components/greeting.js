import React from "react";
import {GuestGreeting} from "./guest-greeting";

export function Greeting(props) {
    let i = props.isLoggedIn;
    if(i){
        return null;
    }else{
        return <GuestGreeting />
    }
}