import React from 'react';
import { Button, Row, Col, Typography } from 'antd';

import './Landing.scss';

export class Landing extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { signIn } = this.props;

    return (
      <div className="page">
        <Row>
          <Col xs={24} className="landing">
            <Typography.Title level={2}>My Auth</Typography.Title>
            <Typography.Title level={4}>
              My Personal Privacy 2FA Token Manager
            </Typography.Title>
            <Button size="large" type="primary" onClick={signIn.bind(this)}>
              Sign In with Blockstack
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={12}>
            <img src="/images/why.png" alt="" />
          </Col>
          <Col xs={24} sm={12} className="content-container">
            <Typography.Title level={1}>Why 2FA?</Typography.Title>
            <Typography.Title level={4}>
              Relying on just usernames and passwords to secure your online accounts is no longer considered safe. Protect yourself by enabling two-factor authentication (2FA). This blocks anyone using your stolen data by verifying your identity through your device.
            </Typography.Title>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={12} className="content-container">
            <Typography.Title level={1}>Secure</Typography.Title>
            <Typography.Title level={4}>
              My Auth is secured by Blockstack's security promise. Blockstack ID provides user-controlled login and storage that enable you to take back control of your identity and data. Your data is stored on your private data lockers with blockchain-based security and encryption.
            </Typography.Title>
            <a href="https://blockstack.org/try-blockstack" className="link" rel="noopener">
              <Typography.Title level={4}>Learn More</Typography.Title>
            </a>
          </Col>
          <Col xs={24} sm={12}>
            <img src="/images/secure.png" alt="" />
          </Col>
        </Row>
        {/* <Row>
          <Col xs={24} sm={12}>
            <img src="/images/available.png" alt="" />
          </Col>
          <Col xs={24} sm={12} className="content-container">
            <Typography.Title level={1}>Always Available</Typography.Title>
            <Typography.Title level={4}>
              My Auth is always available, even when you're offline. Your 2FA tokens are stored on your device and updated when you go online. Never get locked out just because you have no connection.
            </Typography.Title>
          </Col>
        </Row> */}
        <Row>
          <Col xs={24} sm={12}>
            <img src="/images/lost.png" alt="" />
          </Col>
          <Col xs={24} sm={12} className="content-container">
            <Typography.Title level={1}>Access Your Content Anywhere</Typography.Title>
            <Typography.Title level={4}>
              My Auth is available on all your devices. It can be your laptop, your phone, even your game console or your TV! All your 2FA tokens sync across devices and are always available for use.
            </Typography.Title>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Landing;
