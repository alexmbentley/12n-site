import Accordion from '@/components/Accordion';
import styles from '@/styles/FAQs.module.scss';

const faqs = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['container--h1']}>FAQ's</div>
      <div className={styles['container__box']}>
        <Accordion
          title="How can I join?"
          info={
            <a href="https://whop.com/checkout/plan_p9joThX6UZC3c?d2c=true">
              {' '}
              You start your free trial here
            </a>
          }
        />
        <Accordion
          title="Does this group support beginners?
"
          info="Yes of course we do! We support all ranges of ability, so whether you’re completely new to the world of trading, or already familiar with it, we can help.  
          We have beginner guides in place for you to read when you initially join, FAQs,and 24/7 staff support."
        />
        <Accordion
          title="How quickly will I receive help/advice?"
          info="You will receive help and advice as quickly as possible! We pride ourselves on being able to have staff there to instantly support you, and answer whatever queries you may have. Ask away! "
        />
        <Accordion
          title="Can I make a profit from any country?"
          info="Absolutely! Although we are mainly UK based, we have members from all over the world that are making profits. The beauty of what we do is it can be done from anywhere."
        />
        <Accordion
          title="How do I receive notifications?"
          info="You will receive notifications straight to your phone and laptop through Discord and we also offer text alerts for important trade calls so you don't miss out!"
        />
        <Accordion
          title="How much money can I make?"
          info="The limits are endless! Members have been consistently pushing for 3-5 figure profits per month; the only thing that limits you is the budget you’re working with."
        />
        <Accordion
          title="How much capital do I need to start?"
          info="It varies depending on what you are looking to do. With crypto you can start with as little as £200, however for the forex bot to match the bots recommended risk strategy you would need £1500 to start."
        />
        <Accordion
          title="Is it risk-free?"
          info="Trading Crypto, NFTs and Forex is not risk free. When trading NFTs, you should only use money that you can afford to lose."
        />
        <Accordion
          title="Can anyone do it?"
          info="Yes, absolutely anyone can learn, regardless of prior experience. Most of our members had never traded before they joined us."
        />
        <Accordion
          title="Why is your group better than others?"
          info="We believe we offer the best value-for-money service within the space. Our close community of members creates a uniquely supportive environment for learning and progressing. We extensively cover all major networks to bring you the best opportunities for profit. We have highly experienced staff that are exclusive to our group, providing alpha that will not be found elsewhere."
        />
        <Accordion
          title="How many providers do you have?"
          info="We have a really dedicated and skilled team of 12 staff members, who are constantly bringing our members the best opportunities in the NFT space early."
        />
        <Accordion
          title="Will I get access to all the information?"
          info="Your membership grants you access to all of the information we provide, though you can of course customise notifications within the server to exactly suit your needs."
        />
        <Accordion
          title="How do I know that I will have success in your group?"
          info="Please look at the reviews on our website, as well as on Google and Trustpilot [hyperlinks to all 3]. You will see that these speak for themselves."
        />
        <Accordion
          title="Can I trade alongside a full-time job?"
          info="Yes, it is absolutely possible to have great success alongside a full-time job. Most of our members do exactly this."
        />
      </div>
    </div>
  );
};

export default faqs;
