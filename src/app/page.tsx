import { Navbar } from "@/components/Navbar";
import { Subscription } from "@/components/Subscription";
import { SoldInfo } from "@/components/SoldInfo";
import { Referrals } from "@/components/Referrals";
import { Holdings } from "@/components/Holdings";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Subscription/>
      <SoldInfo/>
      <Referrals/>
      <Holdings/>
      <Footer/>
    </div>
  );
}
