import React, { Component } from 'react';
import './tables.scss';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [{
  id: 1,
  name: 'Product1',
  price: 120,
  active: true,
  quality: '0',
}, {
  id: 2,
  name: 'Product2',
  price: 80,
  active: true,
  quality: '1',
}, {
  id: 3,
  name: 'Product3',
  price: 120,
  active: false,
  quality: '0',
}, {
  id: 4,
  name: 'Product4',
  price: 80,
  active: false,
  quality: '1',
}, {
  id: 5,
  name: 'Product5',
  price: 120,
  active: true,
  quality: '2',
}, {
  id: 6,
  name: 'Product6',
  price: 80,
  active: false,
  quality: '0',
},
];

const qualityType = {
  0: 'good',
  1: 'Bad',
  2: 'unknown',
};

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  selected: [],
  unselectable: [2],
  bgColor: '#dee2e6',
};

const cellEditProp = {
  mode: 'dbclick',
};

const satisfaction = [0, 1, 2, 3, 4, 5];

class Tables extends Component {
  constructor(props) {
    super(props);

    this.options = {
      noDataText: 'This is custom text for empty data',
      defaultSortName: 'id',  
      defaultSortOrder: 'asc',
      clearSearch: true,
    };

    this.getCaret = this.getCaret.bind(this);
    this.priceFormatter = this.priceFormatter.bind(this);
    this.activeFormatter = this.activeFormatter.bind(this);
    this.enumFormatter = this.enumFormatter.bind(this);
  }

  getCaret(direction) {
    if (direction === 'asc') {
      return (
        <span> up</span>
      );
    }
    if (direction === 'desc') {
      return (
        <span> down</span>
      );
    }
    return (
      <span> up/down</span>
    );
  }

  priceFormatter(cell, row) {
    return `$ ${cell}`;
  }

  activeFormatter(cell, row) {
    return (
      <input type='checkbox' checked={ cell }/>
    );
  }

  enumFormatter(cell, row, enumObject) {
    return enumObject[cell];
  }

  handlerClickCleanFiltered() {
    this.refs.name.cleanFiltered();
    this.refs.price.cleanFiltered();
    this.refs.quality.cleanFiltered();
  }

  render() {
    return (
      <div className='' id='tables'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Tables</h3>
          <p>Use this elements, if you want to show some hints or additional primaryrmation</p>

          <div className='row'>
            <div className='col-md-12 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Default Tables</p>

                {/* <a className='btn btn-primary' onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>clear filters</a> */}
                  <BootstrapTable ref='table' data={products} options={this.options} pagination striped hover condensed selectRow={ selectRowProp } insertRow deleteRow exportCSV search={ true } cellEdit={ cellEditProp } keyBoardNav>
                    <TableHeaderColumn isKey dataField='id' dataSort>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' ref='name' dataSort caretRender={ this.getCaret } filter={ { type: 'TextFilter', delay: 800 } }>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price' ref='price' dataAlign='center' headerAlign='left' dataFormat={ this.priceFormatter } filter={{ type: 'NumberFilter', delay: 1000, options: satisfaction }}>Product Price</TableHeaderColumn>
                    <TableHeaderColumn dataField='quality' ref='quality' filterFormatted dataFormat={ this.enumFormatter } formatExtraData={ qualityType } filter={ { type: 'SelectFilter', options: qualityType } } >Product Quality</TableHeaderColumn>
                    <TableHeaderColumn dataField='active' dataFormat={ this.activeFormatter }>Active</TableHeaderColumn>
                  </BootstrapTable>

              </div>
            </div>
          </div>
        </section>
      </div>   
    );
  }
}

export default Tables;
