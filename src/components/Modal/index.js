import React, { Component } from 'react';
import CraetePortal from '../CreatePortal';
import { Icon } from 'antd-mobile';
const Styles = {
  modal: {
    position: 'relative',
    top: '0',
    left: '0',
    zIndex: '999',
  },
  body: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  },
};

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClose = () => {
    const { onClose } = this.props;
    onClose && onClose();
  };

  render() {
    const { show } = this.props;
    return (
      <>
        {show ? (
          <CraetePortal style={Styles.modal}>
            <div style={Styles.body}>
              {this.props.children}
              <Icon
                type="cross"
                size="lg"
                style={Styles.close}
                onClick={this.handleClose}
              />
            </div>
          </CraetePortal>
        ) : null}
      </>
    );
  }
}
