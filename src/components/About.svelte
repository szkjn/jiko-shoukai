<script lang="ts">
  let emailCopied = false;
  const email = "idreamofasphere@pm.me";

  async function copyEmailToClipboard() {
    try {
      await navigator.clipboard.writeText(email);
      emailCopied = true;
      setTimeout(() => {
        emailCopied = false;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  }
</script>

<div class="about-panel flex flex-col gap-8 pt-8 pb-12">
  <div class="flex flex-row items-start gap-8">
    <p>
      Jun Suzuki is a French-Japanese multimedia artist, developer, and former
      opera singer based in Berlin and Marseille. His practice oscillates
      between live performances and installation art, creating interactive sonic
      experiences that critically reflect on
      <span>human responsibility in environmental downfall</span>
      and explore <span>cultural identities</span> through collaborations with
      fellow artists of Asian background. <br /> <br />Jun's soundscapes focus
      on the exploration of <span>Japanese language sonorities</span> and the
      nuances of his imperfect, incomplete Japanese culture shaped by growing up
      in the West. His practice incorporates tape recorders, tactile and
      interactive devices, vocals, and field recordings to create a rich
      tapestry of sound that reflects his
      <span>multicultural heritage</span>.<br /><br />
      He recently published a vocals experimental EP <i>A Distance So Near</i> on XVIIIPENINSULE Records. For
      the past two years, he has been touring <i>Fluids</i>, a collaboration
      with dancer-choreographer Alvin Collantes, which explores
      <span>cultural and gender identities through body, music and voice</span>,
      in both intimate and established settings in Germany (Tanz im August,
      Bucht der Träumer, Flughafen Tempelhof, SAVVY Contemporary, Berliner
      Ringtheater, StudioDB), in Sweden (Hybrida Fest), and in Portugal (House
      of Beautiful Business). <br /> <br />His installation work has been
      showcased in residencies and exhibitions across Georgia (AqTusheti),
      Budapest (Patyolat Gallery, BRFK), Iceland (Gamli Skoli), and Berlin
      (CTM Festival, MONOM, Flughafen Tempelhof, Alte Münze, Manifest:IO, Exgirlfriend Gallery,
      Merantix AI Campus, LiTE-HAUS Galerie, 90mil).
    </p>
    <p>
      Send me a postcard at <button type="button" on:click={copyEmailToClipboard} class="email-link" class:copied={emailCopied}>
        <span class="email-text">{emailCopied ? "copiedcopiedcopiedcopie" : email}</span>
        <svg class="copy-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>, on <a href="https://linkedin.com/in/jun-suzuki/">linkedin</a> or <a href="https://instagram.com/einleit/">instagram</a>.
    </p>
  </div>
</div>

<style>
  p {
    width: 30%;
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    line-height: 1.2;
    font-weight: 400;
    user-select: text;
    /* text-align: justify; */
    color: #FFFFFF;
  }
  /* span {
    font-weight: 700;
  } */

  a {
    text-decoration: underline;
  }

  button.email-link {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    text-decoration: line-through;
    cursor: inherit;
    display: inline-flex;
    align-items: center;
    gap: 0.3em;
  }

  .copy-icon {
    opacity: 1;
    flex-shrink: 0;
  }

  button.email-link:hover {
    cursor: crosshair;
  }

  button.email-link.copied {
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  @media (max-width: 960px) {
    .about-panel > div {
      flex-direction: column;
    }
    p {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    p {
      font-size: 1.6rem;
      line-height: 1.4;
    }
  }
</style>
