import React, { Component } from 'react';
import {Grid, Row, Col} from "react-bootstrap"
import './App.css';
import EmojiButton from "./EmojiButton.jsx"


 class App extends Component {

    constructor(props) {
        super(props);
            this.state = {
            question : "Hello, how do you feel ?",
            nb_of_answers : 9,
            emojiis : { 0 : {img : "url(https://cdn.shopify.com/s/files/1/1061/1924/products/Slightly_Smiling_Emoji_Icon_34f238ed-d557-4161-b966-779d8f37b1ac_large.png?v=1513251058)", feel : "happy" },
                        1 : {img : "url(https://cdn.shopify.com/s/files/1/1061/1924/products/Surprised_Emoji_Icon_2_large.png?v=1513251062)", feel : "suprised" },
                        2 : {img : "url(https://cdn.shopify.com/s/files/1/1061/1924/products/Kiss_Emoji_Icon_2_large.png?v=1513336436)", feel : "love" },
                        3 : {img : "url(https://cdn.shopify.com/s/files/1/1061/1924/products/Super_Angry_Face_Emoji_ios10_large.png?v=1513249402)", feel : "angry" },
                        4 : {img : "url(https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_unamused_face_large.png?v=1513251068)",feel : "bored" },
                        5 : {img : "url(https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Thinking_large.png?v=1513251064)",feel : "thinking" },
                        6 : {img : "url(https://cdn.shopify.com/s/files/1/1061/1924/products/Disappointed_but_Relieved_Emoji_Icon_1e554748-dab1-472b-937e-54ecd95ee75c_large.png?v=1513251033)",feel : "sad" },
                        7 : {img : "url(https://cdn.shopify.com/s/files/1/1061/1924/products/OMG_Emoji_Icon_0cda9b05-20a8-47f0-b80f-df5c982e0963_large.png?v=1513249394)",feel : "omg" },
                        8 : {img : "url(https://cdn.shopify.com/s/files/1/1061/1924/products/Tears_Emoji_Icon_2_large.png?v=1513249403)",feel : "laugth" }
                }
            }
    }

    render() {
        switch (this.state.nb_of_answers) {
            case 2:
                return (
                    <Grid>
                        <Row>
                            <Col xs={6} md={6}>
                                <EmojiButton imgBack= {this.state.emojiis[0]["img"]} imgFeel = {this.state.emojiis[0]["feel"]} />
                            </Col>
                            <Col xs={6} md={6}>
                                <EmojiButton imgBack= {this.state.emojiis[1]["img"]} imgFeel = {this.state.emojiis[1]["feel"]} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <h1>{this.state.question}</h1>
                            </Col>
                        </Row>
                    </Grid>

                )

            case 3:
                return (
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack ={this.state.emojiis[0]["img"]} imgFeel = {this.state.emojiis[0]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[1]["img"]} imgFeel = {this.state.emojiis[1]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[2]["img"]} imgFeel = {this.state.emojiis[2]["feel"]} />
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={12} md={12}>
                            <h1>{this.state.question}</h1>
                        </Col>
                        </Row>
                    </Grid>
                )

            case 4:
                return (
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack ={this.state.emojiis[0]["img"]} imgFeel = {this.state.emojiis[0]["feel"]} />
                            </Col>
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[1]["img"]} imgFeel = {this.state.emojiis[1]["feel"]} />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[2]["img"]} imgFeel = {this.state.emojiis[2]["feel"]} />
                            </Col>
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[3]["img"]} imgFeel = {this.state.emojiis[3]["feel"]} />
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={12} md={12}>
                            <h1>{this.state.question}</h1>
                        </Col>
                        </Row>
                    </Grid>
                )

            case 5:
                return (
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack ={this.state.emojiis[0]["img"]} imgFeel = {this.state.emojiis[0]["feel"]} />
                            </Col>
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[1]["img"]} imgFeel = {this.state.emojiis[1]["feel"]} />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12} md={12} >
                                <EmojiButton imgBack= {this.state.emojiis[2]["img"]} imgFeel = {this.state.emojiis[2]["feel"]} />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[3]["img"]} imgFeel = {this.state.emojiis[3]["feel"]} />
                            </Col>
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[4]["img"]} imgFeel = {this.state.emojiis[4]["feel"]} />
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={12} md={12}>
                            <h1>{this.state.question}</h1>
                        </Col>
                        </Row>
                    </Grid>
                )
            case 6 :
                return (
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack ={this.state.emojiis[0]["img"]} imgFeel = {this.state.emojiis[0]["feel"]} />
                            </Col>
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[1]["img"]} imgFeel = {this.state.emojiis[1]["feel"]} />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[2]["img"]} imgFeel = {this.state.emojiis[2]["feel"]} />
                            </Col>
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[3]["img"]} imgFeel = {this.state.emojiis[3]["feel"]} />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[4]["img"]} imgFeel = {this.state.emojiis[4]["feel"]} />
                            </Col>
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[5]["img"]} imgFeel = {this.state.emojiis[5]["feel"]} />
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={12} md={12}>
                            <h1>{this.state.question}</h1>
                        </Col>
                        </Row>
                    </Grid>
                )
            case 7 :
                return (
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack ={this.state.emojiis[0]["img"]} imgFeel = {this.state.emojiis[0]["feel"]} />
                            </Col>
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[1]["img"]} imgFeel = {this.state.emojiis[1]["feel"]} />
                            </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[2]["img"]} imgFeel = {this.state.emojiis[2]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[3]["img"]} imgFeel = {this.state.emojiis[3]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[4]["img"]} imgFeel = {this.state.emojiis[4]["feel"]} />
                            </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[5]["img"]} imgFeel = {this.state.emojiis[5]["feel"]} />
                            </Col>
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[6]["img"]} imgFeel = {this.state.emojiis[6]["feel"]} />
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={12} md={12}>
                            <h1>{this.state.question}</h1>
                        </Col>
                        </Row>
                    </Grid>
                )

            case 8:
                return (
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack ={this.state.emojiis[0]["img"]} imgFeel = {this.state.emojiis[0]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[1]["img"]} imgFeel = {this.state.emojiis[1]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[2]["img"]} imgFeel = {this.state.emojiis[2]["feel"]} />
                            </Col>
                            </Row>
                        <Row className="show-grid">
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[3]["img"]} imgFeel = {this.state.emojiis[3]["feel"]} />
                            </Col>
                            <Col xs={6} md={6} >
                                <EmojiButton imgBack= {this.state.emojiis[4]["img"]} imgFeel = {this.state.emojiis[4]["feel"]} />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[5]["img"]} imgFeel = {this.state.emojiis[5]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[6]["img"]} imgFeel = {this.state.emojiis[6]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[7]["img"]} imgFeel = {this.state.emojiis[7]["feel"]} />
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={12} md={12}>
                            <h1>{this.state.question}</h1>
                        </Col>
                        </Row>
                    </Grid>
                )
            case 9 :
                return (
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack ={this.state.emojiis[0]["img"]} imgFeel = {this.state.emojiis[0]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[1]["img"]} imgFeel = {this.state.emojiis[1]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[2]["img"]} imgFeel = {this.state.emojiis[2]["feel"]} />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack ={this.state.emojiis[3]["img"]} imgFeel = {this.state.emojiis[3]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[4]["img"]} imgFeel = {this.state.emojiis[4]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[5]["img"]} imgFeel = {this.state.emojiis[5]["feel"]} />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[6]["img"]} imgFeel = {this.state.emojiis[6]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[7]["img"]} imgFeel = {this.state.emojiis[7]["feel"]} />
                            </Col>
                            <Col xs={4} md={4} >
                                <EmojiButton imgBack= {this.state.emojiis[8]["img"]} imgFeel = {this.state.emojiis[8]["feel"]} />
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={12} md={12}>
                            <h1>{this.state.question}</h1>
                        </Col>
                        </Row>
                    </Grid>
                )

        }




    }
}


export default App