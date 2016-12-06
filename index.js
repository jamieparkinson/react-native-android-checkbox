'use strict';

import React, {Component, PropTypes} from 'react';

import {
  View,
  StyleSheet,
  requireNativeComponent,
} from 'react-native';

class Checkbox extends Component {
  constructor() {
    super();

    this._checkboxComponent = {};

    this._onChange = (event) => {
      this.props.onValueChange && this.props.onValueChange(event.nativeEvent.value);
    }
  }

  render() {
    return (
      <View style={this.props.style}>
        <CheckboxComponent
          {...this.props}
          style={styles.checkbox}
          ref={(ref) => { this._checkboxComponent = ref; }}
          on={this.props.value}
          disabled={this.props.disabled}
          onChange={this._onChange}
        />
      </View>
    );
  }
}

Checkbox.propTypes = {
  ...View.propTypes,

  /**
   * is the checkbox checked. Default false
   */
  value: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
};

Checkbox.defaultProps = {
  value: false,
  disabled: false,
};

var styles = StyleSheet.create({
  checkbox: {
    height: 32,
    width: 32,
  },
});

var CheckboxComponent = requireNativeComponent('Checkbox', Checkbox, {
  nativeOnly: { onChange: true, on: true }
});

module.exports = Checkbox;
