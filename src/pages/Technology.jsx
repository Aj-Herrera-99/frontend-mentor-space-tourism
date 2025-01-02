import React from 'react'
import Main from '../components/Main';
import { Outlet } from 'react-router-dom';

function Technology() {
  return (
      <Main classes="font-light tracking-widest uppercase">
          <div className="flex justify-center gap-3">
              <span className="font-bold">03</span>
              <span>space launch 101</span>
          </div>
          <Outlet />
      </Main>
  );
}

export default Technology