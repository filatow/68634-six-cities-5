import React, {PureComponent} from "react";
// import PropTypes from "prop-types";

// import {Validation} from "../../validation";

const withControlledFields = (Component) => {

  class WithControlledFields extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleFieldChange = this._handleFieldChange.bind(this);
    }

    _handleFieldChange(event) {
      const {name, value} = event.target;
      this.setState({[name]: value});
    }

    _handleSubmit(event, formRef) {
      event.preventDefault();

      const formData = new FormData(formRef.current);
      console.log(
          `Данные формы:
          rating - ${formData.get(`rating`)}
          review - ${formData.get(`review`)}`
      );
    }


    render() {
      return (
        <Component
          // {...this.props}
          rating={this.state.rating}
          review={this.state.review}
          onChange={this._handleFieldChange}
          onSubmit={this._handleSubmit}
        />
      );
    }

  }

  // WithControlledFields.propTypes = {

  // };

  return WithControlledFields;
};

export default withControlledFields;
