import homeImage from "./assets/home.jpg";
import { Login } from "./components/login";
export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${homeImage})`,
      }}
      className="grid h-screen place-items-center bg-cover text-background opacity-90">
      <div className="grid grid-cols-2 grid-rows-1 gap-x-80">
        <p className="bg-white bg-opacity-30 place-self-center text-black text-5xl font-bold p-4 rounded-lg">
          Royal Garden Hotel
        </p>
        <Login />
      </div>
    </div>
  );
}
