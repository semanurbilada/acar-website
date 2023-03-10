import InfoSection from "../components/InfoSection";

export default function Home() {
    return(
        <div>
            {/* swiper ;
            <h1>Demir Çelik Sektörünün en köklülerinden !!!</h1>
            */}

            <section className="container">
                <InfoSection 
                    image="/services.jpg" size={800}
                    servicesTitle="HİZMETLERİMİZ"
                    servicesSecondTitle="Demir Çelik Ürünleri Pazarlama"
                    servicesInfo1="Firma olarak, birçok sanayi kolundan üretim artığı olan geri dönüşüm malzemelerini satın alıp bunları işleyerek tekrardan sanayiye kazandırmaktayız."
                    servicesInfo2="Sac, çeşitli boylarda profil boruları ve daha fazlası..."
                    button="Ürünlerimiz"
                />
            </section>
        </div>
    );
}