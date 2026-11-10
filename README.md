# Bomigo static B2B website

Standalone product and company HTML pages, CSS, minimal JavaScript, SEO metadata, SVG placeholder imagery, robots.txt and sitemap.xml. No build step or framework required.

## Publish
1. Upload the **contents** of this folder to a GitHub repository (root directory). Enable GitHub Pages in Settings → Pages (deploy from main branch/root), or use any static web host.
2. Replace `YOUR-DOMAIN.com` in `sitemap.xml` and `robots.txt` with the real production domain. Add canonical `<link>` tags with final URLs in each HTML page. For GitHub Pages project subpaths, adjust absolute sitemap paths accordingly.
3. Formspree is configured in `contact.html` with endpoint `https://formspree.io/f/mjyyljng`. Test an actual submission after deployment and verify email routing and spam settings.
4. WhatsApp is configured to +86 198 2449 7621. Verify the number and QR code before publishing. Contact: Eriya, bomigo88@gmail.com.
5. Set `ga4MeasurementId` in `js/main.js` (e.g. G-XXXXXXXXXX), then configure consent controls as applicable to your markets. No GA4 script loads by default.
6. Replace every `images/*.svg` illustration with approved product/factory photography; update HTML image paths, dimensions and alt text. Current illustrations are explicitly labeled placeholders.
7. Add your verified business email and any applicable privacy/cookie notices before launch.
8. Validate model-specific specifications and certificates before publishing additional claims.

## Documentation grounding
The user-provided LVD report CTSL2610730152S and certificate CTSL2610730152SZ (July 9, 2026) reference heating mat Bo-5010 Mig, standards EN IEC 60335-1:2023/A11:2023, EN 60335-2-17:2013/A2:2021, EN 62233:2008 and LVD Directive 2014/35/EU. The RoHS report ASTL260700274ER and certificate ASTL260700274EZ (July 13, 2026) reference the same main model and applicable RoHS directives. The documents explicitly limit conclusions to tested samples. Original reports are **not published in this repository** because they restrict reproduction/publication without laboratory approval. Share full documents through an approved process.

## Product catalog update
B0-7585 Migo has its own product detail page (`bo-7585-migo.html`) and listing card on `products.html`. Its seven user-supplied product photos are stored as optimized WebP images in `images/bo7585migo-01.webp` through `images/bo7585migo-07.webp`. Specifications shown are based on the supplied product parameters.

## Notes
PEMF and far infrared options are described as inquiry-based, not as tested or certified features. No pricing, MOQ, lead time or technical specifications have been invented. This is static HTML; the Formspree endpoint is required for working submissions.

## Brand color theme
This edition uses a taro-purple / soft lilac palette. Main accent `#77558f`, deep plum `#4b305d`, pale lavender `#f0e7f5`, background `#fbf8fc`. Change CSS variables in `css/style.css` to customize.

### Final color preference
Main backgrounds: pale lavender `#F0E7F5` and cream white `#FBF8FC`. Dark plum is retained for readable text, buttons, and navigation contrast.


## Original compliance documents
The Certifications page displays previews and direct links to four complete, unmodified uploaded PDFs in `documents/`. The previews are in `images/` as WebP. These are sample-specific laboratory documents, not blanket certifications of every OEM, PEMF, jade, or tourmaline configuration. Keep the original PDFs intact and confirm applicable models with customers.

## Official brand logo
The supplied original Bomigo logo is included at `images/bomigo-logo.jpg` and used in the header and footer on all six pages. `images/favicon.png` is derived from its red lotus symbol. Keep the original logo colors unchanged.


## Factory photo gallery update
12 supplied photos are stored as optimized WebP assets under `images/`. They appear in `about.html` (complete gallery), `oem.html` (selected production steps), and `index.html` (factory preview). Original photo files are not required for deployment. Alt text and visible captions are included in the static HTML for SEO.


## November 2026 website refinement
- Home hero and OEM imagery now use real user-provided workshop photos rather than illustrative placeholders. Product range cards remain labeled illustrations until verified SKU photographs are supplied.
- Product quote links prefill the contact form's Product of interest field. Sample links preselect Sample order.
- Mobile navigation closes on link selection or Escape; added keyboard focus styling and reduced-motion support.
- Before launch: test the configured Formspree form, configure GA4 ID in js/main.js if desired, and set the production domain in sitemap.xml and robots.txt. Live delivery has not been independently tested.
- Check that the uploaded factory photos and certifications accurately represent the products and legal entity being marketed. Test reports/certificates apply to their specified samples and scope only.


## New lifestyle images (November 2026)
Four supplied images are optimized as `images/lifestyle-1.webp` through `lifestyle-4.webp` and displayed on Home and Products. They are illustrative lifestyle imagery, not evidence that each pictured format is a stocked Bomigo model. Verify model availability and specifications before making product-specific claims.

## BO-147 product detail
- `bo-147.html` is a dedicated BO-147 tourmaline heating mat product detail page linked from Products.
- Specifications are from the supplied BO-147 artwork: 55 × 147 cm, 180 W, 110 V / 220 V variants, 30–70°C. Confirm voltage/plug, MOQ, availability, certifications, and specifications before publishing as guaranteed production claims.
- Product photography supplied by the user, optimized to WebP in `/images/bo147-*.webp`.

## BO-195 product update
Added bo-195.html, BO-195 product images, product listing and sitemap entry. The product artwork contains unverified promotional wording; website body copy avoids health-effect claims. Confirm product material, temperature specifications and market approvals before publishing.

## BO-580 addition
BO-580 is included in `products.html` and `bo-580.html`, with 14 supplier images converted to optimized WebP. Its specifications are based on supplier artwork. Certifications do not automatically cover BO-580.


## November 2026 content update
The Home, About, OEM and Products pages now state the user-provided factory operating history since 2008 and include heating belts, heating pillows, crystal and ceramic heating mats as product categories. These additional categories are inquiry-led, not independently specified models; do not claim model-specific certification or guaranteed availability.


New product: mini-tourmaline-ceramic.html. Product photographs provided by Bomigo; 45 × 80 cm from supplied marketing image. Confirm electrical specifications before publication.


New product: BO-6015i Go page at bo-6015i-go.html, with 9 white-background photos and 8 supplied detail graphics. Confirm marketing claims embedded in supplied graphics before publication.


## BO-195 product detail (November 2026)
- Added `bo-195.html` and a third product card on `products.html`.
- Added six optimized BO-195 product photographs under `images/bo195-new-*.webp`.
- Product specifications are transcribed from the user-provided values. The supplied name says “Tourmaline Heating Matt” while the supplied stone material says “Natural Amethyst”; both are preserved as provided and should be confirmed before launch.
\n\n## Added product\n- BO-580 Mini Tourmaline Heating Massage Mat: 90W, 110V / 220V, 45 × 80 cm, 30–70°C / 85–159°F. See `bo-580.html`.\n

Latest product addition: BO-0854 Premium Mini Tourmaline Ceramic Mattress (45 × 80 cm, 90W). Product page: `bo-0854.html`.

Latest product addition: BO-5010 Mig Foldable Amethyst Heating Mat (50 × 100 cm, 100W). Product page: `bo-5010-mig.html`.


## BO-6015i Go product update (November 2026)
- Added a dedicated `bo-6015i-go.html` product page and a linked card in `products.html`.
- Added 16 supplied BO-6015i Go product photographs, optimized as WebP assets in `images/bo6015igo-*.webp`.
- Product parameters are transcribed from the supplied details: 110V / 220V, 200W, infrared rays, natural amethyst, 30–70°C / 85–159°F, 60 × 150 cm.
- The product name is retained as supplied. Confirm the model naming, electrical configuration, temperature range and market approvals before treating them as guaranteed production claims.
\n\n## Latest product update\n- Added the BO-7585 Mig Thermal Amethyst Heat Mat – Far Infrared Crystal product page (`bo-7585-mig.html`).\n- Added the BO-7585 Mig card to `products.html`, seven optimized WebP product images, and its sitemap URL.\n- Specifications: 110V / 220V, 260W, infrared rays, natural amethyst, 30–70°C / 85–159°F, 75 × 185 cm.\n