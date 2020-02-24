import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

export class App extends React.Component {

    render() {
        return (
            <div className="ui container comments">
                <ApprovalCard>
                    <CommentDetail author="Sam" timeAgo="Today at 6:00PM" />
                </ApprovalCard>
               
               
            </div>
        )

    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
