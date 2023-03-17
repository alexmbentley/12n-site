import ReviewCard from '@/components/ReviewCard';
import styles from '@/styles/Testimonials.module.scss';

const testimonials = () => {
  return (
    <div className={styles['container']}>
      <h2 className={styles['container--h1']}>Testimonials</h2>
      <div className={styles['container__box']}>
        <div className={styles['container__box--card']}>
          <ReviewCard
            name="Oliv3r#5924"
            text="Been in 1st2Notify for a very long time. I've enjoyed every single moment people are so nice in there. They have helped me through everything the last 2 years. There is so many different ways of making money in their server. Overall its just a very nice place and a lot of money is being made in there."
          />
        </div>
        <div className={styles['container__box--card']}>
          <ReviewCard
            name="SilentWraith#5190"
            text="This group is absolutely amazing and I cannot reccomend enough. You will learn something new in this group whether you're a experienced trader or like me starting from complete scratch. The team have gone above and beyond to make sure I know what I am doing and I am safe doing it."
          />
        </div>
        <div className={styles['container__box--card']}>
          <ReviewCard
            name="rahul38254#6675"
            text="I have been in the server for like one week and everybody is so welcoming and helpful and also I have learned alot. Especially the team and callers. Both nft and crypto alpha is great, so far I have taken 3 crypto calls from Dale (crypto caller) and have a 100% success ratio. "
          />
        </div>
        <div className={styles['container__box--card']}>
          <ReviewCard
            name="ChIlevodoo"
            text="One of the greatest groups in the Crypto/NFT space. The staff are polite, responsive and always willing to help if you need it. It's up to date on everything crypto/nfts and recently have a Forex component added which allows users to passively make income without doing anything! "
          />
        </div>
        <div className={styles['container__box--card']}>
          <ReviewCard
            name="Akin"
            text="This group is very good in maintaining the best information for their users. When the sneaker market crashed, they immediately anticipated to providing quality information regarding the NFT market. Regarding their consistent information I was able to get a lot of profit on different sections!"
          />
        </div>
        <div className={styles['container__box--card']}>
          <ReviewCard
            name="Alex Bentley"
            text="Arran and the staff have been great in supporting me during my reselling journey. I went from copping a release or two a month to getting hold of in demand items most days. Now 1st2notify has moved into the world of NFTs, I been able to grow my ETH to a fairly decent amount."
          />
        </div>
        <div className={styles['container__box--card']}>
          <ReviewCard
            name="Olivia Wyatt"
            text='"As a girl I was a little nervous to join the group but I was welcomed by so many lovely members and staff. The information and features they provide is absolutely incredible."'
          />
        </div>
        <div className={styles['container__box--card']}>
          <ReviewCard
            name="Connor"
            text="Top group for anyone looking to make a little extra money on the side. From NFTs, crypto, reselling and recently the forex bot this group has been excellent. Staff really helpful too."
          />
        </div>
        <div className={styles['container__box--card']}>
          <ReviewCard
            name="Paul"
            text="Great service! I was familiar with NFT’s before joining but I would always miss the next “hot drop”.. 1st 2 Notify keep you updated with all the best NFT projects. I recently made around $4,000 off one NFT alone thanks to this service bringing it to my attention. Definitely worth the money!"
          />
        </div>{' '}
      </div>
    </div>
  );
};

export default testimonials;
