import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Enrollments from '../pages/Enrollments';
import HelpOders from '../pages/HelpOders';
import Plans from '../pages/Plans';
import Students from '../pages/Students';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/enrollments" component={Enrollments} isPrivate />
      <Route path="/helpoders" component={HelpOders} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
    </Switch>
  );
}
