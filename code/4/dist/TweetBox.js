"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var postTweet = function postTweet(tweet) {
  console.log(tweet);
};

var TweetBox = function (_React$Component) {
  _inherits(TweetBox, _React$Component);

  function TweetBox(props) {
    _classCallCheck(this, TweetBox);

    var _this = _possibleConstructorReturn(this, (TweetBox.__proto__ || Object.getPrototypeOf(TweetBox)).call(this, props));

    _this.state = {
      value: ""
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(TweetBox, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      postTweet(this.state.value);
      this.setState({
        value: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var placeholder = this.props.placeholder;


      return React.createElement(
        "div",
        null,
        React.createElement("textarea", { placeholder: placeholder, value: this.state.value, rows: "5", cols: "60", onChange: this.handleChange }),
        React.createElement(
          "div",
          null,
          React.createElement(
            "span",
            null,
            this.state.value.length
          ),
          React.createElement("input", { type: "button", value: "Tweet", onClick: this.handleSubmit })
        )
      );
    }
  }]);

  return TweetBox;
}(React.Component);

;

/*

*/