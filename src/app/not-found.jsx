import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>Sorry, this page does not exist</p>
      <Link href="/">RETURN</Link>
    </div>
  );
}

export default NotFound;
