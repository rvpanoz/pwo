//imports -
import React from 'react';
import {connect} from 'react-redux';

//router
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

//actions
import {toggleLoader, toggleMenu} from '../actions';

//constants
import {AUTH_PAGE, AUTH_LOGIN} from '../constants';

//components
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';

//components that should be rendered based on the requested route
import * as AppComponents from '../components';
import AuthPage from '../containers/Auth';

//app routes
import Routes from '../routes';

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this._navigate = this._navigate.bind(this);
    this._handleMenu = this._handleMenu.bind(this);
  }
  _shouldRedirect(nextPage) {
    let _nextPageUpper = nextPage.replace('/', '').toUpperCase();
    return (_nextPageUpper !== AUTH_PAGE);
  }
  /**
  Navigate to a known route
  **/
  _navigate(route, props) {
    const id_token = this.props.id_token;
    const {match} = props;

    let nextPage = match.url;
    let shouldRedirect = this._shouldRedirect(nextPage);

    if(!id_token && !shouldRedirect) {
      return <AuthPage action={AUTH_LOGIN}/>
    }

    try {
      let component = route.component || null;
      if(component && AppComponents[component]) {
        let RenderComponent = AppComponents[component];
        return <RenderComponent fromRoute={true} {...props}/>
      }
      throw new Error('Component not found');
    } catch(e) {
      throw new Error(e);
    }

  }
  _handleMenu(e) {
    const {hamb, wrapper} = this.refs;
    const open = this.props.menuIsOpen;
    let menuIsOpen = !this.props.menuIsOpen;

    if (open) {
      hamb.classList.remove('is-closed');
      hamb.classList.add('is-open');
      wrapper.classList.add('toggled');
      this.props.toggleMenu(menuIsOpen);
    } else {
      hamb.classList.remove('is-open');
      hamb.classList.add('is-closed');
      wrapper.classList.remove('toggled');
      this.props.toggleMenu(menuIsOpen);
    }
  }
  componentDidMount() {
    let hamb = this.refs.hamb, menuIsOpen = this.props.menuIsOpen;

    //handle menu
    if (hamb) {
      hamb.addEventListener('click', this._handleMenu);
      this._handleMenu(null, true);
    }
  }
  componentWillUnmount() {
    let hamb = this.refs.hamb;
    if (hamb) {
      hamb.removeEventListener('click', null);
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div id="wrapper" ref="wrapper">
          <nav className="navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            <Sidebar/>
            </nav>
            <div id="page-content-wrapper">
            <button type="button" className="hamburger is-closed animated fadeInLeft" data-toggle="offcanvas" ref="hamb">
              <span className="hamb-top"></span>
              <span className="hamb-middle"></span>
              <span className="hamb-bottom"></span>
            </button>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="page-content">
                    <Switch>
                    {
                      Routes.map((route, idx) => {
                        return <Route key={idx} path={route.path} exact={route.exact} render={(props)=>{
                          return this._navigate(route, props);
                        }}/>
                      })
                    }
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }

}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    menuIsOpen: state.menuIsOpen,
    id_token: state.id_token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleMenu: (bool) => {
      return dispatch(toggleMenu(bool));
    },
    toggleLoader: (bool) => {
      return dispatch(toggleLoader(bool));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
