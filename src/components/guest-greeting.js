import React from "react";

export class GuestGreeting extends React.Component {
    
        txtLoginName = undefined;
    
        constructor(props){
            super(props);
            this.state = {
                loginName: undefined
            };
            this.onSubmit = this.onSubmit.bind(this);
        }
    
        componentDidMount(){
    
        }
    
        componentWillUnmount(){
    
        }
    
        onSubmit (e) {
            e.preventDefault();
            this.setState({loginName: this.txtLoginName.value});
        }
    
        render(){
            return (
                <div>
                    <h1>Zaloguj się:</h1>
                    <label>Wprowadź nazwę:</label>
                    <input type="text" ref={(c) => this.txtLoginName = c}/>
                    <button type="button" onClick={this.onSubmit}>Zaloguj</button>
                </div>
            );
        }
    }