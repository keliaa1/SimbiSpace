export default function notfound() {
    return (
        <div className="bg-[#F7EEE9] min-h-screen flex flex-col items-center justify-center">
            <div>
            <h1 className="text-3xl text-[#A18072]">404</h1>
            <h2 className="text-black text-lg">Oops! Page not found, try again</h2></div>

            <div>
                <img src="../public/confused1.png" alt="" />
            </div>
        </div>
    );
}