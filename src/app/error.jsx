"use client";

import { Button } from "@/components/ui/button";

function Error({ error, reset }) {
  return (
    <div>
      <h1>Error 😶</h1>
      <p>Something went wrong</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}

export default Error;
// moze da dobije da parametra error,reset
