export const TopBar = () => {
  return (
    <div className="w-full h-11 bg-black flex justify-center">
        <div className="w-full lg:w-9/12 flex justify-between">
            <div className="hidden lg:flex lg:gap-8 ">
                <picture>
                    <img src="https://www.fullh4rd.com.ar/img/nav_logitech.png" alt="" />
                </picture>
                <picture>
                    <img src="https://www.fullh4rd.com.ar/img/nav_corsair.png" alt="" />
                </picture>
                <picture>
                    <img src="https://www.fullh4rd.com.ar/img/nav_geforce.png" alt="" />
                </picture>
                <picture>
                    <img src="https://www.fullh4rd.com.ar/img/nav_amd.png" alt="" />
                </picture>
                <picture>
                    <img src="https://www.fullh4rd.com.ar/img/nav_intel.png" alt="" />
                </picture>
                <picture>
                    <img src="https://www.fullh4rd.com.ar/img/nav_trust.png" alt="" />
                </picture>
                <picture>
                    <img src="https://www.seagate.com/ww/redesign/assets/seagate-logo-text.svg" alt="" />
                </picture>
            </div>
            <div className="w-full lg:w-auto flex justify-evenly lg:justify-center items-center text-gray-300 text-xs lg:text-sm gap-6">
                <h4>📞(221) 458-7589</h4>
                <a href="">✉ gamingup@gmail.com</a>
                <h4>📍 La Plata</h4>
            </div>
        </div>
        
        
    </div>
  )
}
