import img1 from '../assets/Img/playsotre.jpg'
import img2 from '../assets/Img/appsotre.jpg'
import gif from '../assets/Gif/mobile_bike-mOS0gbAl.gif'


const AppDownload = () => {
    return (
        <section className="w-full bg-[#1f2125] py-14">
            <div className="mx-auto w-full max-w-6xl px-4">
                <div className="grid grid-cols-1 items-center justify-items-center gap-8 sm:grid-cols-2">
                    <div data-aos="fade-up" data-aos-duration="300" className="mx-auto max-w-xl space-y-6 text-center">
                        <h2 className="text-2xl font-semibold text-white sm:text-4xl">
                            Foodly is Available for Android and IOS
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a href="#">
                                <img src={img1} alt="Descargar en Google Play" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                            </a>
                            <a href="#">
                                <img src={img2} alt="Descargar en App Store" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                            </a>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="300" className="mx-auto">
                        <img src={gif} alt="Vista previa de la aplicación Foodly" className="mx-auto w-full max-w-[300px]"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppDownload;