<template>
  <main class="liturgy-page">
    <div class="liturgy-page__meta">
      TEXT / 001<br />
      <span>THE ROOM AROUND AN IMAGE</span>
    </div>

    <section class="liturgy-hero">
      <p class="eyebrow">
        04 / THE NOTE <b>—</b>
      </p>
      <span class="liturgy-hero__cross" aria-hidden="true">✝</span>
      <h1>
        Room<br />
        <em>for light.</em>
      </h1>
      <div class="liturgy-hero__reserve" aria-label="Reserved artwork field">
        <span>RESERVED FIELD / 04</span>
        <i />
        <b>
          THE LINEWORK WILL<br />
          APPEAR HERE
        </b>
      </div>
    </section>

    <section class="liturgy-body">
      <aside>
        I.<br />
        <span>THE SPACE<br />BEFORE FORM</span>
      </aside>
      <article>
        <p class="lead">
          Before an image arrives, there is the room that receives it.
        </p>
        <p>
          The angel is not an ornament borrowed from heaven. In the old account,
          the messenger first speaks peace: be not afraid. The line begins there
          — not in spectacle, but in the mercy of making room for another.
        </p>
        <p>
          Watch in the night. Attend to the wounded. Let the figure remain both
          distant and near: a sign of the holy, and a posture turned toward the
          human.
        </p>
        <div class="liturgy-body__rule" />
        <p class="closing">
          Leave the center open.<br />
          Let the image decide what it becomes.
        </p>
      </article>
    </section>

    <footer class="liturgy-foot">
      <NuxtLink to="/archive">← THE INDEX</NuxtLink>
      <NuxtLink to="/">THE FIGURE →</NuxtLink>
    </footer>
  </main>
</template>

<style scoped>
:global(body) {
  margin: 0;
  background: #e9edf1;
  color: #19212b;
  font-family: Arial, Helvetica, sans-serif;
}

.liturgy-page {
  min-height: 100svh;
  background: #e9edf1;
}

.liturgy-page__meta {
  position: absolute;
  z-index: 2;
  top: 118px;
  right: 8vw;
  color: #7b8692;
  font: 8px/1.8 "Courier New", monospace;
  letter-spacing: 0.16em;
  text-align: right;
}

.liturgy-page__meta span {
  color: #a1aab4;
}

.liturgy-hero {
  position: relative;
  min-height: 670px;
  padding: 190px 13vw 100px;
  overflow: hidden;
  border-bottom: 1px solid rgba(39, 50, 63, 0.23);
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 0 30px;
  color: #707b88;
  font: 9px "Courier New", monospace;
  letter-spacing: 0.2em;
}

.eyebrow b {
  color: #202b37;
  font-weight: 400;
}

.liturgy-hero h1 {
  margin: 0;
  font-size: clamp(80px, 13vw, 185px);
  line-height: 0.79;
  font-weight: 200;
  letter-spacing: -0.1em;
}

.liturgy-hero__cross {
  position: absolute;
  z-index: 2;
  top: 165px;
  left: 46%;
  color: #2453cc;
  font: 24px Georgia, serif;
  opacity: 0.72;
}

.liturgy-hero h1 em {
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.11em;
}

.liturgy-hero__reserve {
  position: absolute;
  top: 145px;
  right: 9%;
  width: min(35vw, 470px);
  height: 420px;
  border: 1px solid rgba(75, 89, 105, 0.3);
  background: radial-gradient(
    circle at center,
    rgba(188, 201, 214, 0.2),
    transparent 55%
  );
  color: #7a8591;
  font: 8px "Courier New", monospace;
  letter-spacing: 0.15em;
}

.liturgy-hero__reserve::before,
.liturgy-hero__reserve::after {
  position: absolute;
  inset: 11%;
  border: 1px solid rgba(82, 97, 113, 0.2);
  border-radius: 50%;
  content: "";
}

.liturgy-hero__reserve::after {
  inset: 8% 28%;
  transform: rotate(34deg);
  border-style: dashed;
}

.liturgy-hero__reserve > span {
  position: absolute;
  top: 15px;
  left: 17px;
}

.liturgy-hero__reserve > i {
  position: absolute;
  top: 9%;
  bottom: 9%;
  left: 50%;
  width: 1px;
  background: rgba(76, 91, 107, 0.22);
}

.liturgy-hero__reserve > b {
  position: absolute;
  right: 17px;
  bottom: 15px;
  font-weight: 400;
  line-height: 1.6;
  text-align: right;
}

.liturgy-body {
  display: grid;
  grid-template-columns: 25% minmax(300px, 570px);
  gap: 9%;
  max-width: 1020px;
  margin: 0 auto;
  padding: 130px 40px 150px;
}

.liturgy-body aside {
  color: #66727f;
  font: 9px/1.8 "Courier New", monospace;
  letter-spacing: 0.17em;
}

.liturgy-body aside span {
  color: #9ca6b0;
}

.liturgy-body article {
  color: #687481;
  font: 12px/2.15 "Courier New", monospace;
  letter-spacing: 0.03em;
}

.liturgy-body article p {
  margin: 0 0 32px;
}

.liturgy-body .lead {
  color: #202b37;
  font: 23px/1.45 Arial, sans-serif;
  font-weight: 300;
  letter-spacing: -0.035em;
}

.liturgy-body__rule {
  height: 1px;
  margin: 56px 0 35px;
  background: #86919d;
}

.liturgy-body .closing {
  color: #27323e;
  font: 16px/1.6 Arial, sans-serif;
  font-weight: 300;
}

.liturgy-foot {
  display: flex;
  justify-content: space-between;
  max-width: 1020px;
  margin: 0 auto;
  padding: 20px 40px 50px;
  border-top: 1px solid rgba(39, 50, 63, 0.22);
}

.liturgy-foot a {
  color: #65717e;
  font: 9px "Courier New", monospace;
  letter-spacing: 0.16em;
  text-decoration: none;
}

@media (max-width: 760px) {
  .liturgy-page__meta {
    top: 100px;
    right: 24px;
  }

  .liturgy-hero {
    min-height: 700px;
    padding: 130px 24px 60px;
  }

  .liturgy-hero h1 {
    font-size: 78px;
  }

  .liturgy-hero__reserve {
    top: 345px;
    right: 24px;
    width: calc(100% - 48px);
    height: 285px;
  }

  .liturgy-body {
    display: block;
    padding: 95px 24px 110px;
  }

  .liturgy-body aside {
    margin-bottom: 48px;
  }

  .liturgy-body .lead {
    font-size: 20px;
  }

  .liturgy-foot {
    margin: 0 24px;
    padding: 20px 0 40px;
  }
}
</style>
