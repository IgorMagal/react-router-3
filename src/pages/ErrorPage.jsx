import React from "react";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <h1>An error ocurred!</h1>
        <p>Could not find the page you requested.</p>
      </main>
    </>
  );
};

export default ErrorPage;
