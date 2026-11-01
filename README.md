# Andy Maphumulo — portfolio

A complete, build-free portfolio using HTML, CSS and JavaScript. Your portrait is included and optimised. No framework, package installation, API key, external font or CDN is required.

## Put the files in your repository

1. Extract `Andy-Maphumulo-Portfolio.zip`.
2. Open the extracted `portfolio` folder. Copy its **contents** to the root of your existing website repository. `index.html` must be at the repository root, not inside another `portfolio` folder.
3. Keep your existing custom-domain configuration (`CNAME`, if present), demo applications and any existing project report pages. This package replaces the portfolio pages; it does not contain the S&H or Billion Group demo application source.
4. Commit and push using your normal deployment workflow. If your repository is already hosting andilebrian.online, retain its existing hosting settings.
5. Open your site and test its links. File names are case-sensitive: use `Innovation.html`, not `innovation.html`.

You can preview the package before upload by opening `index.html`. For a local HTTP preview, run `python -m http.server 8000` from the extracted folder and open `http://localhost:8000`.

## File map

| Path | Purpose |
| --- | --- |
| `index.html` | Main portfolio: hero, selected projects, approach, engineering profile and contact |
| `Innovation.html` | Civil lab automation, composite inventory, Farm Mania and Twinkle Tots |
| `Academic.html` | Compatibility link to the new engineering section |
| `projects.html` | Compatibility link to selected work |
| `assets/css/styles.css` | All visual design and responsive layouts |
| `assets/js/config.js` | Your GitHub profile and six video paths |
| `assets/js/main.js` | Mobile menu, GitHub link configuration and video rendering |
| `assets/images/andy-portrait.webp` | Included portrait used in the hero |
| `assets/images/favicon.svg` | Browser tab icon |
| `assets/videos/` | Place your exported MP4 recordings here |
| `.nojekyll` | Allows a plain static site when used with GitHub Pages |

## Add your videos and photos — already wired into the page

You only need to upload the files at the exact paths below. The paths are already configured; no HTML or JavaScript editing is required unless you choose different filenames. Use lowercase names, hyphens and the exact extensions shown.

### Videos

| UI location | Exact file path |
| --- | --- |
| RezFlow: Student experience | `assets/videos/rezflow-student.mp4` |
| RezFlow: Admin experience | `assets/videos/rezflow-admin.mp4` |
| S&H: Customer experience | `assets/videos/sh-customer.mp4` |
| S&H: Admin experience | `assets/videos/sh-admin.mp4` |
| Billion Group: application → business record | `assets/videos/billion-group.mp4` |
| Twinkle Tots walkthrough (Innovation page) | `assets/videos/twinkle-tots.mp4` |

RezFlow and S&H each have two always-visible video slots. Billion Group has one wider slot in its project block, before the academic section. Twinkle Tots has one slot on `Innovation.html`.

Export as landscape 16:9 MP4, preferably H.264 video with AAC audio, at 1920 × 1080 or 1280 × 720. Enable web/fast-start optimisation if your editor offers it. Compress long recordings or configure an HTTPS media URL in `assets/js/config.js` if you use external hosting. Do not just rename a MOV file to MP4: export or convert it. Native players include controls and inline mobile playback, without autoplay. Add captions when preparing recordings.

Until you upload a recording, its slot shows “Video coming soon”. Missing file requests in browser developer tools are expected while the reserved files are absent. To disable any request entirely, set its config value to an empty string. Once you upload files, refresh the page; the videos are discovered on page load.

### Images

| UI location | Exact file path |
| --- | --- |
| Hero portrait — already included | `assets/images/andy-portrait.webp` |
| SAIIE TUT photo 1, leftmost | `assets/images/saiie/saiie-01.jpg` |
| SAIIE TUT photo 2 | `assets/images/saiie/saiie-02.jpg` |
| SAIIE TUT photo 3 | `assets/images/saiie/saiie-03.jpg` |
| SAIIE TUT photo 4, rightmost | `assets/images/saiie/saiie-04.jpg` |

Export the four SAIIE images as JPEG (`.jpg`, not `.jpeg` or `.png`). Around 800 × 800 pixels is sufficient. Square crops work best: the four thumbnails use `object-fit: cover` and will crop other aspect ratios from the centre. Keep important faces near the middle. The photos appear in a row at the bottom of the SAIIE TUT box. Missing photos retain labelled placeholders; the gallery automatically displays each uploaded image after a refresh.

The portrait is already included. To replace it, use the same filename and WebP format or edit the image path in `index.html`. Keep a portrait orientation.

The project graphics are labelled HTML/CSS workflow illustrations, not screenshots of the actual applications. Billion Group uses blue and white. The academic section begins after a full-width ribbon reading “Academic foundation ✳ Academic profile”. It moves from left to right, pauses on hover and respects the visitor’s reduced-motion setting.

## Contact details

- Gmail: `abmaphumulo20@gmail.com` (as requested).
- WhatsApp: `https://wa.me/27616520417`, using the public `061 652 0417` number on your existing portfolio.
- GitHub: set the `github` value in `assets/js/config.js`. No profile URL was available in the supplied brief or reviewed portfolio pages. Until configured, the GitHub icon opens an email requesting the profile, with an explanatory accessible label and tooltip. Replace this setting before publishing if you want a direct GitHub profile link.

## Demo links and deployment structure

The main page preserves these destinations exactly:

| Project | Destination |
| --- | --- |
| RezFlow | `https://rezflow.co.za/` |
| S&H | `https://andilebrian.online/s&h/demo` |
| Billion Group | `https://andilebrian.online/billion-group/demo/demo` |
| More technical solutions | `Innovation.html` |

If you host demos as static folders, their landing files would normally be:

- S&H: `s&h/demo/index.html`
- Billion Group: `billion-group/demo/demo/index.html`

**Preserve these folders if they already exist.** This ZIP contains the portfolio, not the underlying business applications. If the demo paths are not deployed yet, add the real demo source there or update the links to the correct deployed addresses. Do not replace an existing working app with an empty folder.

## Content decisions

- Main positioning: industrial engineering applied to business workflows through software and automation.
- Projects are organised around the problem, personal contribution and process value.
- RezFlow is framed as development participation; Billion Group as a development initiative, without claiming a company-wide rollout.
- S&H benefits are described qualitatively. No unverified time-saving percentages were invented.
- Twinkle Tots is presented as a solution concept, without claiming implementation by the client.
- The Techathon result is **second place**, following your correction rather than the first-place claim on the old site.
- “Civil Lab Data Automation” follows the existing portfolio wording; the brief’s “Vivil Lab” was treated as a typo.
- Formal compliance certification is not claimed for document-generation functionality.

## What was checked

- Desktop, phone-width and tablet-width layout reviewed in a browser.
- Project disclosure and mobile navigation tested.
- Main JavaScript syntax checked.
- All local HTML asset paths and fragment links checked.
- No mobile horizontal overflow observed at the tested phone width.
- Actual video playback needs your recordings; all six video paths and four SAIIE image paths are preconfigured.

## Keeping existing content

This package does not require deleting any other repository files. Existing `series1.html`, `series2.html`, `series3.html`, `SH.html`, `Azande.html`, demo directories and other independent pages can remain. The updated `Academic.html` and `projects.html` point to their corresponding homepage sections. Keep backups of the previous versions if you want to retain their old layouts.

### Link status at preparation (1 November 2026)

The supplied S&H and Billion Group demo destinations both returned HTTP 404. Their exact links remain in the page as requested; deploy the demos or correct their destinations before sharing the portfolio publicly.
