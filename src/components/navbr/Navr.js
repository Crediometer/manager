import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

export default function Navr () {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Crediometer</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Project</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Your Work
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Starred</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
        <li class="nav-item">
          <a class="nav-link disabled">
            <i class="far fa-bell"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">
            <i class="fas fa-cog"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">
            <i class="far fa-user"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}