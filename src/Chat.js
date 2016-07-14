var React = require('react');
var io = require('socket.io-client');

var socket = io();

var Chat = React.createClass({
  getInitialState: function() {
    return {messages: [], message: ''};
  },
  addMessage: function(message) {
    var messages = this.state.messages;
    messages.push(message);
    this.setState({messages: messages});
  },
  componentDidMount: function() {
    var self = this;
    socket.on('chat message', function(msg){
      self.addMessage(msg);
    });
  },
  handleChange: function(event) {
    this.setState({message: event.target.value});
  },
  handleClick: function(event) {
    socket.emit('chat message', this.state.message);
    this.setState({message: ''});
  },
  render: function() {
    return (
      <div className="chat">
        <ul> {
          this.state.messages.map(function(message, index) {
             return <li key={index}>{message}</li>
         })}
        </ul>
        <div className="input-container">
          <input
            type="text"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <button
            onClick={this.handleClick}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
});

module.exports = Chat;