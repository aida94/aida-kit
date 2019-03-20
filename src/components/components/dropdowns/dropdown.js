import React, { Component } from 'react';
import './dropdowns.scss';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showMenu: false,
    };
    this.menuRef = React.createRef();

    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  handleShow() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  handleChange(e) {
    this.setState({ value: e.target.value.toLowerCase().trim() });
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickOutsideHandler(event) {
    if (this.state.showMenu && !this.menuRef.current.contains(event.target) && this.props.focus) {
      this.setState({ showMenu: false });
    } 
  }

  render() { 
    let menuElement = [
      'Action',
      'Input',
      'Button',
      'Delete',
    ];

    if (this.state.value.length > 0) {
      menuElement = menuElement.filter((i) => {
        return i.toLowerCase().match(this.state.value);
      });
    }

    const show = this.state.showMenu ? 'd-block' : '';
    const search = this.props.search ? '' : 'd-none';
    return (

      <div className={this.props.className} ref={this.menuRef}>
        <button className='btn btn-secondary dropdown-toggle' data-toggle='dropdown' onClick={this.handleShow} >
          {this.props.text}
        </button>
        <div className={`dropdown-menu ${show}`}>
            <input autoFocus className={`mx-3 my-2 w-auto ${search}`} placeholder='Type to filter...' onChange={this.handleChange} />
            {menuElement.map((elem, index) => (
                <div key={index} className='dropdown-item'>{elem}</div>
            ))}
        </div>
      </div>

    );
  }
}

export default Dropdown;
