<template>
  <main class="main">
    <section class="section section--hero">
      <div class="section__content">
        <div class="section__hero-text">
          <h2 class="section__jumbo">
            I'm Malik. Help me find a wife!
          </h2>
          <div class="section__catch-phrase">
            (No this isn't a joke!)
          </div>
        </div>
        <a href="" class="button button--light">Learn More</a>
      </div>
    </section>
    <section class="section section--video">
      <div class="section__content">
        <h2 class="section__heading">
          The man behind the billboard
        </h2>
        <div class="section__embed">
          <div class="section__youtube">
            <iframe
              src="https://www.youtube.com/embed/buhz4OnuPZ0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="section__video-youtube"
            />
          </div>
        </div>
        <div class="divider" />
      </div>
    </section>
    <section class="section section--about-me">
      <div class="section__content">
        <div class="section__description">
          <h2 class="section__heading">
            Who am I ?
          </h2>
          <p class="section__paragraph">
            I'm a 29-year-old Muslim guy living in London.
            <br><br>
            I'm blessed because I can combine my passions for Islam and entrepreneurship in what I do for a living.
            <br><br>
            I love food, good bants, and I know it sounds cheesy - but learning more about my own faith.
            <br><br>
            <a href="https://twitter.com/findmalikawife" target="_blank">Twitter</a>
            <a href="https://www.instagram.com/findmalikawife" target="_blank">Instagram</a>
            <a href="https://www.tiktok.com/@findmalikawife?lang=en">TikTok</a>
          </p>
          <a href="" class="button">Find me a wife</a>
        </div>
        <div class="section__image">
          <img
            src="https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c06e03716d30985094fa0b_IMG_2328.jpg"
            sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, 95vw"
            srcset="https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c06e03716d30985094fa0b_IMG_2328-p-500.jpeg 500w, https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c06e03716d30985094fa0b_IMG_2328-p-800.jpeg 800w, https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c06e03716d30985094fa0b_IMG_2328-p-1080.jpeg 1080w, https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c06e03716d30985094fa0b_IMG_2328.jpg 1169w"
            alt=""
          >
        </div>
      </div>
    </section>
    <section class="section section--about-me section--reverse">
      <div class="section__content">
        <div class="section__description">
          <h2 class="section__heading">
            What I'm looking for
          </h2>
          <p class="section__paragraph">
            I just haven't found the right girl yet. It's tough out there. I&nbsp;had to get a billboard to get seen!
            <br><br>
            My ideal partner would be a Muslim woman in her 20s, who's striving to better her deen. I'm open to any ethnicity but I've got a loud Punjabi family - so you'd need to keep with the bants.
            <br><br>
            Always personality and faith over anything else!
            <br><br>
            P.S I'm an only child and look after my mom and dad. If this is a deal-breaker I don't think it'll work out.
          </p>
          <a href="" class="button">Find me a wife</a>
        </div>
        <div class="section__image">
          <img
            src="https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c08aa446a3994191871865_IMG_2326.jpg"
            sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, 95vw"
            srcset="https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c08aa446a3994191871865_IMG_2326-p-500.jpeg 500w, https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c08aa446a3994191871865_IMG_2326-p-800.jpeg 800w, https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c08aa446a3994191871865_IMG_2326-p-1080.jpeg 1080w, https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c08aa446a3994191871865_IMG_2326.jpg 1169w"
            alt=""
          >
        </div>
      </div>
    </section>
    <section class="section section--faq">
      <div class="section__content">
        <h2 class="section__heading">
          FAQs
        </h2>
        <ul role="list" class="section__faqs">
          <li>
            <strong>Is this a joke?</strong>
            Nope, I'm serious. I've been searching for a partner who'll work with me to grow our love for each other and Allah. If this sounds like you please get in touch.
          </li>
          <li>
            <strong>Are you against arranged marriage?</strong>
            Not at all! I think arranged marriages have a place and tradition in many Islamic cultures. In fact, there are many studies that show that arranged marriages have many advantages.
            <br>
            I just want to try and find someone on my own first.
          </li>
          <li>
            <strong>I know someone who'd be perfect for you, what should I do?</strong>
            Amazing! Feel free to use the form below to let me know more about them. Just make sure they're looking for a husband and are aware.
          </li>
        </ul>
      </div>
    </section>
    <section class="section section--form">
      <div class="section__content">
        <h2 class="section__heading">
          Hey soul sister, let's chat
        </h2>
        <p>
          I'm overwhelmed and blessed by the positive response so far.
          I want to thank everyone, even those of you just wanting to wish me good luck!
          <br><br>
          Inshallah I can reply to all the genuine applications (I fully intend to!).
          Please bear with me, Allah SWT has blessed me with a lot more help on my search than I expected.
        </p>
        <div class="section__form">
          <WifeForm />
        </div>
      </div>
    </section>
    <section class="section section--copyright">
      Copyright 2022
    </section>
  </main>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="scss" scoped>
  .main {
    margin-right: 30px;
    margin-left: 30px;
    position: relative;
    .section {
      width: 100%;
      display: flex;
      margin-bottom: 80px;
      align-items: center;
      position: relative;
      justify-content: center;
      &__content, &__hero-text {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &__content {
        width: 70%;
        max-width: 1140px;
        margin-bottom: 20px;
        text-align: center;
      }
      &__hero-text {
        width: 80%;
        margin: 0px auto 35px;
      }
      &__jumbo {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 64px;
        font-weight: 400;
        line-height: 80px;
        text-align: center;
        text-transform: none;
      }
      &__catch-phrase {
        margin-bottom: 10px;
        opacity: 0.7;
        font-size: 20px;
        line-height: 34px;
      }
      &__heading {
        margin-top: 10px;
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 36px;
        line-height: 50px;
      }
      &__embed {
        width: 80%;
        margin-right: auto;
        margin-bottom: 85px;
        margin-left: auto;
        text-align: center;
        position: relative;
      }
      &__youtube {
        padding-top: 56.17021276595745%;
        width: 100%;
        position: relative;
        padding-bottom: 0px;
        padding-left: 0px;
        padding-right: 0px;
        background-image: url(https://d3e54v103j8qbb.cloudfront.net/static/youtube-placeholder.2b05e7d68d.svg);
        background-size: cover;
        background-position: 50% 50%;
        iframe {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      &__description {
        text-align: left;
      }
      &__paragraph {
        opacity: 0.7;
        margin-bottom: 30px;
      }
      &__faqs {
        width: 100%;
        text-align: left;
        li {
          margin-bottom: 10px;
          > strong {
            display: block;
            margin-bottom: 20px;
          }
        }
      }
      &__form {
        padding-top: 30px;
      }
      &--hero {
        background: #f4f4f4;
        color: #ffffff;
        height: 620px;
        justify-content: center;
        background-image: url("https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c061adac420d6b7b42a982_me-pointing-purple.jpg");
        background-position: 0px 0px;
        background-size: cover;
      }
      &--video {
        flex-direction: column;
        justify-content: center;
        margin-bottom: 0px;
        .section__heading {
          margin-bottom: 30px;
        }
      }
      &--about-me {
        justify-content: center;
        padding-top: 60px;
        .section__content {
          display: grid;
          width: unset;
          grid-template-columns: 1fr 2fr;
          grid-template-rows: auto;
          align-items: flex-start;
          grid-column-gap: 80px;
          .section__heading {
            margin-top: 0px;
          }
        }
        &:last-child {
          padding-top: 0px;
        }
      }
      &--reverse {
        .section__content {
          grid-template-columns: 2fr 1fr;
        }
        .section__description {
          order: 2;
        }
        .section__image {
          order: 1;
        }
      }
      &--form {
        background: #f4f4f4;
        padding: 60px 80px;
      }
      &--copyright, &--form {
        margin-bottom: 30px;
      }
    }
  }
</style>
