import React, { Component } from 'react';
import { Row, Col, Dropdown, Button, Menu, Icon, Table } from 'antd';
import { connect } from 'react-redux';

import '../stylesheet/profile.less';
import { profileAction, fetchProfileAction } from '../actions/ProfileActions';


class Inventory extends Component {
  state = {
    pageNo: 1
  }

  componentWillMount() {
    const { dispatch } = this.props;
    // dispatch(fetchProfileAction());
  }

  handleMenuClick = (e) => {
    this.setState({ [key]: value });
    this.setState({ pageNo: e.key });
  }

  render() {
    const pageNumberMenu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1</Menu.Item>
        <Menu.Item key="2">2</Menu.Item>
        <Menu.Item key="3">3</Menu.Item>
      </Menu>
    );

    const columns = [
      { title: 'Index', dataIndex: 'index', key: 'index', fixed: 'left' },
      { title: 'Title', dataIndex: 'name', key: 'name' },
      { title: 'Seller Sku', dataIndex: 'sellerSku', key: 'sellerSku' },
      { title: 'ASIN', dataIndex: 'asin', key: 'asin' },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        index: i,
        name: 'This is production name',
        sellerSku: `Seller SKU ${i}`,
        asin: `ASIN ${i}`
      });
    }

    return (
      <div>
        <Row>
          <Col span={18}></Col>
          <Col span={6}>
            <Dropdown overlay={pageNumberMenu}>
              <Button>
                Page <Icon type="down" />
              </Button>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={true}
             />
          </Col>
        </Row>
      </div>
    );
  }
}

// const ProfilePage = Form.create()(Inventory);

export default connect(
  state => ({
    inventory: state.inventory
  })
)(Inventory)
