import React from 'react';
import FeaturesCard from '@/components/FeaturesCard';
import { BiSupport, BiBot } from 'react-icons/bi';
import {
  IoCallSharp,
  IoDiamondOutline,
  IoWalletOutline,
} from 'react-icons/io5';
import { AiOutlineLineChart } from 'react-icons/ai';
import { GiOpenBook } from 'react-icons/gi';
import { MdEventAvailable } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';

const features = () => {
  return (
    <div className="features__container">
      <h2 className="features__container--h1">Features</h2>
      <div className="features__container__box">
        <div className="features__container__box--card">
          <FeaturesCard
            icon={<BiSupport />}
            title="24/7 Support"
            text="Free 1 to 1 support from our staff team as you need it. They have exceptional knowledge across all areas, understand the demands of beginners and are kind and considerate."
          />
        </div>
        <div className="features__container__box--card">
          <FeaturesCard
            icon={<BiBot />}
            title="Forex Bot Access"
            text="Instantly upon joining you will get access to a copy trading bot, with this you will also get a dedicated member of staff to help you go through the set up and ensure you understand how to use it. "
          />
        </div>
        <div className="features__container__box--card">
          <FeaturesCard
            icon={<AiOutlineLineChart />}
            title="Trading calls"
            text="We have a team of incredibly experienced traders who post what they are buying and when to sell and take profits. This is the perfect way to start trading as you can learn the basics while following an expert."
          />
        </div>
        <div className="features__container__box--card">
          <FeaturesCard
            icon={<IoCallSharp />}
            title="Voice calls"
            text="We run regular voice calls to answer any questions members may have and also cover specific topics to do with trading, NFTs and web3 in general."
          />
        </div>
        <div className="features__container__box--card">
          <FeaturesCard
            icon={<GiOpenBook />}
            title="Crypto & NFT Guides"
            text="We provide all the written and video guides needed to take you from your first NFT purchase to experienced flipper."
          />
        </div>
        <div className="features__container__box--card">
          <FeaturesCard
            icon={<IoDiamondOutline />}
            title="NFT Partnerships"
            text="We have regular partnerships with the top NFT projects to ensure the best Whitelists for our members."
          />
        </div>
        <div className="features__container__box--card">
          <FeaturesCard
            icon={<MdEventAvailable />}
            title="Access to Events"
            text="Get early access to Web3 events all over London. Which recently included going to the House of Lords, big parties with free drinks and even one at a London fashion show."
          />
        </div>
        <div className="features__container__box--card">
          <FeaturesCard
            icon={<RiComputerLine />}
            title="NFT Release Guides"
            text="We extensively cover ETH, SOL, NEAR and Veve releases, so you never miss a chance to make profit."
          />
        </div>
        <div className="features__container__box--card">
          <FeaturesCard
            icon={<IoWalletOutline />}
            title="Wallet Tracker"
            text="We track NFT whales so you can be informed of their behaviour, and hence likely movements, before the masses."
          />
        </div>{' '}
      </div>
    </div>
  );
};

export default features;
