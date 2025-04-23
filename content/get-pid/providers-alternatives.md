<!-- PID‑Provider Karten – Logos aus assets/media =======================================
     Variante, die Logos direkt aus dem Hugo‑`assets/`‑Ordner lädt.  
     Vorteil: keine Duplikate in `static/` nötig; Hugo kann die Bilder – falls
     gewünscht – noch optimieren.  
     Hinweis:  .logo enthält nun den Pfad relativ zu assets/, z. B. `media/datacite.png`.
     Im Template wird `resources.Get` verwendet, um `RelPermalink` zu erzeugen. -->

---
title: "PID Providers"
date: 2024-10-09
widget: "blank"
providers:
  - name: "DataCite"
    logo: "media/datacite.png"
    pid_type: "DOI"
    year: 2009
    description: "Globales Non‑Profit‑Consortium zur Vergabe von DOIs für Forschungsdaten und andere Outputs. Unterstützt ROR, ORCID & Cross‑repository‑Suche."
    pid_example: "https://doi.org/10.5438/1dgk-1m22"
    membership: "https://datacite.org/become-a-member/"
    posi: "https://doi.org/10.5438/vy7h-g464"
    url: "https://datacite.org/"
  - name: "ORCID"
    logo: "media/orcid.png"
    pid_type: "ORCID iD"
    year: 2012
    description: "Eindeutige Kennung für Forschende, um ihre Publikationen & Beiträge zu verknüpfen."
    pid_example: "https://orcid.org/0000-0001-2345-6789"
    membership: "https://support.orcid.org/hc/en-us/articles/360006897454-How-do-I-register-for-an-ORCID-ID"
    posi: "https://info.orcid.org/orcids-self-assessment-of-the-posi-principles/"
    url: "https://orcid.org/"
  # … (alle weiteren Provider analog, logo z. B. "media/ror.png")
---

> Persistent identifiers (PIDs) are provided by different organizations (\*PID providers\*). One provider may cover several PID types, and one PID type can be offered by multiple providers. The list is work‑in‑progress – suggestions welcome!

<style>
.providers{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;margin-block:1.5rem;list-style:none;padding:0}
.provider-card{background:var(--card-bg,#fff);border:1px solid #e5e7eb;border-radius:.75rem;padding:1.25rem;box-shadow:0 2px 4px rgb(0 0 0 / 5%);transition:transform .15s,box-shadow .15s}
.provider-card:hover{transform:translateY(-2px);box-shadow:0 4px 10px rgb(0 0 0 / 8%)}
.provider-logo{max-width:120px;height:auto;margin-bottom:.5rem;object-fit:contain}
.provider-card h3{margin:0 0 .25rem;font-size:1.125rem}
.provider-meta{font-size:.875rem;color:#666;margin-bottom:.5rem;line-height:1.35}
.provider-links a{display:inline-block;font-size:.75rem;margin-right:.75rem;margin-top:.5rem;text-decoration:none}
.provider-links a:hover{text-decoration:underline}
</style>

<ul class="providers">
  {{ range sort .Params.providers "name" }}
    <li class="provider-card">
      {{ with .logo }}
        {{ $img := resources.Get . }}
        <img class="provider-logo" src="{{ $img.RelPermalink }}" alt="Logo {{ $.name }}" loading="lazy" decoding="async">
      {{ end }}
      <h3>{{ .name }}</h3>
      <div class="provider-meta">
        {{ with .pid_type }}PID‑Typ: {{ . }}<br>{{ end }}
        {{ with .year }}Start: {{ . }}<br>{{ end }}
      </div>
      <p>{{ .description }}</p>
      <div class="provider-links">
        {{ with .pid_example }}<a href="{{ . }}" target="_blank" rel="noopener">PID‑Beispiel ↗</a>{{ end }}
        {{ with .membership }}<a href="{{ . }}" target="_blank" rel="noopener">Mitglied / Register ↗</a>{{ end }}
        {{ with .posi }}<a href="{{ . }}" target="_blank" rel="noopener">POSI ↗</a>{{ end }}
      </div>
      <a href="{{ .url }}" target="_blank" rel="noopener" style="display:inline-block;margin-top:.75rem;font-weight:600">Website ↗</a>
    </li>
  {{ end }}
</ul>

<!-- Tipp: Wenn du Bildoptimierung (WebP) willst, ersetze oberhalb resources.Get
     durch z. B.  {{ $img := (resources.Get .).Fit "240x" }}  und nutze dann
     $img.RelPermalink. -->
