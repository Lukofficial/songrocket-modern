# SongRocket Modern Website - TODO

## Completed
- [x] Scraped original website for assets/colors
- [x] Created Next.js project with shadcn
- [x] Set up project structure with custom styling
- [x] Created navigation with dropdown menus
- [x] Built hero section with parallax and animations
- [x] Created Artists section with scroll animations and floating badge
- [x] Created Curators section with scroll animations
- [x] Built Join the Network section with gradient background
- [x] Created "Founded by artists for artists" section
- [x] Created Blog section with editable posts
- [x] Built footer matching original design
- [x] Added strong SEO (meta tags, JSON-LD, Open Graph, Twitter cards)
- [x] Centralized blog data in src/data/blog-posts.ts for easy updates
- [x] Individual blog post pages with dynamic routing
- [x] Added scroll animations (reveal, reveal-left, reveal-right, reveal-scale)
- [x] Fixed image loading with local images
- [x] Restored original logo and images
- [x] Footer exactly matches original website
- [x] Fixed background image on founded section (not full page)
- [x] Added count-up animation for stats (31.2M+, 1.4k+, 50k+, 35%)
- [x] Added animated video background to hero section
- [x] Created all sub pages with original content
- [x] Fixed SoundCloud icon in footer and updated link
- [x] Added all support section pages from original site
- [x] Integrated SupportSearch component on support page
- [x] Search works with real-time results, keyboard navigation, and relevance scoring
- [x] Fixed support pages with expandable accordion sections
- [x] Created case study page with original images
- [x] Updated join page with checkboxes for Terms and Privacy
- [x] Added Confirm Password field to join page
- [x] Created ExpandableArticles client component for hash URL navigation
- [x] Support pages now support direct links like #how-to-load
- [x] Updated Terms page with complete legal content (sections 1-15)
- [x] Updated Privacy page with all 12 sections from original
- [x] All legal hyperlinks preserved (GDPR, Swiss law, FDPIC, etc.)

## Privacy Page - All 12 Sections Complete
1. Contact details
2. Processing of personal data (2.1-2.4 subsections)
3. Rights of Data Subjects
4. Data security
5. Use of the website (5.1-5.3 subsections)
6. Notifications and communications (6.1-6.3 subsections)
7. Third-party services
8. Social Media (Instagram, X, SoundCloud)
9. Extensions for the website (Google Fonts, Font Awesome)
10. Success and reach measurement (Google Analytics)
11. Advertising (Google Ads, Meta Ads)
12. Final provisions

## Version 32 - Complete Terms Page
- [x] Added missing sections 7-15 to Terms page
- [x] Section 7: Modification of terms of use
- [x] Section 8: Refunds policy
- [x] Section 9: Coupon/Promotional codes
- [x] Section 10: Guarantee & warranty
- [x] Section 11: Copyright and Trade Mark Notices
- [x] Section 12: Songrocket content ownership and use
- [x] Section 13: Third Party Applications and Devices
- [x] Section 14: Litigation
- [x] Section 15: Customer support

## Terms Page Structure
All 15 sections are now complete:
1. Introduction
2. Definitions
3. Changes to the Agreements
3. Having fun with SongRocket (3.1-3.4 subsections)
4. Accounts and Registration
5. DISCLAIMERS, LIMITS OF LIABILITY AND INDEMNITIES. PROHIBITIONS
6. Funding, Accounting, Payouts, Refund, Purchases
7. Modification of the terms of use
8. Refunds
9. Coupon or Promotional Code
10. Guarantee & warranty
11. Copyright and Trade Mark Notices
12. Songrocket content ownership and use
13. Third Party Applications and Devices
14. Litigation
15. Customer support

## Recently Completed (Version 38)
- [x] Restored all 33 blog posts as markdown files
- [x] All posts now load from content/blog directory
- [x] Each post has full front matter and content
- [x] Blog listing shows all posts correctly
- [x] Home page blog section shows latest 3 posts

## Version 37 - Decap CMS Integration
- [x] Added Decap CMS integration for blog post editing
- [x] Created admin panel at /admin
- [x] Converted blog posts to markdown files (content/blog/)
- [x] Added gray-matter and marked for markdown processing
- [x] Updated blog pages to read from markdown files

## Decap CMS Setup
Blog posts are now stored as markdown files in `content/blog/`.
- Admin panel: `/admin` (after deployment)
- Local development: Run `bun run cms` in a separate terminal
- Posts are stored in `content/blog/*.md`

## Previously Completed (Version 36)
- [x] Updated "The Playlist - Spotify Netflix Series Review" blog post image to use Spotify logo

## Previously Completed (Version 24)
- [x] Updated join page to match original SongRocket registration form
- [x] Added checkboxes for Terms and Conditions agreement
- [x] Added checkboxes for Privacy Policy agreement
- [x] Links open in target="_blank" matching original
- [x] Added Confirm Password field
- [x] Added Back and Sign In navigation links in header
- [x] Purple/pink gradient styling with wave background
- [x] Created ExpandableArticles client component for hash URL navigation
- [x] Support pages now support direct links like #how-to-load
- [x] Auto-scroll and auto-expand when navigating with hash URLs
- [x] Updated for-artists, for-curators, faqs, general-tips pages

## Direct Link Support
The following URLs now work with auto-expand:
- `/support/for-curators#how-to-load` - How to load playlists
- `/support/for-curators#monetize` - How to monetize
- `/support/for-curators#payment` - Payment info
- `/support/for-artists#pricing` - Campaign pricing
- `/support/for-artists#submit` - How to submit
- `/support/faqs#how-does-it-work` - How it works
- `/support/general-tips#marketing` - Marketing tips

## Next Steps (for user)
- [ ] Deploy website to production
- [ ] Add contact form functionality (backend integration)
- [ ] Integrate with payment system for Pricing
- [ ] Connect to CMS for blog management (optional)

## File Structure for Blog Updates
To add new blog posts:
1. Edit `src/data/blog-posts.ts`
2. Add new entry to `blogPosts` array
3. Add corresponding content to `blogContent` object

## Color Scheme
- Primary Orange: #FF6B35
- Dark Background: #0e0c0c
- Gradient: #c93172 to #970fb4
- Secondary Pink: #c93172

## Key Features
- Modern scroll animations with intersection observer
- Parallax scrolling effects
- Count-up animation for stats
- Responsive design for all devices
- Dropdown navigation menus
- Blog system with easy content updates
- Strong SEO optimization
- Mobile menu with slide-out panel
- All sub pages with original content
- Complete support section matching original site

## All Pages Created
| Page | Path | Description |
|------|------|-------------|
| Home | / | Main landing page |
| Record Label | /record-label | Main label page |
| Demo Submission | /record-label/demo-submission | Submit music form |
| Learn More | /record-label/learn-more | About the label |
| For Artists | /for-artists | Artist services |
| Pitch Spotify | /for-artists/pitch-spotify | Spotify pitching |
| For Curators | /for-curators | Curator services |
| Discover | /for-curators/discover | Find new music |
| Apply | /for-curators/apply | Apply as curator |
| Pricing | /pricing | Campaign costs |
| Pricing FAQ | /pricing/faq | Pricing questions |
| Login for Prices | /pricing/login | Login redirect |
| Support | /support | Support center |
| FAQs | /support/faqs | Frequently asked questions |
| For Artists Support | /support/for-artists | Artist help articles |
| For Curators Support | /support/for-curators | Curator help articles |
| General Tips | /support/general-tips | Music industry tips |
| Solutions | /support/solutions | Pitching solutions |
| Affiliate | /support/affiliate | Affiliate program |
| Chat | /support/chat | Live chat |
| Help | /support/help | Help center |
| Contact | /contact | Contact page |
| Sign In | /signin | Login page |
| Join | /join | Registration |
| About | /about | About us |
| Terms | /terms | Terms of Service |
| Privacy | /privacy | Privacy Policy |
| Blog | /blog | Blog listing |

## Assets
- Logo: /images/logo.svg
- Footer Logo: /images/logo-footer.svg
- Hero Banner: /images/hero-bg.jpg
- Artists Image: /images/artist.jpg
- Curators Image: /images/curator.jpg
- Footer Background: /images/footer-bg.jpg
