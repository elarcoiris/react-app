import axios from 'axios';
import React, {Component} from 'react';
import SingleSide from './SingleSide';
import Error from './Error';

class SideNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
            error: false
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=e3fbb68dec9e4a7c9e23205720cbb3b9`
        // axios.post(url, {
        //     data: {
        //         news: {
        //             title: 'djflksajdas',
        //             description: 'jfsdjasd'
        //         }
        //     }
        // })
        
        axios.get(url)
            .then((response) => {
                this.setState({
                    sidenews: response.data.articles
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            });
    }
    renderItems() {
        if (!this.state.error) {
            return this.state.sidenews.map((item) => (
                <SingleSide key={item.url} item={item} />
            ));
        }
        else {
            return <Error />
        }
    }
    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default SideNews;