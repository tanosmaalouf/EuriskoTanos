import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {Switch, Route, Redirect} from 'react-router'





// /* PAGES */
// const Dashboard = lazy(() => import('../../pages/dashboard/Dashboard'))




class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    //dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
  }

  render() {
    return (
      <div>
        <div >
            <main >
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="fade"
                  timeout={200}
                >
                  <div>
                    <Switch>
                      <Route
                        path="/dashboard"
                        exact
                        render={() => <Redirect to="/dashboard" />}
                      />

                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
              <footer >
                Euriko - Dashboard
              </footer>
            </main>
          {/* </Hammer> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  sidebarOpened: state.navigationReducer.sidebarOpened,
  sidebarPosition: state.navigationReducer.sidebarPosition,
  sidebarVisibility: state.navigationReducer.sidebarVisibility,
})

export default connect(mapStateToProps)(Layout)
