export default function Contact() {
    return (
        <div className="bg-white py-24 sm:py-32" id="contact">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-hm-orange">İletişim</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-hm-dark sm:text-4xl">
                        Bize Ulaşın
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Projeleriniz ve sorularınız için bizimle iletişime geçin.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">

                        {/* İletişim Bilgileri */}
                        <div>
                            <div className="space-y-8">
                                <div className="flex gap-x-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-hm-orange">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold leading-7 text-hm-dark">Adres</h4>
                                        <p className="mt-2 leading-7 text-gray-600">
                                            Şafak, 4261. Sk. No : 4/15<br />
                                            07100 Kepez/Antalya
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-x-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-hm-orange">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold leading-7 text-hm-dark">Telefon</h4>
                                        <p className="mt-2 leading-7 text-gray-600">
                                            <a href="tel:+905421901757" className="hover:text-hm-orange transition-colors">
                                                +90 542 190 17 57
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Harita */}
                        <div className="h-[450px] w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d199.3814082564065!2d30.645056085127493!3d36.911812834534835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1764671922442!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
