const services = [
    { title: "Cam Balkon", description: "Modern ve estetik cam balkon sistemleri." },
    { title: "PVC Doğrama", description: "Isı ve ses yalıtımlı PVC pencere ve kapı sistemleri." },
    { title: "Alüminyum Doğrama", description: "Dayanıklı ve şık alüminyum doğrama çözümleri." },
    { title: "Panjur Sistemleri", description: "Otomatik ve manuel panjur sistemleri." },
    { title: "Sineklik", description: "Her türlü pencere ve kapıya uygun sineklik modelleri." },
    { title: "Duşa Kabin", description: "Özel ölçü ve tasarım duşakabinler." },
    { title: "Çelik Kapı", description: "Yüksek güvenlikli ve estetik çelik kapılar." },
    { title: "Mutfak & Banyo Dolabı", description: "Fonksiyonel ve modern dolap tasarımları." },
    { title: "Tadilat & Dekorasyon", description: "Anahtar teslim A'dan Z'ye tadilat hizmetleri." },
    { title: "Laminant Parke", description: "Kaliteli ve uzun ömürlü zemin kaplamaları." },
    { title: "Demir Doğrama", description: "Sağlam ve güvenli demir doğrama işleri." },
    { title: "Ayna & Dekor", description: "Dekoratif ayna ve cam uygulamaları." },
];

export default function Services() {
    return (
        <div className="bg-hm-light py-24 sm:py-32" id="services">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-hm-orange">Hizmetlerimiz</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-hm-dark sm:text-4xl">
                        Profesyonel Çözümler
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Evinizin ve iş yerinizin ihtiyacı olan tüm yapı ve dekorasyon hizmetlerini tek bir çatı altında sunuyoruz.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {services.map((service) => (
                            <div key={service.title} className="flex flex-col bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-hm-dark">
                                    {/* İkon alanı - Şimdilik basit bir nokta veya SVG eklenebilir */}
                                    <div className="h-2 w-2 rounded-full bg-hm-orange" />
                                    {service.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{service.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
