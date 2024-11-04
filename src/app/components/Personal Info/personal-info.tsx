export default function Personalinfo() {
    return (
        <div className="items-center">

            {/* Name */}
            <div className="mx-auto w-4/5 bg-green-50 text-center py-4">
                <h1 className="text-black font-black text-7xl">Burair Ahmed</h1>
            </div>

            {/* Contact Info */}
            <div className="mx-auto w-4/5 text-center py-2">
            <ul className="flex flex-inline justify-center space-x-6 text-xl font-bold divide-x divide-black">
                <li>
                    +92 307 7136555     
                </li>
                <li>
                    dev.burairahmed@gmail.com
                </li>
                <li>
                    github.com/burair-ahmed
                </li>
                <li>
                    burairahmed.com
                </li>
            </ul>
            </div>
        </div>
    );
}
