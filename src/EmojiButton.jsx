import React ,{ Component} from 'react';
import "./EmojiButton.css";
import {Button} from "react-bootstrap"



export default class EmojiButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgStyle : {
                backgroundImage : props.imgBack
            }
        }

        this.a_question_is_answered = this.a_question_is_answered.bind(this)
    };

    a_question_is_answered = () => {
        console.log(this.props.imgFeel)
    }



    render() {
        return (
            <div>
                <Button className="EmojiBox" style={this.state.imgStyle} onClick={this.a_question_is_answered}>

                </Button>
            </div>
        )
    }

}


