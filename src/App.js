import './App.css';
import SideNavBar from './components/SideNavBar';

function App() {
  return (
    <div className="">
      <div className='position-absolute bottom-50 end-50 '>
        <h1>Dashboard</h1>
        {/* onClick Button to open a side drawer */}
        <button className="btn btn-primary mt-3 mx-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Open Drawer</button>

      </div>
      {/* Side Drawer */}
      <div className="offcanvas offcanvas-start w-50" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">SideNavBar</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {/* Side Nav Componet*/}
          <SideNavBar />

        </div>
      </div>

    </div>
  );
}

export default App;
