import React from 'react';

import CardAnimal from '../component/cardAnimal';

const animalOne = {
  identificationCode: "RD0012",
  name: "Lola",
  gender: "female",
  birthDate: "Tue, 12 Dec 2023 00:00:00 GMT",
  imageUrl: "https://res.cloudinary.com/dnwfyqslx/image/upload/v1706385647/jddpb30yh9c6wovx07jh.jpg"
};

const AnimalList = () => {
  return (
    <div className='container d-flex flex-column my-4'>
      {/* Banner */}
      <div className='banner justify-content-center align-items-center bg-secondary rounded-3'>
        <h2>Banner</h2>
      </div>

      {/* Main */}
      <main className='d-flex w-100 my-4'>
        {/* LEFT PANEL */}
        <div className="offcanvas-md offcanvas-start animal-left-panel" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
          <div className="d-flex d-md-none justify-content-end bg-white position-relative z-3">
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
              className="btn-close position-absolute"
              style={{ top: "1rem", right: "1rem" }}
              aria-label="Close">
            </button>
          </div>

          <div className='d-flex flex-column bg-neutral-10' style={{ width: "280px", height: "700px" }}>
            <h3>Filtrar</h3>
          </div>
        </div>


        {/* RIGHT PANEL */}
        <div className="d-flex flex-column w-100 m-0 ms-md-2" >
          {/* Navbar */}
          <div className="d-flex flex-row-reverse flex-md-row justify-content-between align-items-end">
            <div className='d-flex align-items-end'>
              <button className="btn d-md-none p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                <i className="fa-solid fa-filter"></i> Filtrar
              </button>

              <p className='d-none d-md-flex fs-7 text-neutral-40 m-0'>X peluditos</p>
            </div>

            <nav className="d-flex justify-content-start justify-content-md-end flex-grow-1 fw-medium">
              <ul className="nav m-0 p-0">
                <li className="nav-item m-0 p-0">
                  <div className="dropdown">
                    <button className="btn btn-outline-primary rounded-4 dropdown-toggle fs-7" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "206px" }}>
                      Ordenar
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          {/* Cantidad de peluditos (visible en Mobile) */}
          <div className='d-flex d-md-none w-100 my-2'>
            <p className='fs-7 text-neutral-40 m-0'>X peluditos</p>
          </div>

          {/* Listado de cards */}
          <div className="d-flex flex-wrap justify-content-center align-items-start gap-3 gap-lg-4 my-4">
            {
              Array.from({ length: 12 }, (v, i) => i).map((card, index) => {
                return (
                  <CardAnimal key={index} animal={animalOne} />
                )
              })
            }
          </div>

          {/* Paginado */}
          <nav className='my-4'>
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <button className='page-link' onClick={() => { }}>Anterior</button>
              </li>
              <li className="page-item">
                <button className='page-link' onClick={() => { }}>1</button>
              </li>
              <li className="page-item">
                <button className='page-link' onClick={() => { }}>2</button>
              </li>
              <li className="page-item">
                <button className='page-link' onClick={() => { }}>3</button>
              </li>
              <li className="page-item">
                <button className='page-link' onClick={() => { }}>Siguiente</button>
              </li>
            </ul>
          </nav>
        </div>

      </main>
    </div>
  )
}

export default AnimalList;