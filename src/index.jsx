import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
export class App extends React.Component {

    render() {
        return (
            <div className="ui container comments">
                <CommentDetail author="Sam" timeAgo="Today at 6:00PM" />
                <CommentDetail author="Alex" timeAgo="Yesterday at 7:00PM" />
                <CommentDetail author="Jane" timeAgo="Tomorrow at 3:00PM" />
            </div>
        )

    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
