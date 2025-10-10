// Loader.tsx
const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen space-x-2">
            <span className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-75"></span>
            <span className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-150"></span>
            <span className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-300"></span>
        </div>
    );
};

export default Loader;
