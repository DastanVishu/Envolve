import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

class Sidebar extends Component {
    state = {};
  
    toggleMenuState(menuState) {
      if (this.state[menuState]) {
        this.setState({[menuState] : false});
      } else if(Object.keys(this.state).length === 0) {
        this.setState({[menuState] : true});
      } else {
        Object.keys(this.state).forEach(i => {
          this.setState({[i]: false});
        });
        this.setState({[menuState] : true});
      }
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.onRouteChanged();
      }
    }
  
    onRouteChanged() {
      document.querySelector('#sidebar').classList.remove('active');
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
  
      const dropdownPaths = [
        {path:'/apps', state: 'appsMenuOpen'},
        {path:'/basic-ui', state: 'basicUiMenuOpen'},
        {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
        {path:'/form-elements', state: 'formElementsMenuOpen'},
        {path:'/tables', state: 'tablesMenuOpen'},
        {path:'/maps', state: 'mapsMenuOpen'},
        {path:'/icons', state: 'iconsMenuOpen'},
        {path:'/charts', state: 'chartsMenuOpen'},
        {path:'/user-pages', state: 'userPagesMenuOpen'},
        {path:'/error-pages', state: 'errorPagesMenuOpen'},
        {path:'/general-pages', state: 'generalPagesMenuOpen'},
        {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
      ];
  
      dropdownPaths.forEach((obj => {
        if (this.isPathActive(obj.path)) {
          this.setState({[obj.state] : true})
        }
      }));
   
    } 
    render () {
      return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            
            <li className="nav-item nav-category">Main</li>
            <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/dashboard">
                <span className="icon-bg"><i className="mdi mdi-cube menu-icon"></i></span>
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>
            
            <li className="nav-item nav-category">Add New</li>
            <li className={ this.isPathActive('/add-new') ? 'nav-item active' : 'nav-item' }>
              <div className={ this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('formElementsMenuOpen') } data-toggle="collapse">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title">School / Admin</span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={ this.state.formElementsMenuOpen }>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/add-new/AddSchool') ? 'nav-link active' : 'nav-link' } to="/add-new/AddSchool">Add School</Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/add-new/AddAdmin') ? 'nav-link active' : 'nav-link' } to="/add-new/AddAdmin">Add Admin</Link></li>
                </ul>
              </Collapse>
            </li>
            

            {/* <li className="nav-item sidebar-user-actions">
              <div className="sidebar-user-menu">
                <a href="!#" onClick={event => event.preventDefault()} className="nav-link"><i className="mdi mdi-settings menu-icon"></i>
                  <span className="menu-title">Settings</span>
                </a>
              </div>
            </li> */}

            {/* <li className="nav-item sidebar-user-actions">
              <div className="sidebar-user-menu">
                <a href="!#" onClick={event => event.preventDefault()} className="nav-link"><i className="mdi mdi-logout menu-icon"></i>
                  <span className="menu-title">Log Out</span></a>
              </div>
            </li> */}
          </ul>
        </nav>
      );
    }
  
    isPathActive(path) {
      return this.props.location.pathname.startsWith(path);
    }
  
    componentDidMount() {
      this.onRouteChanged();
      // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
      const body = document.querySelector('body');
      document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
        
        el.addEventListener('mouseover', function() {
          if(body.classList.contains('sidebar-icon-only')) {
            el.classList.add('hover-open');
          }
        });
        el.addEventListener('mouseout', function() {
          if(body.classList.contains('sidebar-icon-only')) {
            el.classList.remove('hover-open');
          }
        });
      });
    }
  
  }

  export default withRouter(Sidebar);