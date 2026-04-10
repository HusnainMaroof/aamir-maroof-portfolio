"use client";

import React, { useEffect } from "react";

const Redirect = () => {
  useEffect(() => {
    window.location.href = "/project/Acemoneytransfer";
  }, []);
  return (
    <div className="w-full h-full flex items-center justify-center">
      Loading
    </div>
  );
};

export default Redirect;
