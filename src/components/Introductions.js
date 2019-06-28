import React from "react";
import { API_INTRO_URL } from "../config";

export default class Introductions extends React.Component {
    state = {
        introductions: []
    };

    componentDidMount() {
        this.loadIntroductions();
    }

    loadIntroductions() {

        return fetch(API_INTRO_URL)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(intros => {
                this.setState({
                    introductions: intros
                });
            })
            .catch(err => {
                this.setState({
                    error: "Could not load intros",
                });
            });
    }

    render() {
        let rawIntros = [...this.state.introductions]
        console.log(rawIntros);
        return (
            <div>
                hi
            </div>
        )
    }
}
