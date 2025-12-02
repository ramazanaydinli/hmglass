export default function About() {
    return (
        <div className="bg-white py-24 sm:py-32" id="about">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-hm-orange">Kurumsal</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-hm-dark sm:text-4xl">
                        Hakkımızda
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        HM Glass olarak yılların verdiği tecrübe ile yaşam alanlarınıza değer katıyoruz.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">

                        {/* Hakkımızda */}
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-hm-dark sm:text-3xl mb-6">Biz Kimiz?</h3>
                            <p className="text-base leading-7 text-gray-600">
                                HM Glass, Antalya ve çevresinde cam balkon, PVC doğrama, alüminyum sistemleri ve anahtar teslim tadilat hizmetleri sunan köklü bir firmadır.
                                Kurulduğumuz günden bu yana müşteri memnuniyetini en üst seviyede tutarak, kaliteli malzeme ve usta işçiliği bir araya getiriyoruz.
                            </p>
                            <p className="mt-4 text-base leading-7 text-gray-600">
                                Sektördeki yenilikleri yakından takip ediyor, eviniz ve iş yeriniz için en modern ve fonksiyonel çözümleri üretiyoruz.
                                Shuco teknik servis hizmetimizle de dünya standartlarında kaliteyi sizlere sunuyoruz.
                            </p>
                        </div>

                        {/* Misyon & Vizyon */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold tracking-tight text-hm-orange mb-3">Misyonumuz</h3>
                                <p className="text-base leading-7 text-gray-600">
                                    Müşterilerimizin ihtiyaçlarına en uygun, estetik, dayanıklı ve ekonomik çözümler sunarak yaşam kalitelerini artırmak.
                                    Güvenilir, dürüst ve şeffaf hizmet anlayışımızla sektörde örnek bir marka olmak.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold tracking-tight text-hm-orange mb-3">Vizyonumuz</h3>
                                <p className="text-base leading-7 text-gray-600">
                                    Bölgemizde yapı ve dekorasyon sektörünün lider firması olmak; teknolojik gelişmeleri iş süreçlerimize entegre ederek sürdürülebilir büyüme sağlamak.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Neden Biz? */}
                    <div className="mt-16 sm:mt-24">
                        <h3 className="text-2xl font-bold tracking-tight text-hm-dark sm:text-3xl mb-8 text-center">Neden HM Glass?</h3>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <dt className="text-lg font-semibold leading-7 text-hm-dark">Uzman Kadro</dt>
                                <dd className="mt-1 text-base leading-7 text-gray-600">Alanında deneyimli ve sertifikalı ustalarımızla hatasız işçilik.</dd>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <dt className="text-lg font-semibold leading-7 text-hm-dark">Kaliteli Malzeme</dt>
                                <dd className="mt-1 text-base leading-7 text-gray-600">Uzun ömürlü kullanım için sadece birinci sınıf malzemeler.</dd>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <dt className="text-lg font-semibold leading-7 text-hm-dark">Zamanında Teslimat</dt>
                                <dd className="mt-1 text-base leading-7 text-gray-600">Projelerinizi söz verdiğimiz tarihte eksiksiz teslim ediyoruz.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
