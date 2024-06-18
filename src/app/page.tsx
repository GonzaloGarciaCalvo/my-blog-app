import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Constructora QWERTY</h1>
      <section>
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam at 
        eum excepturi nihil porro molestiae delectus sit earum qui, blanditiis explicabo 
        minus voluptatum illum eos laborum! Animi sapiente est nostrum a optio doloribus,
        nisi architecto aspernatur porro saepe ipsa eaque dicta at illum tempora repellat, 
        et rerum, deleniti veniam voluptate. Accusamus similique a quasi, quis amet fugit 
        provident rerum sint, tempora nemo sapiente voluptatem atque fuga necessitatibus 
        suscipit eius perferendis delectus! Reprehenderit, dignissimos. Voluptates excepturi 
        ab error laboriosam adipisci veniam praesentium atque saepe, voluptas mollitia officia
        qui dolores asperiores optio beatae cumque sed dolor sint corrupti itaque unde 
        voluptatibus?</p>
      </section>
      </main>
    </>
  );
}
