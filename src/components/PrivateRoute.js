import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */

export default function PrivateRoute({
  // isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isAuthenticated = useSelector(authSelectors.getAuthentificated);
  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

// const PrivateRoute = ({
//   component: Component,
//   isAuthenticated,
//   redirectTo,
//   children,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={props =>
//       isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
//     }
//   />
// );

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getAuthentificated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute)
