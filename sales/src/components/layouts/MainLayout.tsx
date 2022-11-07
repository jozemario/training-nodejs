import React, { Fragment } from 'react';
import { Router, Outlet } from 'react-location';

import { routes, location } from '../../router';

export default function MainLayout() {
    return (
        <Router routes={routes} location={location}>
            <Outlet />
        </Router>
    );
}
