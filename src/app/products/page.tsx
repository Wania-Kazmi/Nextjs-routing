import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello from Product Page!!
      <br />
      <Link href="/products/t-shirt">T-shirt Category</Link>
      <br />
      <Link href="/products/dress-shirt">Dress shirt Category</Link>
      <br />
      <Link href="/products/pant">Pants category</Link>
      <br />
      <Link href="/products/kurta">Kurta category</Link>
      <br />
      You can also create a dynamic page by entering this URL in the browser:
      http://localhost:3000/xyz
    </div>
  );
}
