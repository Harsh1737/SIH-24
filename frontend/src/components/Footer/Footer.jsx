import images from "../../assets";
const { playStore, appStore } = images;
import FooterDiv from "./FooterDiv";
import Logo from "../Logo";
import FooterLink from "./FooterLink";

function Footer() {
  return (
    <div className="mt-10">
      <div className="bg-[#37022a] text-white py-10 font-sans">
        <div className="max-w-[1200px] mx-auto px-[25px]">
          <div className="flex flex-wrap justify-between gap-6">
            {/* App Download Section */}
            <FooterDiv>
              <h3 className="text-[18px] mb-[15px]">Download Our App</h3>
              <p className="text-[14px] leading-[24px]">
                Download App for Android and iOS.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <img src={playStore} alt="Play Store" className="w-32 h-auto" />
                <img src={appStore} alt="App Store" className="w-32 h-auto" />
              </div>
            </FooterDiv>

            {/* Logo Section */}
            <FooterDiv>
              <Logo width="100px" />
            </FooterDiv>

            {/* Useful Links Section */}
            <FooterDiv>
              <h3 className="text-[18px] mb-[15px]">Useful Links</h3>
              <ul>
                <FooterLink>Coupons</FooterLink>
                <FooterLink>Blog Post</FooterLink>
                <FooterLink>Return Policy</FooterLink>
                <FooterLink>Join Affiliate</FooterLink>
              </ul>
            </FooterDiv>

            {/* Follow Us Section */}
            <FooterDiv>
              <h3 className="text-[18px] mb-[15px]">Follow Us</h3>
              <ul>
                <FooterLink className="mb-[10px]">Facebook</FooterLink>
                <FooterLink className="mb-[10px]">Twitter</FooterLink>
                <FooterLink className="mb-[10px]">Instagram</FooterLink>
                <FooterLink className="mb-[10px]">Join Affiliate</FooterLink>
              </ul>
            </FooterDiv>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
