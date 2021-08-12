import React from 'react'

const nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
                <div class="container-fluid">
                <a class="navbar-brand m4" href="#">Game View</a>

      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
                
                </div>
            </nav>
        </div>
    )
}

export default nav
