import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import BasicForm from './components/forms/BasicForm';
import Page from './components/Page';
import WrappedForm from './components/forms/WrappedForm';
import BasicTables from './components/tables/BasicTables';
import AdvancedTables from './components/tables/AdvancedTables';
import AsynchronousTable from './components/tables/AsynchronousTable';
import Login from './components/pages/Login';
import Icons from './components/ui/Icons';
import Buttons from './components/ui/Buttons';
import Spins from './components/ui/Spins';
import Echarts from './components/charts/Echarts';
import Recharts from './components/charts/Recharts';
import Banners from './components/ui/banners';
import NotFound from './components/pages/NotFound';
import Modals from './components/ui/Modals';
import Notifications from './components/ui/Notifications';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path={'/'} component={Page}>
      <IndexRedirect to='/app/form/wrappedForm' />  {/* 默认路由 */}
      <Route path={'app'} component={App}>
        <Route path={'form'}>
          <Route path={'basicForm'} component={BasicForm}></Route>
          <Route path={'wrappedForm'} component={WrappedForm}></Route>
        </Route>
        <Route path={'table'}>
          <Route path={'basicTables'} component={BasicTables}></Route>
          <Route path={'advancedTables'} component={AdvancedTables}></Route>
          <Route path={'asynchronousTable'} component={AsynchronousTable}></Route>
        </Route>
        <Route path={'ui'}>
          <Route path={'icons'} component={Icons} />
          <Route path={'buttons'} component={Buttons} />
          <Route path={'spins'} component={Spins} />
          <Route path={'banners'} component={Banners} />
          <Route path={'modals'} component={Modals} />
          <Route path={'notifications'} component={Notifications} />
        </Route>
        <Route path={'chart'}>
          <Route path={'echarts'} component={Echarts} />
          <Route path={'recharts'} component={Recharts} />
        </Route>
      </Route>
      <Route path={'login'} components={Login} />
      <Route path={'404'} components={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);



