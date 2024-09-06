import playStore from "../assets/play-store.png";
import appStore from "../assets/app-store.png";
import "../index.css";

function Footer() {
  return (
    <div className="mt-10">
      <div className="bg-[#37022a] text-white py-10 font-sans">
        <div className="max-w-[1200px] mx-auto px-[25px]">
          <div className="flex flex-wrap justify-between">
            <div className="flex-basis-[25%] min-w-[200px] mb-[20px]">
              <h3 className="text-[18px] mb-[15px]">Download Our App</h3>
              <p className="text-[14px] leading-[24px]">
                Download App for Android and iOS.
              </p>
              <div>
                <img
                  src={playStore}
                  alt="Play Store"
                  className="w-32 h-auto mt-2 mr-[10px]"
                />
                <img
                  src={appStore}
                  alt="App Store"
                  className="w-32 h-auto mt-2 mr-[10px]"
                />
              </div>
            </div>
            <div className="flex-basis-[25%] min-w-[200px] mb-[20px]">
              <img src="" alt="Logo" />
            </div>
            <div className="footer-col-3 flex-basis-[25%] min-w-[200px] mb-[20px]">
              <h3 className="text-[18px] mb-[15px]">Useful Links</h3>
              <ul>
                <li className="text-[14px] leading-[24px] cursor-pointer hover:text-[#ff523b]">
                  Coupons
                </li>
                <li className="text-[14px] leading-[24px] cursor-pointer hover:text-[#ff523b]">
                  Blog Post
                </li>
                <li className="text-[14px] leading-[24px] cursor-pointer hover:text-[#ff523b]">
                  Return Policy
                </li>
                <li className="text-[14px] leading-[24px] cursor-pointer hover:text-[#ff523b]">
                  Join Affiliate
                </li>
              </ul>
            </div>
            <div className="footer-col-4 flex-basis-[25%] min-w-[200px] mb-[20px] gap-4">
              <h3 className="text-[18px] mb-[15px]">Follow Us</h3>
              <ul>
                <li className="mb-[10px] text-[14px] leading-[24px] cursor-pointer hover:text-[#ff523b]">
                  Facebook
                </li>
                <li className="mb-[10px] text-[14px] leading-[24px] cursor-pointer hover:text-[#ff523b]">
                  Twitter
                </li>
                <li className="mb-[10px] text-[14px] leading-[24px] cursor-pointer hover:text-[#ff523b]">
                  Instagram
                </li>
                <li className="mb-[10px] text-[14px] leading-[24px] cursor-pointer hover:text-[#ff523b]">
                  Join Affiliate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
