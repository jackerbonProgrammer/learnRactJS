var Comment = React.createClass({
  render: function() {
    return (
      <div>
        <h2>
          {this.props.author} ~ {this.props.test}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt" test="good">This is one comment</Comment>
        <Comment author="Jordan Walke" test="qqqq">This is *another* comment</Comment>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentList />,
  document.getElementById('content')
);