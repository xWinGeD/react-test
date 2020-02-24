import React from 'react';
import faker from 'faker';

export default class CommentDetail extends React.Component {

    render() {
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {this.props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{this.props.timeAgo}</span>
                    </div>
                    <div className="text">Nice blog post</div>
                </div>
            </div>
        )
    }
}

