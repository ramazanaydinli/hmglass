import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-hm-dark py-24 sm:py-32">
            {/* Background Pattern/Image Placeholder */}
            <div className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Eviniz İçin <span className="text-hm-orange">Mükemmel</span> Çözümler
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        H&M Glass güvencesiyle cam balkon, PVC doğrama, panjur ve anahtar teslim tadilat hizmetleri.
                        Kaliteli işçilik ve profesyonel teknik servis.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link
                            href="/contact"
                            className="rounded-md bg-hm-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-orange transition-colors"
                        >
                            Hemen Teklif Al
                        </Link>
                        <Link href="/services" className="text-sm font-semibold leading-6 text-white hover:text-hm-orange transition-colors">
                            Hizmetlerimizi İnceleyin <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
