import ListComponent from "./components/ListComponents";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white/20 backdrop-blur-xl shadow-2xl p-8 rounded-3xl">
        <h1 className="text-4xl font-bold text-white text-center mb-6 drop-shadow-lg">
          ✨ Todo Manager
        </h1>
        <ListComponent />
      </div>
    </div>
  );
}
