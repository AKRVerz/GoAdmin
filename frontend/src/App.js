import React from "react";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagementUsers from "./components/pages/ManagementUsers/ManagementUsers";
import Signup from "./components/pages/ManagementUsers/SignUp";
import EditUser from "./components/pages/ManagementUsers/EditUser";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars"></i>
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </nav>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="#" className="brand-link">
            <span className="brand-text font-weight-light">AdminLTE</span>
          </a>
          <div className="sidebar">
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>Dashboard</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/management-users" className="nav-link">
                    <i className="nav-icon fas fa-users"></i>
                    <p>User Management</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <Routes>
                    <Route
                      path="/management-users"
                      element={<ManagementUsers />}
                    />
                    <Route
                      path="/management-users/sign-up"
                      element={<Signup />}
                    />
                    <Route
                      path="/management-users/edit/:id"
                      element={<EditUser />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;

