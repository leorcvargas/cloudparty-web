import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

import * as S from "./Home.styles";

function Home() {
  const location = useLocation();

  const routes = useMemo(() => {
    return [
      { to: "/", name: "Home" },
      { to: "/create", name: "Create server" },
    ];
  }, []);

  return (
    <S.HomePage>
      <S.HomeHeader>
        <S.HomeTitle>CloudParty</S.HomeTitle>

        <S.HomeNav>
          {routes.map((route) => (
            <S.HomeNavLink
              active={location.pathname === route.to ? 1 : 0}
              key={route.to}
              to={route.to}
            >
              {route.name}
            </S.HomeNavLink>
          ))}
        </S.HomeNav>
      </S.HomeHeader>

      <S.HomeMain>
        <Outlet />
      </S.HomeMain>
    </S.HomePage>
  );
}

export default Home;
